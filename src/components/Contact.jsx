"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Send } from "lucide-react";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:saheenshuvo182@gmail.com",
    value: "saheenshuvo182@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/saheen-shuvo",
    value: "github.com/saheen-shuvo",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saheen-alam-shuvo-182-li/",
    value: "linkedin.com/in/saheenalamshuvo",
  },
  {
    icon: FaFacebookSquare,
    label: "Facebook",
    href: "https://www.facebook.com/share/16KUdWWeCm/?mibextid=wwXIfr",
    value: "facebook.com/saheenalamshuvo",
  },
];

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);
    setSuccess(false);

    try {
      await emailjs.send(
        "service_7euux9r",
        "template_h027abc",
        {
          user_email: formData.email, 
          message: formData.message,
          name: formData.name, 
          reply_to: formData.email,
        },
        "XyhIUC2GDqccnJCpH",
      );

      setFormData({ name: "", email: "", message: "" });
      setSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-x-hidden">
      <div
        className="hidden md:block floating-blob w-80 h-80 bg-accent/15 top-0 right-1/4"
        style={{ animationDelay: "-15s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            Get in touch
          </span>

          <h2 className="section-heading">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to chat? I&apos;d love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

            <p className="text-muted-foreground mb-8">
              Feel free to reach out through any of these platforms. I&apos;m
              always open to discussing new projects, creative ideas, or
              opportunities.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex items-center gap-4 group cursor-pointer transition-transform duration-300 md:hover:translate-x-2"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <link.icon size={20} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="font-medium break-all">{link.value}</p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 transition-transform duration-200 md:hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
              {success && (
                <p className="text-green-500 text-sm mt-2 text-center py-3">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
