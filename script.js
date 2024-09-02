const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você já passou por algum evento ou momento específico que  te provocou ansiedade ?",
        alternativas: [
            {
                texto: "Sim, eu já passei por um evento específico que me provocou ansiedade.",
                afirmacao: "Sinto muito que você tenha passado por momentos de ansiedade, procurar conversar com um profissional é ótimo..."
            },
            {
                texto: "Não, eu não passei por nenhum evento ou momento específico que tenha me provocado ansiedade.",
                afirmacao: "Que ótimo não ter ocorrido isso contigo, mas é bom se informar para ajudar pessoas próximas de você."
            }
        ]
    },
    {
        enunciado: "Durante um momento de ansiedade como você gostaria de ser ajudado?",
        alternativas: [
            {
                texto: "Eu gostaria de ser ajudado de forma compreensiva e paciente dando apoio emocional.",
                afirmacao: "É importante receber apoio emocional de forma compreensiva e paciente."
            },
            {
                texto: "gostaria que me deixassem sozinho quieto no meu canto.",
                afirmacao: "É importante receber apoio emocional para que consiga se acalmar e não ficar em uma situação pior."
            }
        ]
    },
    {
        enunciado: "Quando você está ansioso, qual tipo de apoio você prefere receber de amigos ou familiares?",
        alternativas: [
            {
                texto: "Quando estou ansioso, prefiro receber apoio da minha família de maneira calma e compreensiva.",
                afirmacao: "Às vezes, um gesto simples, como uma conversa tranquila ou um abraço acolhedor, pode fazer uma grande diferença."
            },
            {
                texto: "Quando estou ansioso, prefiro receber apoio dos meus amigos de maneira leve e descontraída.",
                afirmacao: "Às vezes, um simples convite para sair ou uma conversa despretensiosa pode ajudar muito."
            }
        ]
    },
    {
        enunciado: " Você tem alguma preferência por ambientes ou métodos de suporte quando se trata de lidar com a ansiedade?",
        alternativas: [
            {
                texto: "Sim, prefiro ambientes tranquilos e confortáveis quando estou lidando com a ansiedade.",
                afirmacao: "Sinto muito que você precise de ambientes tão específicos para lidar com a ansiedade. Pode ser difícil encontrar esse tipo de tranquilidade em todos os momentos."
            },
            {
                texto: "Não tenho uma preferência específica por ambientes ou métodos de suporte quando estou lidando com a ansiedade.",
                afirmacao: "Lamento saber que você não tem uma preferência clara por ambientes ou métodos de suporte. Isso pode tornar mais desafiador encontrar o que realmente ajuda a aliviar a ansiedade."
            }
        ]
    },
    {
        enunciado: "Você sabia que tem um suporte gratuito que ajuda muito ? O nome é Centro de Valorização da Vida.",
        alternativas: [
            {
                texto: "Sim, eu conheço o Centro de Valorização da Vida (CVV) e realmente é um recurso valioso.",
                afirmacao: " Vou considerar entrar em contato com eles para obter suporte e indicar para amigos."
            },
            {
                texto: " Não sabia sobre o Centro de Valorização da Vida (CVV). Agradeço por compartilhar essa informação.",
                afirmacao: " É ótimo saber que há ajuda disponível sempre que precisamos."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
