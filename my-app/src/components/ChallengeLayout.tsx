import CourseHero from './CourseHero';
import CourseFooter from './CourseFooter';
import LessonFooter from './LessonFooter';

type ChallengeLayoutProps = {
  day: number;
  children: React.ReactNode;
  footerQuote?: React.ReactNode;
};

const ChallengeLayout = ({ day, children, footerQuote }: ChallengeLayoutProps) => {
  const badge = `Exercício dia ${String(day).padStart(2, '0')}`;

  return (
    <div className="course-page">
      <CourseHero badge={badge} />
      {children}
      {footerQuote ? <LessonFooter quote={footerQuote} /> : <CourseFooter />}
    </div>
  );
};

export default ChallengeLayout;
