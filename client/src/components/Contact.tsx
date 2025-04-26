import { useState } from "react";
import { Mail, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-600 max-w-lg mx-auto mt-4">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10">
          <div className="md:w-2/5">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Mail className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:raghuram0311@gmail.com" 
                    className="text-gray-600 hover:text-primary"
                  >
                    raghuram0311@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <MapPin className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">Portland, Oregon</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Globe className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Social Profiles</h3>
                  <div className="flex space-x-4 mt-2">
                    <a 
                      href="https://github.com/Raghuramgit7" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/raghuram-gn/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div className="mb-4">
                <Label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition`}
                  placeholder="How can I help you?"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              
              <div className="mb-6">
                <Label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none`}
                  placeholder="Your message here..."
                  rows={5}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <Button
                type="submit"
                className="bg-primary hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition shadow-md w-full sm:w-auto"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
