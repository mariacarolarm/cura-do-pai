import logo from '../assets/logo.png';

const CourseFooter = () => {
  return (
    <footer className="course-footer">
      <div className="max-w-3xl mx-auto text-center py-12 px-4">
        <p className="text-course-text text-lg sm:text-xl font-medium leading-relaxed">
          O desafio A CURA DO PAI foi desenvolvido com propósito e carinho, para que
          você se reconecte com o que há de mais essencial: sua origem, sua força e
          sua capacidade de prosperar.
        </p>

        <div className="py-8">
          <a href="#" className="course-footer-cta">
            Qualquer dúvida — acesse nosso suporte
          </a>
        </div>

        <img
          src={logo}
          alt="Instituto Florescer"
          className="w-36 sm:w-44 mx-auto opacity-80 rounded-full"
        />
      </div>
    </footer>
  );
};

export default CourseFooter;
