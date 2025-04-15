import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/ui/Bootcamp/accordion";

export default function OutlineSection() {
  return (
    <section className="relative bg-white text-black py-20 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Animated Blob Background */}
      <svg
        className="absolute -top-40 -left-40 w-[600px] h-[600px] text-blue-800/20 animate-pulse-slow blur-3xl"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M36.6,-66.3C49.8,-56.3,64.2,-49.3,67.4,-38.4C70.6,-27.5,62.6,-12.8,56.6,-0.3C50.6,12.2,46.6,24.3,42.6,39.4C38.6,54.5,34.7,72.5,24.8,76.2C14.8,79.9,-1.3,69.2,-14.8,60.8C-28.2,52.3,-39,46.2,-49.6,38.4C-60.3,30.5,-70.7,21,-75.2,8.4C-79.7,-4.3,-78.3,-19.9,-70.6,-30.2C-62.9,-40.6,-48.8,-45.7,-36.4,-54.3C-24.1,-62.9,-12.1,-75,0.4,-75.7C12.9,-76.3,25.8,-65.5,36.6,-66.3Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Learning Outline
        </h2>

        <div className="space-y-6 text-black">
          <p>
            The Best Technologies Ltd. Bootcamp utilizes a modern,
            career-focused core curriculum designed around the most in-demand
            skills in software engineering, product design, cloud computing,
            DevOps, and data analytics. You’ll gain full-stack development
            knowledge alongside relevant tooling and best practices used by
            today’s top tech companies.
          </p>
          <p>
            You’ll also learn how to apply generative AI in real-world
            scenarios, integrating tools like ChatGPT and Bing AI into your
            development workflows.
          </p>
        </div>

        <div className="mt-12">
          <Accordion>
            <AccordionItem id="foundations">
              <AccordionTrigger
                id="foundations"
                title="Month 1 – Foundations"
              />
              <AccordionContent id="foundations">
                <p>
                  We begin by ensuring everyone starts on solid ground, whether
                  you&apos;re new to tech or brushing up on your fundamentals.
                  This month focuses on core web concepts and problem-solving.
                </p>
                <ul className="list-disc ml-5">
                  <li>
                    Web development basics: HTML, CSS, and semantic markup
                  </li>
                  <li>Introduction to JavaScript and core logic skills</li>
                  <li>Version control with Git & GitHub</li>
                  <li>Developer tools and command line navigation</li>
                </ul>
                <p>
                  You&apos;ll wrap this phase by completing a small personal
                  website to showcase your skills.
                </p>
                {/* Add other bullet points or paragraphs here */}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="intermediate">
              <AccordionTrigger
                id="intermediate"
                title="Month 2 – Intermediate"
              />
              <AccordionContent id="intermediate">
                <p>
                  In Month 2, we strengthen your frontend skillset and introduce
                  more advanced tools and frameworks.
                </p>
                <ul className="list-disc ml-5">
                  <li>CSS layouts, responsive design, and accessibility</li>
                  <li>
                    Advanced JavaScript: arrays, objects, DOM manipulation
                  </li>
                  <li>Frontend frameworks and component-based thinking</li>
                  <li>
                    Building UI projects collaboratively with Git workflows
                  </li>
                </ul>
                <p>
                  Expect to build interactive UIs and collaborate through pair
                  programming exercises.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="advanced">
              <AccordionTrigger
                id="advanced"
                title="Month 3 – Advanced Development"
              />
              <AccordionContent id="advanced">
                <p>
                  The third month dives deeper into modern frontend ecosystems,
                  state management, and dynamic app building.
                </p>
                <ul className="list-disc ml-5">
                  <li>React, JSX, Hooks, and routing</li>
                  <li>State management with Redux</li>
                  <li>Integrating third-party APIs and handling data</li>
                  <li>Test-driven development and debugging strategies</li>
                </ul>
                <p>
                  You’ll create a fully functional single-page application (SPA)
                  as your end-of-month project.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="master">
              <AccordionTrigger
                id="master"
                title="Month 4 – Mastery + Full Stack"
              />
              <AccordionContent id="master">
                <p>
                  Your final month will prepare you for real-world full stack
                  work. You&apos;ll focus on backend basics, database
                  integration, and portfolio-building.
                </p>
                <ul className="list-disc ml-5">
                  <li>Intro to SQL and data modeling</li>
                  <li>Connecting front and back ends</li>
                  <li>Deploying projects with cloud tools</li>
                  <li>Career coaching, resume support, and interview prep</li>
                </ul>
                <p>
                  You&apos;ll finish strong with a full stack capstone project
                  and personal pitch presentation to prepare for tech roles.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
