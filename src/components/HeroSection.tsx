import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Avatar with green dot */}
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center bg-background/10 backdrop-blur-sm shadow-card">
          <span className="text-4xl font-bold text-foreground">KS</span>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
      </div>

      {/* Main heading with gradient */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4">
        Hi, I'm{" "}
        <span className="gradient-text">Keshav Singh</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-center">
        Aspiring Software Developer
      </p>

      {/* Description */}
      <p className="text-center text-muted-foreground max-w-2xl mb-12 leading-relaxed">
        Hey, I’m Keshav — a B.Tech IT student at BPIT with a curiosity for how things work under the hood. 
        From writing logic in C++ to building smart apps with Python/Django, I learn best by doing. I'm into real-world tech like cybersecurity, AI, and systems that think. 
        I’ve worked with Linux, SQL, and Unity. — always chasing new challenges. If you love building, breaking, or fixing with code, we’ll get along. 🚀
      </p>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link to="/projects">
        <Button size="lg" className="group">
          View Projects
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        </Link>
        <Link to="/contact">
        <Button variant="hero" size="lg" className="group">
          Get In Touch
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        </Link>
      </div>

      {/* Social links */}
      <div className="flex space-x-6">
        <a
          href="https://github.com/Kesin2540"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm border border-border/30 flex items-center justify-center hover:bg-background/20 transition-smooth group"
        >
          <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </a>
        <a
          href="https://www.linkedin.com/in/keshav-singh-1955b2317/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm border border-border/30 flex items-center justify-center hover:bg-background/20 transition-smooth group"
        >
          <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;