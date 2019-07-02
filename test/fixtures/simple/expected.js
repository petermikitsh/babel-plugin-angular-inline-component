import { Component } from '@angular/core';

export @Component({
  selector: 'test-component',
  template: "<div>\n  <div class=\"title\">foo</div>\n  <div>bar</div>\n</div>\n",
  styles: [".title {\n  color: red;\n}\n"]
})
class TestComponent {}
