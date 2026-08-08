import present from '../assets/present.png';
import CourseHero from '../components/CourseHero';
import CourseFooter from '../components/CourseFooter';
import SectionHeading from '../components/SectionHeading';
import TipsSection from '../components/TipsSection';

const Welcome = () => {
  return (
    <div className="course-page">
      <CourseHero badge="Manual do usuário" />

      <section className="course-section">
        <div className="max-w-3xl mx-auto course-card text-center space-y-4">
          <p className="text-course-muted">Seja bem-vindo(a) ao desafio</p>
          <h2 className="text-2xl font-bold text-course-text">A CURA DO PAI!</h2>
          <p>
            Durante 7 dias, você viverá uma jornada profunda e transformadora de reconexão
            com a sua história, sua origem e com a força que vem do seu Pai.
          </p>
          <p>
            Nesse manual está tudo o que você precisa saber para aproveitar ao máximo essa experiência.
          </p>
        </div>
      </section>

      <section className="course-section bg-course-bg-alt/50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-course-accent shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            }
          >
            Como funciona o desafio
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="course-card">
              <p className="course-card-title">Data</p>
              <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
                <li>10 a 17 de setembro.</li>
                <li>O desafio terá duração de 7 dias consecutivos.</li>
              </ul>
            </div>

            <div className="course-card">
              <p className="course-card-title">Programação diária</p>
              <p className="text-sm sm:text-base mb-2">
                Todos os dias às 7 da manhã, você receberá:
              </p>
              <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
                <li>Um áudio com reflexões e ativações sistêmicas.</li>
                <li>Um exercício prático para integrar no seu dia a dia.</li>
              </ul>
            </div>

            <div className="course-card">
              <p className="course-card-title">Entrega</p>
              <ul className="list-disc list-inside text-sm sm:text-base">
                <li>
                  Todo o conteúdo será enviado diretamente no grupo exclusivo do WhatsApp.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="course-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading>Grupo de WhatsApp</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <div className="course-card">
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                <li>O grupo ficará fechado.</li>
                <li>
                  Somente os administradores poderão enviar mensagens, porque queremos
                  manter o seu campo limpo e sem distrações.
                </li>
                <li>Fique atento(a) às mensagens diárias.</li>
                <li>As mensagens serão o seu guia sistêmico de cura.</li>
                <li>O link do grupo será enviado por e-mail.</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-course-accent/10 flex items-center justify-center">
                <svg fill="#6d27f9" height="40px" width="40px" viewBox="0 0 512 512" aria-hidden="true">
                  <path d="M437.019,74.981C388.667,26.629,324.38,0,256,0S123.333,26.629,74.981,74.981C26.629,123.333,0,187.62,0,256 c0,51.582,15.212,101.126,44.038,143.582L0.648,500.825c-2.843,6.632,4.272,13.513,10.815,10.396l96.843-46.115 C151.658,495.802,202.618,512,256,512c68.38,0,132.667-26.628,181.019-74.981C485.372,388.668,512,324.38,512,256 S485.372,123.333,437.019,74.981z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TipsSection />

      <section className="course-section bg-course-bg-alt/50">
        <div className="max-w-4xl mx-auto">
          <div className="course-card flex flex-col md:flex-row items-center gap-8">
            <img
              src={present}
              alt="Presente com laço roxo"
              className="w-32 sm:w-40 shrink-0"
            />
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-wide text-course-highlight mb-1">
                Bônus especial
              </p>
              <h3 className="text-xl font-bold text-course-text mb-2">
                Para os 50 primeiros inscritos
              </h3>
              <p className="text-sm sm:text-base">
                Ao final do desafio, os contemplados terão acesso à Oficina de Constelações:
                uma vivência coletiva em que, juntos, realizaremos um movimento em
                direção ao pai e ao masculino. Um espaço potente de liberação, acolhimento
                e reconexão.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CourseFooter />
    </div>
  );
};

export default Welcome;
