import React, { useState, useEffect } from 'react'
import Maiusculo from './components/maiusculo'
import Maiusculo2 from './components/maiusculo2'
import MaiusculoChildren from './components/maiusculochildren'
import soma from './components/soma'

function App(){
  //const [contador, setContador] = useState(0)
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState('vazio')

  useEffect(()=> {
    document.title="Calculadora React"
  },[]) //quando o array está vazio, é executado uma única vez no carregamento

  useEffect(()=> {
    if (parseFloat(num1.trim()) && parseFloat(num2.trim())){
      setResultado(soma(num1, num2))
    }else{
      setResultado('')
    }
  },[num1, num2])

  {/*
  function adicionarContador(){
    setContador(contador+1)
    console.log(`O valor ${contador} foi adicionado!`)
  }

  function removerContador(){
    setContador(contador-1)
    console.log(`O valor ${contador} foi removido!`)
  }
  */}
  return(
    <>{/*
      <Maiusculo texto="Boa tarde, oi "/>
      <Maiusculo2 texto="Fatec Itu" cor="#FF0000" />
      <Maiusculo2 texto="ads" cor="#0000FF" />
      <MaiusculoChildren>conteudo teste</MaiusculoChildren>
     <div>
        Contador:{ contador } <br/>
        <button onClick={adicionarContador}>Adicionar</button>
        <button onClick={removerContador}>Remover</button>
      </div>
      <br/><br/>
      */}
      <div>
        <label>Número 1: </label>
        <input type="number" required value={num1} onChange={e=> setNum1(e.target.value)} /> <br/>
        <label>Número 2: </label>
        <input type="number" required value={num2} onChange={e=> setNum2(e.target.value)} /> <br/>
        <label>Resultado: </label>
        <input type="text" readOnly value={resultado} />
      </div>
    </>
  )
}
export default App