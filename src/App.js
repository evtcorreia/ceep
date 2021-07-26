import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {


  constructor()
  {
    super();
  
    this.state = {
      notas :[],
      categorias:["trabalho", "esportes"],
    }
  }

  criarNota(titulo, texto)
  {

    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }

    
    this.setState(novoEstado)
  
  }

  adicionarCategoria(nomeCategoria)
  {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {...this.state, categorias:novoArrayCategorias}
    this.setState(novoEstado)
  }

  deletaNota(index)
  {

    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas});
    /* console.log("Deletando nota") */
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota = {this.criarNota.bind(this)}/>
        
          <main className = "conteudo-principal">

            <ListaDeCategorias 
            
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias} />
            <ListaDeNotas 
            deletaNota = {this.deletaNota.bind(this)}
            notas = {this.state.notas}/>
          </main>
      </section>
    );
  }
}

export default App;
