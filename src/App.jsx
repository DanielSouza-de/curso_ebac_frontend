import { useState } from 'react'
import './App.css'

function App() {

  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [imc, setImc] = useState(null)
  const [classificacao, setClassificacao] = useState('')

  function calcularIMC(e) {
    e.preventDefault()

    const alturaNumero = parseFloat(altura)
    const pesoNumero = parseFloat(peso)

    const resultado = pesoNumero / (alturaNumero * alturaNumero)

    setImc(resultado.toFixed(2))

    if (resultado < 18.5) {
      setClassificacao('Abaixo do peso')
    } else if (resultado < 24.9) {
      setClassificacao('Peso normal')
    } else if (resultado < 29.9) {
      setClassificacao('Sobrepeso')
    } else if (resultado < 34.9) {
      setClassificacao('Obesidade grau 1')
    } else if (resultado < 39.9) {
      setClassificacao('Obesidade grau 2')
    } else {
      setClassificacao('Obesidade grau 3')
    }
  }

  return (
    <>
      <h1>Calculadora de IMC</h1>

      <form onSubmit={calcularIMC}>

        <input
          type="number"
          placeholder="Altura (ex: 1.75)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <input
          type="number"
          placeholder="Peso (ex: 70)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <button type="submit">
          Calcular
        </button>

      </form>

      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <p>{classificacao}</p>
        </div>
      )}
    </>
  )
}

export default App