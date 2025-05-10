import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {


  return (
    <section id="contact" className="bg-secondary/30 m-auto">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-8">
              I am interested in both freelance and full-time positions. If you
              have any questions or would like to discuss collaboration
              opportunities, please feel free to contact me via my contact
              information.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium">Phone</h4>
                  <p className="text-muted-foreground">+20 1272675936</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium">Email</h4>
                  <a
                    href="mailto:raniakamel706@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    raniakamel706@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium">Location</h4>
                  <p className="text-muted-foreground">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-medium mb-4">Follow me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-card p-3 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-card p-3 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
