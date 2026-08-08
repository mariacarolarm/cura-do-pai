import fatherImg from '../assets/fatherImg.png';
import ChallengeLayout from '../components/ChallengeLayout';
import SectionHeading from '../components/SectionHeading';

const SecondChallenge = () => {
  return (
    <ChallengeLayout
      day={2}
      footerQuote={
        <>
          "O pai que idealizei foi abrigo para minha criança ferida, mas é ao reconhecer o pai
          real, com suas ausências e limites, que encontro a verdadeira força para viver como
          adulto(a) completo(a)."
        </>
      }
    >
      <section className="course-section">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Exercício 02</SectionHeading>
          <div className="course-card space-y-4 leading-relaxed text-sm sm:text-base">
            <p>Chegamos ao nosso segundo dia de desafio.</p>
            <p>
              No Exercício 01, você se conectou com a ausência física ou emocional do seu pai e da
              energia masculina, reconhecendo como essa falta impactou sua vida. Agora, vamos
              avançar um pouco mais: vamos diferenciar o pai que realmente existiu do pai que a sua
              criança interior precisou criar para sobreviver.
            </p>
            <p>
              Essa etapa é fundamental para que você saia da espera, libere as ilusões e consiga,
              finalmente, se relacionar com a vida a partir do que é real, e não do que faltou.
            </p>

            <h3 className="course-card-title text-lg">O pai real e o pai idealizado</h3>
            <p>
              Coloque uma música da nossa playlist para preparar o ambiente, pegue uma folha de
              papel e no topo, desenhe uma linha vertical dividindo-a ao meio. De um lado escreva:
              "O pai que eu construí dentro de mim". Do outro lado, escreva: "O pai real."
            </p>

            <h4 className="font-semibold text-course-text">O pai que eu construí dentro de mim:</h4>
            <p>
              Feche os olhos por alguns instantes e traga à mente a imagem desse pai idealizado.
              Sinta sua presença, ouça o tom de voz que ele teria e como ele te olharia. Agora,
              escreva as frases que você gostaria de ter ouvido dele, suas atitudes, gestos, cuidado
              e proteção.
            </p>

            <h4 className="font-semibold text-course-text">O pai real:</h4>
            <p>
              Respire fundo e vire a folha. Traga à mente o homem que de fato esteve presente (ou
              não) na sua vida. Escreva como ele realmente era e agiria, o que podia oferecer e o
              que não pôde.
            </p>

            <h4 className="font-semibold text-course-text">Integração:</h4>
            <p>
              Olhe para a folha por alguns minutos. Em seguida, escolha dois objetos e coloque-os
              próximos à folha. O objeto 1 representa o pai idealizado e o objeto 2 o pai real.
              Sinta a diferença entre eles e diga em voz alta (ou mentalmente):
            </p>

            <div className="course-quote">
              "Hoje eu vejo a diferença entre o pai que criei dentro de mim e o pai real que você
              foi. Eu te vejo como homem, com suas dores, suas faltas e seus limites. Eu deixo a
              fantasia e escolho crescer."
            </div>

            <p>
              Feche os olhos por alguns minutos, respire e observe o que acontece no corpo. Você
              está saindo do lugar de espera infantil e entrando no lugar da presença adulta.
            </p>

            <h4 className="font-semibold text-course-text">Sua tarefa:</h4>
            <p>
              Ao longo do dia, escolha um objeto que represente o seu pai real. Ao olhar ou tocar
              esse objeto, respire conscientemente e diga mentalmente:
            </p>

            <div className="course-affirmation">
              "Eu te vejo como homem. Eu solto a fantasia e aceito a verdade."
            </div>

            <h3 className="course-card-title text-lg mt-4">Perguntas de consciência</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Qual é a imagem que você carrega do seu pai até hoje?</li>
              <li>Ela é real ou ainda idealizada pela criança em você?</li>
              <li>Quais características você ainda deseja que ele tivesse?</li>
              <li>O que você esperava ou ainda espera ouvir dele?</li>
              <li>Você consegue olhar para ele como um homem real, com dores, falhas e histórias?</li>
              <li>O que te impede de aceitar esse pai como ele foi?</li>
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

export default SecondChallenge;
