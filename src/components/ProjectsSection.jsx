import { ArrowRight, ExternalLink, Github } from "lucide-react";
import weatherImg from "../assets/projects/weather.png";
import taskImg from "../assets/projects/task.png";
import dashboardImg from "../assets/projects/dashboard.png";
import ecomImg from "../assets/projects/ecom.png";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A responsive weather application built with React that displays real-time weather data using an API.",
    image: weatherImg,
    tags: ["React", "CSS", "Weather API"],
    demoUrl: "https://weather-app-rec.netlify.app/",
    githubUrl: "https://github.com/codewithkamikaze/weather-app-react.git",
  },
  {
    id: 2,
    title: "Task Manager",
    description:
      "A task management application that allows users to create, update, and delete tasks.",
    image: taskImg,
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://task-manager-react1.netlify.app/",
    githubUrl: "https://github.com/codewithkamikaze/task-manager-react.git",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "An interactive dashboard that visualizes data with charts and dynamic components.",
    image: dashboardImg,
    tags: ["React", "material UI", "React-Route"],
    demoUrl: "https://dashboard-with1-react.netlify.app/",
    githubUrl: "https://github.com/codewithkamikaze/Dashboard-react.git",
  },
  {
    id: 4,
    title: "Ecommerce Power Tools",
    description:
      "Power up your business with this interactive admin suite, featuring real-time data tracking, responsive UI with TailwindCSS, and robust state management.",
    image: ecomImg,
    tags: ["React", "TailwindCSS", "Redux"],
    demoUrl: "https://ecom-power-tools.netlify.app/",
    githubUrl: "https://github.com/codewithkamikaze/Ecom-client.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/codewithkamikaze"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
