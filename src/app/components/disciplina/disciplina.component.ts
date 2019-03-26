import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.scss'],
  animations: [routerTransition()]
})
export class DisciplinaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}