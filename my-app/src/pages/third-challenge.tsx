import ChallengeLayout from '../components/ChallengeLayout';
import SectionHeading from '../components/SectionHeading';

const ThirdChallenge = () => {
  return (
    <ChallengeLayout
      day={3}
      footerQuote={
        <>
          "A criança espera aplausos, o adulto constrói seu próprio palco. E nele, o pai pode
          finalmente aplaudir."
        </>
      }
    >
      <section className="course-section">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Instruções</SectionHeading>
          <div className="course-card space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              Chegamos ao nosso <strong>terceiro dia do desafio.</strong> Nos dias anteriores, você
              revisitou a ausência física ou emocional do seu pai, reconheceu os impactos dessa
              falta e começou a diferenciar o pai real daquele que você idealizou.
            </p>
            <p>
              Hoje, daremos um passo profundo e simbólico. Vamos oferecer à nossa criança interior a
              validação que ela esperou por anos, e que talvez nunca tenha vindo. Prepare-se para
              sentir, liberar e se fortalecer.
            </p>
          </div>
        </div>
      </section>

      <section className="course-section bg-course-bg-alt/50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Exercício 03 — Carta de validação paterna</SectionHeading>
          <div className="course-card space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              Pegue papel e caneta. Procure um ambiente tranquilo, onde possa respirar sem pressa.
              Em seguida, escreva uma carta como se fosse o seu pai validando você.
            </p>
            <p>
              <em>Atenção:</em> essa carta não é sobre o pai real que você teve, mas sobre o pai que
              você precisava que ele tivesse sido. Escreva as palavras que sua criança interior
              esperou ouvir dele por muito tempo.
            </p>

            <div className="course-quote">
              "Meu filho(a), eu vejo você. Eu sei o quanto você tentou me agradar. Eu sei o quanto
              doeu não ter minhas palavras, meu olhar, minha presença. Você é bom(a) o bastante.
              Você não precisa mais carregar esse fardo. Você pode confiar em quem você é."
            </div>

            <p>
              Quando terminar de escrever, feche os olhos e coloque as mãos sobre o papel. Leia a
              carta em voz alta, olhando para si mesmo(a) no espelho, e perceba que o masculino que
              habita em você está validando, abençoando e sustentando o adulto que você é hoje.
            </p>

            <div className="course-affirmation">
              "Eu estou aqui. Eu te seguro. Você é capaz de seguir."
            </div>

            <p>Ao terminar, olhe-se no espelho e diga em voz firme:</p>
            <div className="text-center font-semibold text-course-text space-y-1">
              <p>"Eu me vejo."</p>
              <p>"Eu me valido."</p>
              <p>"Eu me escolho."</p>
            </div>

            <p>
              <strong>Sua tarefa:</strong> hoje, escolha um homem da sua vida e ofereça a ele uma
              validação verdadeira. Pode ser algo simples:
            </p>

            <div className="course-quote">
              "Eu amo você do jeito que você é." / "Você é muito bom no que faz do jeito que faz."
              / "Admiro muito x ou y em você."
            </div>

            <p>
              <strong>Perguntas de consciência:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Em que área da sua vida você sente que mais busca ser reconhecido(a)?</li>
              <li>Você já se pegou se doando demais para não ser esquecido(a)?</li>
              <li>No trabalho, você sente que precisa sempre provar seu valor?</li>
              <li>O que você espera secretamente que alguém diga para você?</li>
              <li>Você sente que precisa fazer mais do que os outros para merecer amor?</li>
            </ul>
          </div>
        </div>
      </section>
    </ChallengeLayout>
  );
};

export default ThirdChallenge;
