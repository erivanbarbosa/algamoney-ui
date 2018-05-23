import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent{

  pessoas = [
    { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', ativo: true},
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', ativo: false},
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', ativo: true},
    { nome: 'Luis Pereira', cidade: 'Curitiba', estado: 'PR', ativo: true},
    { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false},
    { nome: 'Paulo Paixão', cidade: 'Itapecirica', estado: 'CE', ativo: true},
    { nome: 'Jonelso Silva', cidade: 'Jonelsolandia', estado: 'GO', ativo: true}
  ];
}
