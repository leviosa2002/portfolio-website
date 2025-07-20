import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react"; // Added useEffect for EmailJS init
// Removed: import { useEmail } from "@/hooks/use-email"; // No longer needed
import emailjs from '@emailjs/browser'; // Import EmailJS

export const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(''); // success, error, cooldown

  // Initialize EmailJS when the component mounts
  // This is important for some EmailJS functionalities, though sendForm doesn't strictly need it here.
  // It's good practice for general EmailJS usage.
  useEffect(() => {
    // Check if the public key is available before initializing
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    } else {
      console.error("EmailJS Public Key not found in environment variables.");
      toast({
        title: "Configuration Error",
        description: "Email sending is not configured correctly. Please check VITE_EMAILJS_PUBLIC_KEY.",
        variant: "destructive",
      });
    }
  }, [toast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(''); // Clear previous status

    // Get IDs from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // Already initialized, but good for clarity

    // Basic client-side validation (can be more robust if needed)
    const formData = new FormData(e.target);
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const message = formData.get('message');

    if (!userName || !userEmail || !message) {
      setLoading(false);
      setStatus('error');
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      setStatus('error');
      console.error("Missing EmailJS environment variables.");
      toast({
        title: "Configuration Error",
        description: "EmailJS IDs are not set up correctly. Please check your .env file.",
        variant: "destructive",
      });
      return;
    }


    try {
      // Send the email using EmailJS
      const response = await emailjs.sendForm(serviceId, templateId, e.target, {
        publicKey: publicKey,
      });

      console.log('EmailJS response:', response);

      if (response.status === 200) {
        setStatus('success');
        toast({
          title: "Message Sent!",
          description: "Your message has been sent successfully. I'll get back to you soon!",
          variant: "success",
        });
        e.target.reset(); // Clear the form
      } else {
        // EmailJS can return other statuses in the response object
        setStatus('error');
        toast({
          title: "Message Failed!",
          description: `There was an issue sending your message. EmailJS Status: ${response.status}`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      let errorMessage = "An unexpected network error occurred.";

      // EmailJS specific error handling
      if (error.status && error.text) {
          errorMessage = `EmailJS Error (${error.status}): ${error.text}`;
          if (error.status === 429) {
            setStatus('cooldown');
            errorMessage = "Too many requests. Please wait a moment and try again.";
          }
      } else if (error instanceof TypeError && error.message.includes("Failed to fetch")) {
          errorMessage = "Network error. Please check your internet connection.";
      }

      toast({
        title: "Message Failed!",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ankit.prasad2022@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 63067 05431
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Gurugram, Haryana, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name" // Ensure these 'name' attributes match your EmailJS template
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Ankit Prasad..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email" // Ensure these 'name' attributes match your EmailJS template
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="ankit@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message" // Ensure these 'name' attributes match your EmailJS template
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                className="cosmic-button w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500">
                  Failed to send message. Please try again.
                </p>
              )}
              {status === "cooldown" && (
                <p className="text-yellow-500">
                  Please wait a minute before sending another message.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};