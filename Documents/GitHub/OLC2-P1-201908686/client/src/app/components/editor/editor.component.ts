import { Component, OnInit } from '@angular/core';
import { EditorService } from '../../services/editor.service'

const defaults = {
  markdown:
    '# Heading\n\nSome **bold** and _italic_ text\nBy [Scott Cooper](https://github.com/scttcper)',
  'text/typescript': `const component = {
  name: "@ctrl/ngx-codemirror",
  author: "Scott Cooper",
  repo: "https://github.com/scttcper/ngx-codemirror"
};
const hello: string = 'world';`,
};

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  codigo:any = ""
  consola:any = ""

  constructor(private editorService:EditorService) { }

  ngOnInit(): void {
    this.editorService.getTablaSimbolos().subscribe(
      res => {
        this.consola = res
        console.log(this.consola['simbolos'])
      },
      err => console.error(err)
    )
  }

  readOnly = false;
  mode: keyof typeof defaults = 'markdown';
  options = {
    lineNumbers: true,
    mode: this.mode,
  };
  defaults = defaults;

  changeMode(): void {
    this.options = {
      ...this.options,
      mode: this.mode,
    };
  }

  handleChange($event: Event): void {
    console.log('ngModelChange', $event);
  }

  clear(): void {
    this.defaults[this.mode] = '';
  }

  ejecutar() {
    this.editorService.ejecutar(this.codigo).subscribe(
      res => {
        console.log(res)
        this.consola = res
      },
      err => console.error(err)
    )
  }

  limpiar() {
    this.codigo = ""
    this.consola.consola = ""
  }
}
