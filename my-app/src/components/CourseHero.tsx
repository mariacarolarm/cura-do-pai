import fatherImg from '../assets/fatherImg.png';

type CourseHeroProps = {
  badge?: string;
  subtitle?: string;
};

const CourseHero = ({
  badge = 'Manual do usuário',
  subtitle = '7 dias de desafio',
}: CourseHeroProps) => {
  return (
    <section className="course-hero">
      <div className="max-w-4xl mx-auto text-center py-10 px-4">
        <p className="text-course-accent font-semibold text-sm uppercase tracking-widest mb-2">
          Instituto Florescer
        </p>
        <h1 className="font-display text-course-text text-4xl sm:text-5xl py-4">
          A CURA DO PAI
        </h1>

        <div className="py-4 space-y-3">
          <p className="text-course-muted">{subtitle}</p>
          <span className="course-badge">{badge}</span>
        </div>

        <div className="w-full flex justify-center items-center py-4">
          <img
            src={fatherImg}
            alt="Pai e filha"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
