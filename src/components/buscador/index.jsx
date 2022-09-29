import React from 'react';
import { useState } from 'react';
import './style.css';




export const Buscador = () => {
const [cep, setCep] = useState("");
const [endereco, setEndereco] = useState([]);

const getCep = async(e, numero) => {
    
    e.preventDefault();
    let url = "https://viacep.com.br/ws/"+numero+"/json/";
    
    await fetch(url)
    .then(res => res.json())
    .then(data => {
        setEndereco(data)
    }).catch(() => setEndereco(false));
   
}    

  return (
    
    <div>

        <form action="" className='form' onSubmit={(e) => getCep(e, cep)}>
            <div className='input'>
                Cep: <input type="text" name='cep' onChange={(e) => setCep(e.target.value)}/>
            </div>
            <button>Buscar</button>
            <br />
            
            {endereco.cep ? 
            <div className="dados">
                <h3>Endereco:</h3>
                <p>Cep: {endereco.cep} </p>
                <p>Rua: {endereco.logradouro} </p>
                <p>Bairro: {endereco.bairro} </p>
                <p>Cidade: {endereco.localidade} </p>
                <p>Estado: {endereco.uf} </p>
                {endereco.complemento ? <p>Complemento: {endereco.complemento} </p> : <br/>}
            </div> : <p>Digite um cep valido e pressione o butão</p> }
            
            

        </form>
    </div>
  )
}
