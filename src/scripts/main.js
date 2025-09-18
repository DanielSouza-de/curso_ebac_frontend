document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-sorteador');
    const resultado = document.getElementById('resultado-valor');
    const containerResultado = document.querySelector('.resultado');

    // Criando container do histórico
    const historicoContainer = document.createElement("div");
    historicoContainer.classList.add("historico");
    historicoContainer.innerHTML = `
        <h2>Histórico de sorteios</h2>
        <ul id="historico-lista"></ul>
        <button id="limpar-historico">Limpar histórico</button>
    `;
    document.querySelector("main").appendChild(historicoContainer);

    const listaHistorico = document.getElementById("historico-lista");
    const btnLimpar = document.getElementById("limpar-historico");

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        let numeroMaximo = parseInt(document.getElementById('numero-maximo').value);

        if (isNaN(numeroMaximo) || numeroMaximo <= 0) {
            alert("Digite um número válido maior que 0!");
            return;
        }

        containerResultado.style.display = 'block';

        function sortearComSuspense() {
            let contador = 0;
            const maxTentativas = 30;
            let delay = 50;

            function mostrarNumero() {
                contador++;
                const numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
                resultado.textContent = numeroAleatorio;

                if (contador < maxTentativas) {
                    delay += 10;
                    setTimeout(mostrarNumero, delay);
                } else {
                    const numeroFinal = Math.floor(Math.random() * numeroMaximo) + 1;
                    resultado.textContent = numeroFinal;

                    // Adiciona no histórico
                    const item = document.createElement("li");
                    item.textContent = numeroFinal;
                    listaHistorico.prepend(item);
                }
            }

            mostrarNumero();
        }

        sortearComSuspense();
    });

    // Botão limpar histórico
    btnLimpar.addEventListener("click", () => {
        listaHistorico.innerHTML = "";
    });
});