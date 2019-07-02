# babel-plugin-angular-inline-component

Babel plugin to Inline Angular 2+ Component `templateUrl` and `styleUrls`.

## Usage

```
{
  plugins: ['babel-plugin-angular-template']
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

### Development

This module was developed against Node `v8.15.0`.

```
npm i
npm run watch
```