import fatherImg from '../assets/fatherImg.png';
import ChallengeLayout from '../components/ChallengeLayout';
import SectionHeading from '../components/SectionHeading';

const SeventhChallenge = () => {
  return (
    <ChallengeLayout
      day={7}
      footerQuote={
        <>
          "O Pai que habita em você desperta a força que sempre esteve adormecida."
        </>
      }
    >
      <section className="course-section">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Instruções</SectionHeading>
          <div className="course-card space-y-4 leading-relaxed text-sm sm:text-base">
            <p>Chegamos ao último dia dessa jornada.</p>
            <p>
              Foram dias de mergulho profundo, de encarar feridas antigas, revisitar memórias e
              abrir espaço dentro de si para novas percepções e significados.
            </p>
            <p>
              Hoje, o movimento é diferente: você vai se tornar a voz que, talvez, nunca tenha
              sido ouvida. A voz do seu pai, falando diretamente ao seu coração.
            </p>
            <p>
              Hoje, não é sobre o que ele fez ou deixou de fazer. É sobre você reconhecer, dentro
              de si, a força que vem dessa origem. Esse exercício não é sobre fantasia — é sobre
              criar um canal interno que te permita seguir sustentado(a), confiante e conectado(a)
              à força paterna.
            </p>
            <p>Hoje, você vai ser, para si mesmo(a), o pai que te impulsiona para o mundo.</p>
          </div>
        </div>
      </section>

      <section className="course-section bg-course-bg-alt/50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Exercício 07 — Carta do pai para você</SectionHeading>
          <div className="course-card space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              Hoje, a proposta é que você escreva como se fosse o seu pai. Crie um ambiente
              tranquilo, coloque nossa playlist, respire fundo e imagine que ele observa você hoje,
              adulto(a), vivendo a sua própria jornada, e decide falar com o coração.
            </p>

            <p>Pegue um papel e escreva no início:</p>
            <div className="course-quote text-center not-italic font-semibold">
              "Filho(a), aqui quem fala é o seu pai…"
            </div>

            <p>A partir daí, permita que as palavras fluam, como se você fosse ele olhando para você:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>O que ele diria sobre as dores que ele te causou?</li>
              <li>O que ele diria sobre as vezes que ele não conseguiu enxergar você?</li>
              <li>O que ele diria sobre o que não conseguiu te dar?</li>
            </ul>

            <p>
              Não se preocupe se vierem palavras doces ou duras. Apenas deixe vir. Guarde essa carta
              e esteja com ela no dia do nosso encontro ao vivo.
            </p>

            <h3 className="course-card-title text-lg">Perguntas de consciência</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>O que você mais buscou no seu pai e ainda não sentiu ter recebido?</li>
              <li>
                De que formas você tem tentado compensar essa falta através das suas ações, suas
                conquistas ou seus silêncios?
              </li>
              <li>
                Como seria a sua vida se você parasse de buscar fora e começasse a escolher, aqui e
                agora, por você?
              </li>
              <li>Que novo caminho você pode abrir para si mesmo(a) a partir de hoje?</li>
            </ul>

            <div className="flex justify-center pt-6">
              <img
                src={fatherImg}
                alt="Pai e filha"
                className="w-64 md:w-80 rounded-2xl shadow-sm ring-1 ring-course-border"
              />
            </div>
          </div>
        </div>
      </section>
    </ChallengeLayout>
  );
};

export default SeventhChallenge;
