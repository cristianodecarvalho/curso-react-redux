import "./App.css"
import React from 'react';

import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro.jsx'
import Fragmento from './components/basicos/Fragmento'

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#12 Contador" color="#424242">
                <Contador numeroInicial={10}/>
            </Card>

            <Card titulo="#11 Componente controlado" color="#E45F56">
                <Input/>
            </Card>

            <Card titulo="#10 Comunicação indireta" color="#8BAD39">
                <IndiretaPai/>
            </Card>

            <Card titulo="#9 Comunicação direta" color="#59323C">
                <DiretaPai/>
            </Card>

            <Card titulo="#8 Renderização condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Cristiano'}}/>
            </Card>

            <Card titulo="#7 Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#6 Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#5 Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Cristiano" />
                    <FamiliaMembro nome="Italo" />
                    <FamiliaMembro nome="Caue" />
                </Familia>
            </Card>

            <Card titulo="#4 Desafio aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#3 Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#2 Com parametro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Cristiano Filho"
                    nota={9.3} />
            </Card>

            <Card titulo="#1 Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>
);
