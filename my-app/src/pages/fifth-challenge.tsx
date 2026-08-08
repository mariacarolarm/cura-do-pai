import ChallengeLayout from '../components/ChallengeLayout';
import SectionHeading from '../components/SectionHeading';

const FifthChallenge = () => {
  return (
    <ChallengeLayout
      day={5}
      footerQuote={
        <>
          "Dentro de você vibra a força esquecida dos homens da sua família, esperando ser
          lembrada para conduzir seus passos."
        </>
      }
    >
      <section className="course-section">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Instruções</SectionHeading>
          <div className="course-card space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              Em muitas famílias, a presença do masculino foi esquecida. A capacidade de decidir,
              orientar e proteger acabou sendo apagada pelas dores, fracassos e histórias não
              contadas dos homens que vieram antes.
            </p>
            <p>
              Mas o masculino não deixa de existir porque foi esquecido. Ele apenas se esconde,
              esperando ser reconhecido novamente. Hoje, você é convidado a dar um passo para
              resgatar essa força — não apenas em relação ao seu pai, mas em todos os homens que
              fazem parte da sua história.
            </p>
            <p>Quando o masculino é honrado e valorizado, a vida volta a fluir.</p>
          </div>
        </div>
      </section>

      <section className="course-section bg-course-bg-alt/50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Exercício 05 — A cadeira que simboliza a força dos homens</SectionHeading>
          <div className="course-card space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              Para realizar o exercício, você precisará de uma cadeira. Escolha um lugar tranquilo,
              prepare o ambiente ouvindo nossa playlist e posicione a cadeira vazia à sua frente.
              Visualize que essa cadeira representa seu pai, e atrás dele, todos os homens da sua
              linhagem: avôs, bisavôs, tios, irmãos e até aqueles que não conheceu.
            </p>

            <div className="course-quote">
              "Eu honro vocês. Reconheço que cada um fez o que pôde com o que tinha. Recebo essa
              força que veio através de vocês e entrego o que não me cabe carregar. Me permitam
              crescer e prosperar. Será por mim e por vocês."
            </div>

            <p>
              Com um gesto consciente, sente-se no chão diante dessa cadeira. Permita-se sentir o
              peso e a grandeza de estar sustentado(a) por todos eles. Quando sentir que é o
              momento, levante-se e agradeça mentalmente:
            </p>

            <div className="course-affirmation">
              "Eu sigo com a minha vida, levando comigo a força de todos os homens que vieram
              antes de mim."
            </div>

            <p><strong>Sua tarefa:</strong></p>
            <p>
              Após o exercício, saia e caminhe. Antes do primeiro passo, imagine todos os homens do
              seu sistema familiar caminhando atrás de você. Ao chegar em casa, escolha uma ação
              prática que simbolize levar essa força masculina saudável para o mundo:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Tomar uma decisão que estava adiando.</li>
              <li>Organizar algo que está bagunçado.</li>
              <li>Falar com clareza algo que você costuma evitar.</li>
              <li>Cumprir um compromisso que você assumiu com você mesmo(a).</li>
            </ul>

            <p className="text-center font-semibold italic text-course-text">
              "Eu ajo com a força e a direção que recebi."
            </p>

            <p><strong>Perguntas de consciência:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Como está seu masculino interior hoje: ele te empurra ou te paralisa?</li>
              <li>Quando precisa decidir algo importante, você sente segurança ou dúvida constante?</li>
              <li>Como seria ter um "masculino interno" que cuida de você, te protege e te apoia?</li>
            </ul>
          </div>
        </div>
      </section>
    </ChallengeLayout>
  );
};

export default FifthChallenge;
