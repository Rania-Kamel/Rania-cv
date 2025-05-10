import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div id="about" className="bg-secondary/30 max-w-screen-lg m-auto flex">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-5">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/Personal-Imag.jpeg"
                  alt="Developer workspace"
                  className="w-full h-auto object-cover aspect-[2.2/3]"
                />
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-7">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <p className="mb-4 text-foreground/90 font-medium">
                  Front-end developer with expertise in React and React Native,
                  specializing in building responsive, user-friendly web and
                  mobile applications.
                </p>
                <p className="mb-4 text-foreground/90">
                  I create elegant, efficient solutions for complex user
                  interface challenges, with a focus on clean code and intuitive
                  user experiences. Proficient in modern JavaScript frameworks
                  and UI libraries including Redux, Material UI, and Tailwind
                  CSS.
                </p>
                <p className="text-foreground/90">
                  Passionate about collaborative development and staying current
                  with emerging technologies. My goal is to deliver
                  high-quality, maintainable applications that solve real
                  business problems and create exceptional user experiences.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Contact Information
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span>+20 1272675936</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <a
                          href="mailto:raniakamel706@gmail.com"
                          className="hover:text-primary transition-colors"
                        >
                          raniakamel706@gmail.com
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>Cairo, Egypt</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Languages</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center justify-between">
                        <span>Arabic</span>
                        <span className="text-primary">Native</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>English</span>
                        <span className="text-primary">Good</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
