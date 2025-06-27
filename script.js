const perguntas = [
  {
    texto: "Qual tecnologia ajuda os agricultores a monitorar o solo?",
    opcoes: ["Drone", "Sensor de umidade", "GPS do celular"],
    correta: 1
  },
  {
    texto: "Como a cidade se beneficia do campo?",
    opcoes: ["Fornecimento de alimentos", "Lazer rural", "Ambos"],
    correta: 2
  }
];

let indice = 0;

function mostrarPergunta() {
  const pergunta = perguntas[indice];
  document.getElementById("pergunta").innerText = pergunta.texto;

  const respostas = document.getElementById("respostas");
  respostas.innerHTML = "";

  pergunta.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");
    botao.innerText = opcao;
    botao.onclick = () => verificarResposta(i);
    respostas.appendChild(botao);
  });
}

function verificarResposta(respostaEscolhida) {
  const correta = perguntas[indice].correta;
  if (respostaEscolhida === correta) {
    alert("✅ Resposta correta!");
  } else {
    alert("❌ Ops, tente novamente!");
  }
  indice = (indice + 1) % perguntas.length;
  mostrarPergunta();
}

function mostrarCuriosidade() {
  const curiosidades = [
    "Drones já são usados para plantar sementes em áreas de difícil acesso!",
    "Sensores ajudam a economizar até 50% da água na agricultura.",
    "Agricultura de precisão usa dados e mapas digitais para aumentar a produção."
  ];
  const aleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
  document.getElementById("texto-curiosidade").innerText = aleatoria;
}

mostrarPergunta();
