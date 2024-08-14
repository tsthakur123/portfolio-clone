import ProjectToggle from "@/components/ProjectToggle";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div
      id="projects"
      className="h-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col"
    >
      <div className="flex flex-col items-center text-center mb-8">
        <div className="text-6xl font-semibold tracking-wide mb-4 overflow-hidden pb-3">
          <h1 className="expo4 rotate-45 translate-y-full origin-left">
            Projects
          </h1>
        </div>
        <p className="reveal4 opacity-0 scale-0 mt-6 text-lg w-full sm:w-2/3 mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          quaerat ex, deserunt quam at quidem eum architecto quod eaque facere
          reiciendis consequuntur.
        </p>
      </div>
      <div className="flex justify-center mb-6">
        <ProjectToggle />
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-4">
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsSection;
