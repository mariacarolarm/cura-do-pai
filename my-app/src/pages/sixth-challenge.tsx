import ChallengeLayout from '../components/ChallengeLayout';
import SectionHeading from '../components/SectionHeading';

const SixthChallenge = () => {
  return (
    <ChallengeLayout
      day={6}
      footerQuote={
        <>
          "Seu pai foi a primeira ponte que ligou você ao mundo. Agora chegou o momento de
          atravessá-la com coragem, guiando-se como o próprio pai de si mesmo(a)."
        </>
      }
    >
      <section className="course-section">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Instruções</SectionHeading>
          <div className="course-card space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              Hoje, você se coloca diante de um portal. De um lado, está a trajetória que te
              trouxe até aqui — feita de memórias, dores, amores e forças esquecidas. Do outro
              lado, o mundo que te aguarda, com caminhos que apenas você pode escolher trilhar.
            </p>
            <p>
              Até aqui, olhamos para o pai, o masculino e os homens da sua família. Hoje é o dia
              de recuperar essa direção. Seguir adiante não é cortar laços, mas honrar cada raiz.
            </p>
            <div className="course-quote text-center not-italic font-semibold">
              "Eu recebo, eu guardo, eu sigo."
            </div>
            <p>
              Hoje, você vai preparar corpo e alma para o próximo passo — avançar com a cabeça
              erguida, o coração aberto e a força da sua linhagem te impulsionando para frente.
            </p>
          </div>
        </div>
      </section>

      <section className="course-section bg-course-bg-alt/50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Exercício 06</SectionHeading>
          <div className="course-card space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              Encontre um local tranquilo onde seja possível ficar de pé e dar alguns passos
              livremente. Coloque duas cadeiras: uma representará seu pai, e a outra, o mundo —
              o seu próximo passo.
            </p>
            <p>
              Fique diante da cadeira do pai, feche os olhos e visualize-o sentado ali. Respire
              profundamente e observe o que acontece em seu corpo ao vê-lo.
            </p>

            <div className="course-quote">
              "Você é meu pai, eu sou seu(ua) filho(a). Recebo a vida de você como ela veio.
              Levo comigo o que é meu e deixo com você o que é seu. Eu honro seu lugar e sigo para
              o meu."
            </div>

            <p>
              Depois, olhe para a cadeira que simboliza o mundo. Imagine esse lugar cheio de
              possibilidades e diga:
            </p>

            <div className="course-quote">
              "Eu carrego você em meu coração, e é pelo amor que agora eu sigo em frente."
            </div>

            <p>
              Dê passos firmes até a cadeira do mundo. Quando chegar, coloque as mãos sobre o
              peito e repita:
            </p>

            <div className="course-affirmation">
              "Eu posso ir. Eu posso viver. Eu posso prosperar e ter sucesso em todas as áreas."
            </div>

            <h3 className="course-card-title text-lg">Sua tarefa</h3>
            <p>
              Transforme o movimento interno em ação concreta. Escolha uma tarefa que você vem
              adiando:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Envie aquela mensagem importante.</li>
              <li>Organize um documento ou espaço bagunçado.</li>
              <li>Resolva uma pendência no trabalho.</li>
              <li>Comece algo que já decidiu fazer, mas não iniciou.</li>
            </ul>

            <p className="text-center font-semibold italic text-course-text">
              "Eu fui. Eu faço. Eu sigo."
            </p>

            <h3 className="course-card-title text-lg">Perguntas de consciência</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Em que áreas da sua vida você ainda espera permissão para ser quem é?</li>
              <li>Onde você tem medo de ir longe demais, de ser demais, de aparecer demais?</li>
              <li>O que você precisa deixar ir para que seu caminho fique mais leve?</li>
              <li>Que parte de você ainda carrega culpa ou medo de prosperar?</li>
              <li>Como seria sua vida se você se permitisse ir, sem olhar para trás?</li>
            </ul>
          </div>
        </div>
      </section>
    </ChallengeLayout>
  );
};

export default SixthChallenge;
