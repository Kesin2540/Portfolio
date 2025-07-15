import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Filter } from "lucide-react";
import { useState } from "react";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const technologies = [
    "All", "React", "Node.js", "MongoDB", "Stripe", "Firebase", 
    "Material-UI", "OpenWeatherMap API", "Chart.js", "Tailwind CSS", 
    "Framer Motion", "Socket.io", "Express"
  ];

  const projects = [
    {
      id: 1,
      title: "Malicious Url Detection",
      description: "A machine learning-powered malicious URL detector built with Python. Features include URL feature extraction, classification using trained models, and a user interface for safe URL analysis.",
      image: "https://ugra-tv.ru/upload/iblock/7d3/p3ljkfen1h6h8k7pc1p6m4acus84l5q5.png",
      technologies: ["Python", "Sci-kit Learn", "Streamlit"],
      githubUrl: "https://github.com/Kesin2540/Malicious-url-detection",
      liveUrl: "https://malicious-url-detection-3hxevj9a98knnaqyejlfha.streamlit.app/"
    },
    {
      id: 2,
      title: "Haunted Zombie Rush",
      description: "A 2D endless runner game built with Unity, inspired by Flappy Bird, featuring spooky visuals, zombie-themed obstacles, and progressively challenging gameplay.",
      image: "https://logicsimplified.com/newgames/wp-content/uploads/2016/11/bnr_unitydvlpment.png",
      technologies: ["Unity3D", "C#"],
      githubUrl: "https://github.com/Kesin2540/Zombie-Game-project",
      liveUrl: "https://github.com/Kesin2540/Zombie-Game-project/releases/tag/v0.1"
    },
    {
      id: 3,
      title: "CLI-Based Banking System",
      description: "A console-based banking system built with C++ that supports account creation, fund transactions, and persistent data storage using file handling and OOP principles.",
      image: "https://repository-images.githubusercontent.com/422122849/7e23f827-8a0f-4f88-bbeb-ff810d8587c3",
      technologies: ["C++", "OOP", "STL"],
      githubUrl: "https://github.com/Kesin2540/Banking-System-Project",
      liveUrl: null
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/keshav/portfolio",
      liveUrl: "https://keshav-portfolio.vercel.app"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects I've worked on, showcasing my skills and passion for development
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">Filter by technology:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setActiveFilter(tech)}
                  className={`px-4 py-2 rounded-lg font-medium transition-smooth ${
                    activeFilter === tech
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-background/20 border border-border/30 text-foreground hover:bg-background/30"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-background/10 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mb-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        className="flex-1"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs bg-background/20 border border-border/30 rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No projects found for "{activeFilter}". Try a different filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;