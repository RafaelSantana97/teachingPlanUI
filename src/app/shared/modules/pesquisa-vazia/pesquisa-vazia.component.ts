import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pesquisa-vazia',
  templateUrl: './pesquisa-vazia.component.html',
  styleUrls: ['./pesquisa-vazia.component.scss']
})
export class PesquisaVaziaComponent implements OnInit {

  @Input() exibir: boolean;

  exibirTela: boolean;

  ngOnInit() {
    this.exibirTela = this.exibir || false;
  }
}