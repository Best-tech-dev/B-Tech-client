import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/ui/Bootcamp/accordion";
import { BookOpen } from "lucide-react";

export default function OutlineSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8">
            <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">
            Learning{" "}
            <span className="bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Outline
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The Best Technologies Ltd. Bootcamp utilizes a modern,
            career-focused curriculum designed around the most in-demand skills
            in software engineering, product design, cloud computing, DevOps,
            and data analytics.
          </p>
        </div>

        {/* Description */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200/50 mb-8 sm:mb-12">
          <div className="space-y-4 text-gray-700">
            <p className="text-base sm:text-lg leading-relaxed">
              You&apos;ll gain full-stack development knowledge alongside
              relevant tooling and best practices used by today&apos;s top tech
              companies. Our curriculum is designed to take you from beginner to
              job-ready in just 4-6 months.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              You&apos;ll also learn how to apply generative AI in real-world
              scenarios, integrating tools like ChatGPT and Bing AI into your
              development workflows to boost productivity and innovation.
            </p>
          </div>
        </div>

        {/* Curriculum Accordion */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200/50">
          <Accordion>
            <AccordionItem id="foundations">
              <AccordionTrigger
                id="foundations"
                title="Month 1 – Foundations"
              />
              <AccordionContent id="foundations">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We begin by ensuring everyone starts on solid ground,
                    whether you&apos;re new to tech or brushing up on your
                    fundamentals. This month focuses on core web concepts and
                    problem-solving skills.
                  </p>
                  <ul className="list-disc ml-5 space-y-2 text-gray-600">
                    <li>
                      Web development basics: HTML, CSS, and semantic markup
                    </li>
                    <li>Introduction to JavaScript and core logic skills</li>
                    <li>Version control with Git & GitHub</li>
                    <li>Developer tools and command line navigation</li>
                    <li>
                      Responsive design principles and mobile-first approach
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    You&apos;ll wrap this phase by completing a small personal
                    website to showcase your skills and demonstrate your
                    understanding of web fundamentals.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="intermediate">
              <AccordionTrigger
                id="intermediate"
                title="Month 2 – Intermediate Development"
              />
              <AccordionContent id="intermediate">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    In Month 2, we strengthen your frontend skillset and
                    introduce more advanced tools and frameworks that are
                    essential for modern web development.
                  </p>
                  <ul className="list-disc ml-5 space-y-2 text-gray-600">
                    <li>
                      Advanced CSS: Flexbox, Grid, and modern layout techniques
                    </li>
                    <li>
                      JavaScript ES6+: arrays, objects, DOM manipulation, and
                      async programming
                    </li>
                    <li>
                      Introduction to React and component-based architecture
                    </li>
                    <li>
                      Building interactive UIs and handling user interactions
                    </li>
                    <li>
                      Collaborative development with Git workflows and code
                      reviews
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Expect to build multiple interactive projects and
                    collaborate through pair programming exercises to simulate
                    real-world development environments.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="advanced">
              <AccordionTrigger
                id="advanced"
                title="Month 3 – Advanced Development"
              />
              <AccordionContent id="advanced">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    The third month dives deeper into modern frontend
                    ecosystems, state management, and building scalable
                    applications with industry-standard tools.
                  </p>
                  <ul className="list-disc ml-5 space-y-2 text-gray-600">
                    <li>
                      Advanced React: Hooks, Context API, and performance
                      optimization
                    </li>
                    <li>State management with Redux and modern alternatives</li>
                    <li>
                      Integrating RESTful APIs and handling complex data flows
                    </li>
                    <li>
                      Test-driven development and automated testing strategies
                    </li>
                    <li>Build tools, bundlers, and deployment pipelines</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    You&apos;ll create a fully functional single-page
                    application (SPA) with advanced features as your
                    end-of-month showcase project.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="master">
              <AccordionTrigger
                id="master"
                title="Month 4-6 – Mastery + Full Stack"
              />
              <AccordionContent id="master">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Your final months prepare you for real-world full-stack
                    development. You&apos;ll focus on backend technologies,
                    database integration, and building a professional portfolio.
                  </p>
                  <ul className="list-disc ml-5 space-y-2 text-gray-600">
                    <li>Backend development with Node.js and Express</li>
                    <li>Database design and management with SQL and NoSQL</li>
                    <li>API development and microservices architecture</li>
                    <li>Cloud deployment with AWS, Azure, or Google Cloud</li>
                    <li>
                      DevOps basics: CI/CD, containerization, and monitoring
                    </li>
                    <li>
                      Career coaching, resume optimization, and interview
                      preparation
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    You&apos;ll finish strong with a comprehensive full-stack
                    capstone project and personal pitch presentation to
                    demonstrate your readiness for professional tech roles.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 sm:px-8 py-4 shadow-md">
            <span className="text-gray-600 text-sm sm:text-base">
              Ready to start your journey?
            </span>
            <a
              href="/trainings/register"
              className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary px-4 sm:px-6 py-2 rounded-full text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
