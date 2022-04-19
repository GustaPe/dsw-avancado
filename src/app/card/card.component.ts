import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';
import { Produtos } from '../data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  produto = Produtos;
 /* produtos : Produto[] = [];*/
  constructor(/*private cadastro : CadastroService*/) {}

  ngOnInit(): void {
   /* this.cadastro.listarProdutos().subscribe(produtos =>{
      console.log(produtos);
      this.produtos = produtos;
    })*/
  }
}
