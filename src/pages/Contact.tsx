import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  try {
    const response = await fetch("https://your-backend-url.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      const errorData = await response.json();
      alert(`❌ Failed to send message: ${errorData.error || "Server error"}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("❌ Something went wrong. Please try again later.");
  }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Send a Message Form */}
            <div className="bg-background/10 backdrop-blur-sm border border-border/30 rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <Send className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background/20 border-border/30 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/20 border-border/30 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/20 border-border/30 text-foreground placeholder:text-muted-foreground min-h-32 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div className="bg-background/10 backdrop-blur-sm border border-border/30 rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Email</p>
                      <p className="text-muted-foreground">singhkeshav386@gmail.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 9318412540</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Location</p>
                      <p className="text-muted-foreground">Delhi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect With Me Card */}
              <div className="bg-background/10 backdrop-blur-sm border border-border/30 rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h2>
                
                {/* Social Icons */}
                <div className="flex gap-4 mb-6">
                  <a
                    href="https://github.com/Kesin2540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-background/20 border border-border/30 rounded-lg flex items-center justify-center hover:bg-background/30 transition-smooth group"
                  >
                    <Github className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/keshav-singh-1955b2317/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-background/20 border border-border/30 rounded-lg flex items-center justify-center hover:bg-background/30 transition-smooth group"
                  >
                    <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Feel free to connect with me on social media or check out my work on GitHub!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;