import ChallengeLayout from '../components/ChallengeLayout';
import SectionHeading from '../components/SectionHeading';

const FourthChallenge = () => {
  return (
    <ChallengeLayout
      day={4}
      footerQuote={
        <>
          "Quando você enxerga o menino que seu pai foi, o coração entende o que a mente julgava."
        </>
      }
    >
      <section className="course-section">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Instruções</SectionHeading>
          <div className="course-card space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              Chegamos ao nosso <strong>quarto dia do desafio.</strong> Hoje o convite é para que
              você mergulhe no silêncio do coração e volte a olhar para o que muitas vezes fica
              escondido: <strong>a criança que seu pai foi antes de ser pai.</strong>
            </p>
            <p>
              Esse menino, com seus medos, faltas e sonhos não realizados, carrega histórias que
              moldaram quem ele é e, como consequência, impactaram sua própria vida. Ao se conectar
              com essa criança interior dele, você cria espaço para uma postura interna que cura
              feridas antigas.
            </p>
            <p>
              Não se trata de justificar faltas, mas de reconhecer e acolher a humanidade dele — e,
              ao fazer isso, acolher a sua própria criança interior que ainda deseja ser vista e
              compreendida.
            </p>
          </div>
        </div>
      </section>

      <section className="course-section bg-course-bg-alt/50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Exercício 04 — A criança interior do pai</SectionHeading>
          <div className="course-card space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              Escolha um lugar tranquilo, onde consiga se sentar de forma confortável. Coloque nossa
              playlist, feche os olhos e respire profundamente três vezes. Visualize diante de você
              a imagem do seu pai — mas não o homem que você conhece hoje. Aos poucos, essa imagem
              vai se transformando até que você consiga enxergá-lo com <strong>6 ou 7 anos</strong>.
            </p>
            <p>Observe com atenção:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>O tamanho dessa criança.</li>
              <li>O olhar: confiante ou inseguro? Alegre, triste ou assustada?</li>
              <li>Como ela está vestida e onde ela está.</li>
            </ul>

            <p>
              Pegue papel e lápis e desenhe um menino para representar essa criança. Ao olhar para
              o desenho, pergunte suavemente:
            </p>

            <div className="course-quote">"O que você precisava e não recebeu?"</div>

            <p>Quando sentir o momento certo, diga mentalmente para essa criança:</p>

            <div className="course-affirmation space-y-1">
              <p>"Eu reconheço a sua dor."</p>
              <p>"Eu vejo o que você não recebeu."</p>
              <p>"Você fez o que pôde com o que teve."</p>
            </div>

            <p>Antes de abrir os olhos, repita para si mesmo(a):</p>
            <div className="text-center font-semibold text-course-text space-y-1">
              <p>"Agora eu compreendo que antes de ser meu pai, você também foi uma criança."</p>
              <p>"E eu escolho olhar para você com um novo olhar."</p>
            </div>

            <p>
              <strong>Lembre-se:</strong> a dor não foi responsabilidade sua. Mas a cura está em
              suas mãos!
            </p>

            <p><strong>Perguntas de consciência:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Qual foi a história do meu pai antes de eu nascer?</li>
              <li>Que feridas ele pode ter carregado na infância dele?</li>
              <li>Como era o relacionamento dele com o pai e com a mãe?</li>
              <li>Será que parte da ausência que eu senti é um reflexo de ausência que ele também viveu?</li>
              <li>O que muda quando eu vejo meu pai como um menino ferido?</li>
            </ul>
          </div>
        </div>
      </section>
    </ChallengeLayout>
  );
};

export default FourthChallenge;
