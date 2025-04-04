
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for contacting me. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };
  
  const contactInfo = [
    { icon: MailIcon, label: "Email", value: "mahambazandile4@gmail.com" },
    { icon: PhoneIcon, label: "Phone", value: "+27 810688512" },
    { icon: MapPinIcon, label: "Location", value: "Cape Town, South Africa" },
  ];
  
  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://linkedin.com/", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="bg-muted/50">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6 animate-slide-up" style={{animationDelay: "0.2s"}}>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <Button key={index} variant="outline" size="icon" asChild>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
