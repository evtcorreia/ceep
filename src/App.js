import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";
class App extends Component {

  constructor()
  {
    super();

      this.categorias = new Categorias();
      this.notas = new ArrayDeNotas();

  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          criarNota = {this.notas.criarNota}
          categorias = {this.categorias.categorias}
          />
        
          <main className = "conteudo-principal">

            <ListaDeCategorias             
            adicionarCategoria={this.categorias.addCatogoria}
            categorias={this.categorias.categorias} />

            <ListaDeNotas 
            deletaNota = {this.notas.deletaNota}
            notas = {this.notas.notas}/>
          </main>
      </section>
    );
  }
}

export default App;
