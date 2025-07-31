import Navigation from "@/components/Navigation";
import { MapPin, Mail, Phone, User } from "lucide-react";

const AboutPage = () => {
  const skills = [
    { name: "C++", level: 90 },
    { name: "React", level: 40 },
    { name: "Python", level: 85 },
    { name: "Linux", level: 70 },
    { name: "Unity3D", level: 65 },
    { name: "HTML/CSS", level: 65 },
    { name: "Git", level: 80 }
  ];

  const whatIDo = [
    "Frontend Development",
    "Backend Development", 
    "Game Development",
    "AI/ML",
    "CyberSecurity"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, skills, and passion for development
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Who I Am */}
            <div className="bg-background/10 backdrop-blur-sm border border-border/30 rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <User className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Who I Am</h2>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm a curious and driven software developer with a passion for understanding how things work under the hood. 
                I enjoy building real-world solutions using technologies like C++, Python, and Django, and I'm diving deep into full-stack development and systems thinking. 
                I’ve worked with tools like Linux, SQL, Unity3D and I’m especially drawn to fields like AI, cybersecurity, and low-level computing. 
                Always learning, always building.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Delhi</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>singhkeshav386@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 9318412540</span>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-background/10 backdrop-blur-sm border border-border/30 rounded-2xl p-8 shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-6">Technical Skills</h2>
              
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-background/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-smooth"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What I Do */}
          <div className="bg-background/10 backdrop-blur-sm border border-border/30 rounded-2xl p-8 shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">What I Do</h2>
            <div className="flex flex-wrap gap-3">
              {whatIDo.map((item) => (
                <span 
                  key={item}
                  className="px-4 py-2 bg-background/20 border border-border/30 rounded-lg text-foreground font-medium hover:bg-background/30 transition-smooth"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
