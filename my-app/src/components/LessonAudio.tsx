import SectionHeading from './SectionHeading';

type LessonAudioProps = {
  src: string;
  title?: string;
};

const LessonAudio = ({ src, title = 'Áudio da lição' }: LessonAudioProps) => {
  return (
    <section className="course-section">
      <div className="max-w-3xl mx-auto">
        <SectionHeading>{title}</SectionHeading>
        <div className="course-card">
          <audio controls className="w-full" preload="metadata">
            <source src={src} type="audio/mpeg" />
            Seu navegador não suporta reprodução de áudio.
          </audio>
        </div>
      </div>
    </section>
  );
};

export default LessonAudio;
