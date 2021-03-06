import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {


  constructor(props)
  {
    super(props)
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
    
    
  }

  _handleMudancaCategoria(evento)
  {
    evento.stopPropagation();
    this.categoria = evento.target.value
  }

  _handleMudancaDeTitulo(evento){

    evento.preventDefault();
    evento.stopPropagation();
    this.titulo = evento.target.value
   /*  console.log(evento.target.value); */
  }

  _handleMudancaDeTexto(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.texto = evento.target.value;
    /* console.log(evento.target.value); */
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria)
    
  }

  render() {
    return (
      <form className="form-cadastro " 
      onSubmit={this._criarNota.bind(this)}
      >
      
        <select 
          className="form-cadastro_input"
          onChange={this._handleMudancaCategoria.bind(this)}>
          <option>Sem categoria</option>
          {this.props.categorias.map(categoria =>{
            return <option>{categoria}</option>
            
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange = {this._handleMudancaDeTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange = {this._handleMudancaDeTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
