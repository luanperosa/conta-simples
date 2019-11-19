import React, { Component } from 'react';
import './App.css';
import ContaFacil from './db.json';
import jsonTeste from './db-fakeAPI';
import axios from 'axios';

import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CreditCardIcon from '@material-ui/icons/CreditCard';

class App extends Component {
  state = {
    contaFacil: [],
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URI, {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN
      }
    })
      .then((result) => {
        this.setState({
          contaFacil: result.data
        })
      })
  }
  
  
  showDatas = (clients) => {
    return clients.map((client, idx) => {
      return (
        <>
          <ul key={idx}>
            <li>DESCRIÇÃO ABREVIADA: <strong>{client.descricaoAbreviada}</strong></li>
            <li>VALOR: <strong>R${client.valorBRL}</strong></li>
            <li>CARTÃO MASCARADO: <strong>{client.cartaoMascarado}</strong></li>
          </ul>
          <hr/>
        </>
      )
    })
  }

  buttonAlert = () => {
    alert(
      'Fuja das complicações dos bancos tradicionais, venha para conta facil. DEPOSITE AGORA!'
      );
  }

    render() {
      const { contaFacil } = this.state
      return (
        <div className="app">
          <div className="container">
          <h1>simples</h1>

          <div className="saldo">
            <h2>R$ 31.450,00 <VisibilityOffIcon /></h2>
            <p>Último rendimento <strong>R$12,87</strong>(12 de dezembro)</p>
            <button onClick={() => this.buttonAlert()}>DEPOSITAR</button>

          </div>

          <div className="meus-cartoes">
            <h3>MEUS CARTÕES</h3>
              
              <ul className="list-card">
                <li>
                <div className="card">
                  <CreditCardIcon />
                  <p>*** *** *** </p>
                  <p>FÍSICO</p>
                  <p className="dist">DESBLOQUEAR</p>
                  <p>CARTÃO</p>

                </div>

                </li>
                <li>
                  <div className="card">
                    <CreditCardIcon />
                    <p>*** *** 3123 </p>
                    <p>VIRTUAL</p>
                    <p className="dist">UBER</p>

                  </div>

                </li>
              </ul>

          </div>

          <h3>ULTIMAS MOVIMENTAÇÕES</h3>

          </div>

          <div className="ultimas">
            {this.showDatas(contaFacil)}

          </div>

          
        </div>
      );

    }
}

export default App;
