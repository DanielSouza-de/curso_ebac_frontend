<script setup>
import { ref, computed } from 'vue'

const numero1 = ref(0)
const numero2 = ref(0)
const operacao = ref('+')

const resultado = computed(() => {
  const n1 = Number(numero1.value)
  const n2 = Number(numero2.value)

  switch (operacao.value) {
    case '+':
      return n1 + n2
    case '-':
      return n1 - n2
    case '*':
      return n1 * n2
    case '/':
      return n2 !== 0 ? n1 / n2 : 'Erro'
    default:
      return 0
  }
})
</script>

<template>
  <div class="container">
    <h1>Calculadora</h1>

    <input type="number" v-model="numero1">

    <select v-model="operacao">
      <option value="+">Soma</option>
      <option value="-">Subtração</option>
      <option value="*">Multiplicação</option>
      <option value="/">Divisão</option>
    </select>

    <input type="number" v-model="numero2">

    <div class="resultado">
      Resultado: {{ resultado }}
    </div>
  </div>
</template>

<style>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

body {
  margin: 0;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: radial-gradient(circle at top, #1a1a1a, #050505 70%);
  font-family: "Segoe UI", sans-serif;
}


.container {
  width: 340px;
  padding: 35px;

  background: #0b0b0b;

  border-radius: 16px;
  border: 1px solid #d4af37;

  box-shadow:
    0 0 30px rgba(212,175,55,0.15),
    0 10px 40px rgba(0,0,0,0.8);

  text-align: center;
}


h1 {
  text-align: center;
  margin-bottom: 25px;
  color: #d4af37;
  letter-spacing: 2px;
}


input,
select {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  background: #0f0f0f;
  border: 1px solid #333;
  border-radius: 6px;
  color: #d4af37;
  font-size: 15px;
}

input:focus,
select:focus {
  outline: none;
  border: 1px solid #d4af37;
  box-shadow: 0 0 10px rgba(212,175,55,0.4);
}

.resultado {
  margin-top: 20px;
  padding: 15px;
  background: #0f0f0f;
  border: 1px solid #d4af37;
  border-radius: 6px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #d4af37;
}
</style>
