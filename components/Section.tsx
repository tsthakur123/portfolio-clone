interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
  }
  
  const Section = ({ id, title, children, className = "" }: SectionProps) => {
    return (
      <div id={id} className={`h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 ${className}`}>
        <div className="w-full h-full flex flex-col justify-center">
          <h1 className="text-6xl font-semibold tracking-wide text-center">{title}</h1>
          {children}
        </div>
      </div>
    );
  };
  
  export default Section;
  