import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss'],
  animations: [routerTransition()]
})
export class TurmaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}