import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {

  URL = 'http://localhost:3001/produtos';

  constructor(private http: HttpClient) {}

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.URL);
  }

  buscarPorIdProdutos(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.URL}/${id}`);
  }

  incluirProdutos(produto: Produto): Observable<any> {
    return this.http.post(this.URL, produto);
  }

  atualizarProdutos(produto: Produto, id: number): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, produto);
  }

  excluirProdutos(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

}
