const caixaPrinciapal =document.querySelector(".caixa-principal");
const caixaPerguntas =document.querySelector(".caixa-perguntas");
const caixaAlternativas =document.querySelector(".caixa-alternativas");
const caixaResultado =document.querySelector(".caixa-resultado");
const textoResultado =document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Prezado(a) candidato(a), Seja cordialmente bem-vindo(a) à iniciação de seu preparo para a seleta e rigorosa seleção da Corte MARALTO. Em nossa venerável nação, a representação exige a impecabilidade de indivíduos que personifiquem a mais alta capacidade e a mais intrínseca pureza. Permita-nos ser concisos e diretos em nossos propósitos.Para a grandiosa Corte MARALTO, selecionaremos apenas 7% dos candidatos.Diante disso, a primeira inquirição que lhe fazemos é: Você realmente acredita possuir a capacidade necessária para ser aprovado(a) no MARALTO?",
        alternativas: [
            "Sim, sou capaz de me arriscar por tudo para passar neste processo!",
            "Talvez eu consiga passar, meus pais passaram…"
        ]
    },
        
    {
        enunciado: "A pureza, conforme exigida pela Corte MARALTO, não se limita à ausência de máculas, mas à projeção de uma essência imaculada. Em sua modesta opinião, o que o(a) distingue dos demais candidatos, garantindo que sua pureza seja inquestionável?",
        alternativas: [
            "Minha conduta sempre foi irrepreensível, e meus princípios são inabaláveis.",
            "Não sei se sou mais puro(a) que os outros, mas busco a perfeição constantemente."
        ]
    },

    {
        enunciado: "A representação de nossa nação demanda uma inteligência perspicaz e uma capacidade de raciocínio superior. Apresente-nos um exemplo concreto em que sua sagacidade se manifestou de forma decisiva para a resolução de um problema complexo.",
        alternativas: [
            "Em uma situação desafiadora, consegui identificar a raiz do problema e propor uma solução inovadora.",
            "Minha intuição me guia, e muitas vezes resolvo problemas de forma não convencional."
        ]
    },

    {
        enunciado: "A dedicação inabalável é uma virtude indispensável para quem aspira à Corte MARALTO. Descreva uma situação em que você demonstrou um compromisso além do esperado para alcançar um objetivo grandioso.",
        alternativas: [
            "Abandonei meus interesses pessoais para me dedicar integralmente a uma causa maior.",
            "Enfrentei inúmeros obstáculos e, mesmo assim, perseverei até atingir o sucesso.       "
        ]
    },

    {
        enunciado: "A lealdade à nação e aos seus preceitos é a pedra angular da Corte MARALTO. Como você definiria e exemplificaria sua lealdade incondicional, especialmente em momentos de crise ou desconfiança externa?",
        alternativas: [
            "Minha lealdade é inquestionável, manifestando-se pela obediência irrestrita às leis e aos símbolos da nação.",
            "Sou capaz de defender os interesses da nação com vigor e sacrifício pessoal, independentemente dos riscos."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();