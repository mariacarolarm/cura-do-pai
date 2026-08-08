import SectionHeading from './SectionHeading';

const tips = [
  {
    title: 'Dica 01',
    text: 'Reserve um horário tranquilo do seu dia para ouvir os áudios com presença.',
  },
  {
    title: 'Dica 02',
    text: 'Mantenha um caderno por perto para anotar seus insights, emoções e movimentos internos.',
  },
  {
    title: 'Dica 03',
    text: 'Respeite o seu tempo. Alguns exercícios podem mexer profundamente com você. É normal e faz parte do processo da cura.',
  },
];

const TipsSection = () => {
  return (
    <section className="course-section">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Dicas para uma experiência profunda</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tips.map((tip) => (
            <div key={tip.title} className="course-card">
              <h3 className="course-card-title text-center text-course-accent">{tip.title}</h3>
              <p className="text-sm sm:text-base">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
