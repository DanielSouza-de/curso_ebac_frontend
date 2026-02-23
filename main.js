const { ContaCorrente, ContaPoupanca } = require('./modelo');

const conta1 = new ContaCorrente("Daniel", 1000);
const conta2 = new ContaPoupanca("Maria", 2000);
const conta3 = new ContaCorrente("João", 500);

conta1.depositar(500);
console.log(conta1.getSaldo());

conta2.renderJuros();
console.log(conta2.getSaldo());

conta3.depositar(300);
console.log(conta3.getSaldo());