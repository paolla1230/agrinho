let gotas = [];
let slider, valorSlider, mensagem;

function setup() {
    let canvas = createCanvas(800, 300);
    canvas.parent('sketch-holder');
}

function draw() {
    background(200, 230, 255);

    for (let g of gotas) {
        fill(0, 120, 255);
        noStroke();
        ellipse(g.x, g.y, 8, 8);

        g.y += g.speed;

        if (g.y > height) {
            g.y = 0;
        }
    }
}

window.onload = function () {

    slider = document.getElementById("agua");
    valorSlider = document.getElementById("valorSlider");
    mensagem = document.getElementById("mensagem");

    function atualizar() {
        let valor = slider.value;

        valorSlider.tex        }
23
    }
24
}
25
​
26
// espera carregar DOM
27
window.onload = function () {
28
​
29
    slider = document.getElementById("agua");
30
    valorSlider = document.getElementById("valorSlider");
31
​
32
    function atualizarGotas() {
33
        let valor = slider.value;
34
        valorSlider.textContent = valor + " litros/dia";
35
​
36
        gotas = [];
37
​
38
        for (let i = 0; i < valor / 20; i++) {
39
            gotas.push({
40
                x: Math.random() * 800,
41
                y: Math.random() * 300,
42
                speed: 1 + Math.random() * 3
43
            });
44
        }
45
    }
46
​
47
    slider.addEventListener("input", atualizarGotas);
48
    atualizarGotas();
49
​
50
    // QUIZ
51
    const botoes = document.querySelectorAll(".quiz-btn");
52
    const resposta = document.getElementById("respostaQuiz");
53
​
54
    botoes.forEach(btn => {
55
        btn.addEventListener("click", () => {
56
            if (btn.dataset.correto === "true") {
57
                resposta.textContent = "✔ Correto! Gotejamento economiza mais água.";
58
                resposta.style.color = "green";
59
            } else {
60
                resposta.textContent = "✘ Incorreto. Tente novamente.";
61
                resposta.style.color = "red";
62
            }
63
        });
64
    });
65
};tContent = valor + " litros/dia";

        // mensagem educativa
        if (valor < 200) {
            mensagem.textContent = "✔ Uso eficiente da água no campo.";
            mensagem.style.color = "green";
        } else if (valor < 600) {
            mensagem.textContent = "⚠ Atenção: consumo moderado.";
            mensagem.style.color = "orange";
        } else {
            mensagem.textContent = "❌ Alto desperdício de água!";
            mensagem.style.color = "red";
        }

        // gotas
        gotas = [];

        for (let i = 0; i < valor / 25; i++) {
            gotas.push({
                x: Math.random() * 800,
                y: Math.random() * 300,
                speed: 1 + Math.random() * 3
            });
        }
    }

    slider.addEventListener("input", atualizar);
    atualizar();

    // quiz
    const botoes = document.querySelectorAll(".quiz-btn");
    const resposta = document.getElementById("respostaQuiz");

    botoes.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.dataset.correto === "true") {
                resposta.textContent = "✔ Correto! Gotejamento é o mais eficiente.";
                resposta.style.color = "green";
            } else {
                resposta.textContent = "✘ Resposta incorreta. Tente novamente.";
                resposta.style.color = "red";
            }
        });
    });
};