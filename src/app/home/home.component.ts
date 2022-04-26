import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';
import { Produtos } from '../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos : Produto[] = []

  constructor(private cadastro : CadastroService) { }

  ngOnInit(): void {
    this.cadastro.listarProdutos().subscribe(produtos =>{
      console.log(Produtos);
      this.produtos = produtos;
    
    })
  }
}
