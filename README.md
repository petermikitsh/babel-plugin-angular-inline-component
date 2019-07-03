# babel-plugin-angular-inline-component

Babel plugin to Inline Angular 2+ Component decorator `templateUrl` and `styleUrls`.

## Usage

```
npm i github:petermikitsh/babel-plugin-angular-inline-component
```

In `.babelrc`:

```
{
  plugins: ['babel-plugin-angular-inline-component']
}
```

## Example

### Input

```js
import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {}
```

### Output

```js
import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  template: "<div>\n  <div class=\"title\">foo</div>\n  <div>bar</div>\n</div>\n",
  styles: [".title {\n  color: red;\n}\n"]
})
export class TestComponent {}
```

### Limitations

Only `styleUrls` with a `.css` extension are supported.

### Development

This module was developed against Node `v8.15.0`.

```
npm i
npm run watch
```
