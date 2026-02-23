function Conta(nomeTitular, saldoInicial) {
    this.nomeTitular = nomeTitular;

    let _saldo = saldoInicial;

    this.getSaldo = function() {
        return _saldo;
    }

    this.depositar = function(valor) {
        if (typeof valor === 'number' && valor > 0) {
            _saldo += valor;
        }
    }

    this.sacar = function(valor) {
        if (typeof valor === 'number' && valor <= _saldo) {
            _saldo -= valor;
        }
    }

    this._setSaldo = function(valor) {
        _saldo = valor;
    }
}

function ContaCorrente(nomeTitular, saldoInicial) {
    Conta.call(this, nomeTitular, saldoInicial);

    this.tipo = function() {
        console.log("Conta Corrente");
    }
}

function ContaPoupanca(nomeTitular, saldoInicial) {
    Conta.call(this, nomeTitular, saldoInicial);

    this.renderJuros = function() {
        const novoSaldo = this.getSaldo() * 1.05;
        this._setSaldo(novoSaldo);
    }
}

module.exports = {
    Conta,
    ContaCorrente,
    ContaPoupanca
};