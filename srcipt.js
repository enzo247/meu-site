const nao = document.getElementById("nao");
const sim = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");

nao.addEventListener("mouseover", () => {
    const largura = window.innerWidth - 120;
    const altura = window.innerHeight - 60;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    nao.style.left = x + "px";
    nao.style.top = y + "px";
});

sim.addEventListener("click", () => {
   document.getElementById("mensagem").style.display = "block";

    criarCoracoes();
});

function criarCoracoes() {
    setInterval(() => {
        const coracao = document.createElement("div");

        coracao.innerHTML = "❤️";
        coracao.style.position = "absolute";
        coracao.style.left = Math.random() * window.innerWidth + "px";
        coracao.style.top = "-20px";
        coracao.style.fontSize = "30px";

        document.body.appendChild(coracao);

        let pos = -20;

        const animacao = setInterval(() => {
            pos += 5;
            coracao.style.top = pos + "px";

            if(pos > window.innerHeight){
                clearInterval(animacao);
                coracao.remove();
            }
        }, 20);

    }, 200);
}