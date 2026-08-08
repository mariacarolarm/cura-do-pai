import firstCourseAudio from '../assets/firstCourseaAudio.mp3';
import ChallengeLayout from '../components/ChallengeLayout';
import LessonAudio from '../components/LessonAudio';
import SectionHeading from '../components/SectionHeading';
import TipsSection from '../components/TipsSection';

const FirstChallenge = () => {
  return (
    <ChallengeLayout day={1}>
      <section className="course-section">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Instruções</SectionHeading>
          <div className="course-card space-y-4 leading-relaxed text-sm sm:text-base">
            <h3 className="course-card-title">Seja bem-vindo(a) ao Exercício 01 do nosso desafio!</h3>
            <p>
              Esse desafio é um convite para algo que talvez você nunca tenha experimentado:
              enxergar o seu pai com profundidade, sem máscaras, sem barreiras e sem desviar do que
              realmente precisa ser visto. Durante esses 7 dias, vamos tocar lugares da sua história
              que, muitas vezes, ficaram bloqueados ou esquecidos. É nesse momento que o seu Caderno
              de Cura ganha um papel fundamental. Ele não é apenas um caderno qualquer, mas um espaço
              íntimo onde você poderá se encontrar com a criança que você foi um dia, com o pai que
              você teve e com a energia masculina que habita dentro de você.
            </p>
            <p>
              Talvez, por muito tempo, você tenha aprendido a seguir sem pedir ajuda. Talvez tenha
              esperado que alguém mostrasse a direção certa, mas esse alguém nunca veio. Ou, quem
              sabe, no lugar de acolhimento, incentivo e proteção, tenha recebido dureza, silêncio ou
              ausência. Escrever vai ajudar você a reconhecer essas histórias, nomear o que sentiu e
              perceber como tudo isso reverbera em sua vida: nas decisões, escolhas que adia, no
              impulso que trava, nas relações que não se rompem, no medo de se colocar no mundo. A
              ciência comprova: ao escrever, você revisita memórias e reorganiza emoções.
            </p>
            <p>
              Mas, neste espaço, não se trata apenas de ciência. Trata-se de devolver a você a força
              de se erguer, agir e ocupar o seu lugar no mundo sem depender do "empurrão" de ninguém.
              Nesse desafio, cada palavra escrita será como um tijolo, reconstruindo a ponte entre
              você e seu pai, seja ele real ou simbólico. Essa ponte é o alicerce que lhe permitirá
              seguir com mais confiança, coragem e prosperidade.
            </p>
            <p>
              Por isso, escreva. Mesmo que doa, mesmo que as lágrimas molhem o papel. Porque, ao
              escrever, você não apenas conta a sua história — você começa a transformá-la. Estamos de
              mãos dadas nessa jornada.
            </p>
            <p className="text-course-muted italic">Jane Hora — Treinadora de cérebros.</p>
          </div>
        </div>
      </section>

      <section className="course-section bg-course-bg-alt/50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Exercício 01</SectionHeading>
          <div className="course-card space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              Hoje damos o primeiro passo do nosso desafio. Para começar, vamos olhar para algo que
              talvez você tenha deixado de lado por muito tempo: a ausência do pai. Pode ser que
              dentro de você ainda exista uma criança que permanece atenta à porta, esperando ouvir
              passos… Esperando por um abraço, por um olhar de aprovação, por uma palavra que nunca
              chegou.
            </p>
            <p>
              Hoje não vamos fugir dessa dor. Vamos encará-la com coragem. Vamos dar nome ao que
              faltou, reconhecer e honrar o que foi possível e soltar aquilo que nunca foi seu para
              carregar. É nesse encontro com a verdade que a cura começa.
            </p>
            <p>
              Busque um ambiente calmo, prepare o ambiente ouvindo nossa playlist e respire
              profundamente. Responda com sinceridade às perguntas abaixo:
            </p>
            <ol className="list-decimal list-inside space-y-3">
              <li>Quando penso no meu pai, o que sinto é…</li>
              <li>O que eu mais esperei dele e não recebi foi…</li>
              <li>A ausência dele me fez acreditar que eu era…</li>
              <li>
                Hoje, percebo que essa falta me afeta em… (ex: relacionamentos, autoestima,
                finanças, autoconfiança, etc.)
              </li>
              <li>A criança dentro de mim ainda espera por…</li>
            </ol>
          </div>
        </div>
      </section>

      <TipsSection />

      <LessonAudio src={firstCourseAudio} title="Áudio do dia 01" />
    </ChallengeLayout>
  );
};

export default FirstChallenge;
