type SectionHeadingProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const SectionHeading = ({ children, icon }: SectionHeadingProps) => {
  return (
    <div className="course-section-heading">
      <div className="course-section-heading-bar" />
      {icon}
      <h2 className="course-section-heading-text">{children}</h2>
    </div>
  );
};

export default SectionHeading;
