import logo from '../assets/logo.png';

type LessonFooterProps = {
  quote: React.ReactNode;
};

const LessonFooter = ({ quote }: LessonFooterProps) => {
  return (
    <footer className="course-footer">
      <div className="max-w-3xl mx-auto text-center py-12 px-4">
        <blockquote className="text-course-text text-lg sm:text-xl font-medium leading-relaxed">
          {quote}
        </blockquote>
        <img
          src={logo}
          alt="Instituto Florescer"
          className="w-36 sm:w-44 mx-auto mt-8 opacity-80 rounded-full"
        />
      </div>
    </footer>
  );
};

export default LessonFooter;
