import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/services/editor.service';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit {

  baseDatos:any = []

  constructor(private editorService:EditorService) { }

  ngOnInit(): void {
    this.editorService.getBasesDatos().subscribe(
      res => {
        this.baseDatos = res
        console.log(this.baseDatos);
      },
      err => {
        console.error(err);
      }
    )
  }

}
