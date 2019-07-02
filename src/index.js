const fs = require('fs');
const path = require('path');

module.exports = function() {
  return {
    visitor: {
      ObjectProperty(nodePath, state) {
        // key being one of ['templateUrl', 'styleUrls']
        const key = nodePath.node.key.name;

        const templateIdentifer = 'templateUrl';
        const stylesIdentifier = 'styleUrls';

        const isTemplate = key === templateIdentifer;
        const isStyles = key === stylesIdentifier;

        const keyMap = {
          [templateIdentifer]: 'template',
          [stylesIdentifier]: 'styles'
        };

        // bail early for ignored keys.
        if (!isTemplate && !isStyles) {
          return;
        }

        /* if templateUrl: relative path to template (HTML)
         * if styleUrl(s): array of relative paths (CSS or SCSS)
         */
        if (isTemplate) {
          nodePath.node.key.name = keyMap[templateIdentifer];
          const transformedFileDir = path.dirname(this.file.opts.filename);
          const currPath = path.resolve(transformedFileDir, nodePath.node.value.value);
          nodePath.node.value.value = fs.readFileSync(currPath).toString();
        }

        if (isStyles) {
          nodePath.node.key.name = keyMap[stylesIdentifier];
          const transformedFileDir = path.dirname(this.file.opts.filename);
          const elements = nodePath.node.value.elements;

          elements.map(stringLiteral => {
            const extIsCSS = stringLiteral.value.endsWith('.css');

            if (extIsCSS) {
              const currPath = path.resolve(transformedFileDir, stringLiteral.value);
              stringLiteral.value = fs.readFileSync(currPath).toString();
            }
          });
        }
      }
    }
  };
};
