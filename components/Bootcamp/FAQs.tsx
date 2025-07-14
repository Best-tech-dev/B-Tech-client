import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/ui/Bootcamp/accordion";
import { HelpCircle } from "lucide-react";

export const BootcampFAQs = () => {
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
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get answers to some of the most common questions about our
            comprehensive Tech Bootcamp program.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200/50">
          <Accordion>
            <AccordionItem id="faq-1">
              <AccordionTrigger
                id="faq-1"
                title="How long is the Bootcamp program?"
              />
              <AccordionContent id="faq-1">
                The Bootcamp typically spans 4–6 months, depending on the
                specific program track you choose. You&apos;ll progress through
                foundational, intermediate, and advanced content at an intensive
                pace designed to prepare you for real-world tech roles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="faq-2">
              <AccordionTrigger
                id="faq-2"
                title="Do I need prior tech experience to join?"
              />
              <AccordionContent id="faq-2">
                Not at all! We welcome beginners and career switchers. Our
                curriculum includes a comprehensive foundational phase that
                brings all learners up to speed before diving into advanced
                topics. We&apos; re here to guide you from foundation to
                fluency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="faq-3">
              <AccordionTrigger
                id="faq-3"
                title="What career support is offered?"
              />
              <AccordionContent id="faq-3">
                We provide comprehensive career support including resume
                reviews, technical interview preparation, personal portfolio
                development, LinkedIn profile optimization, and access to our
                growing network of hiring partners and job opportunities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="faq-4">
              <AccordionTrigger
                id="faq-4"
                title="Is the program remote or in-person?"
              />
              <AccordionContent id="faq-4">
                The program is primarily delivered online with live interactive
                sessions, allowing you to learn from anywhere while still
                participating in real-time classes, group projects, and
                collaborative coding sessions. We also host occasional in-person
                meetups and workshops.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="faq-5">
              <AccordionTrigger
                id="faq-5"
                title="What kind of projects will I build?"
              />
              <AccordionContent id="faq-5">
                You&apos;ll build a diverse portfolio including full-stack web
                applications, mobile apps, collaborative team projects, and a
                comprehensive capstone project. Each project is designed to
                showcase practical skills that employers value and demonstrate
                your readiness for tech roles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="faq-6">
              <AccordionTrigger
                id="faq-6"
                title="Will I receive a certificate upon completion?"
              />
              <AccordionContent id="faq-6">
                Yes! Upon successful completion of the bootcamp, you&apos;ll
                receive a digital certificate from Best Technologies Ltd. that
                validates your skills and knowledge. This certificate is a
                valuable addition to your resume and LinkedIn profile.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 sm:px-8 py-4 shadow-md">
            <span className="text-gray-600 text-sm sm:text-base">
              Still have questions?
            </span>
            <a
              href="/contact"
              className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary px-4 sm:px-6 py-2 rounded-full text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TrainingsFAQ = () => {
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
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get answers to some of the most common questions about our
            comprehensive training programs.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200/50">
          <Accordion>
            <AccordionItem id="1">
              <AccordionTrigger
                id="1"
                title="What types of training programs do you offer?"
              />
              <AccordionContent id="1">
                We offer Bootcamps, Internships, Masterclasses, and flexible
                Online Courses — each designed to fit different learning goals,
                time commitments, and career stages.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="2">
              <AccordionTrigger
                id="2"
                title="Do I need a background in tech to join?"
              />
              <AccordionContent id="2">
                No prior tech experience is required for most of our programs,
                especially Bootcamps and Online Courses. We welcome both
                beginners and career switchers — our curriculum is designed to
                guide you from foundation to fluency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="3">
              <AccordionTrigger
                id="3"
                title="Are the trainings virtual or physical?"
              />
              <AccordionContent id="3">
                Most of our programs are 100% virtual and flexible, but we also
                host occasional physical sessions, especially for Masterclasses,
                Bootcamps or special collaborations. Be sure to check each
                program&pos;s description for specifics.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="4">
              <AccordionTrigger
                id="4"
                title="How do I know which training is right for me?"
              />
              <AccordionContent id="4">
                That&pos;s what we&pos;re here for! Each program page outlines
                the ideal candidate, but you can also reach out to our team for
                guidance based on your goals, time availability, and experience
                level.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="5">
              <AccordionTrigger id="5" title="Will I receive a certificate?" />
              <AccordionContent id="5">
                Yes! Upon successful completion of any program, you&pos;ll
                receive a digital certificate from Best Technologies Ltd. It
                reflects your participation and the skills you&pos;ve gained — a
                great addition to your resume or LinkedIn profile.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 sm:px-8 py-4 shadow-md">
            <span className="text-gray-600 text-sm sm:text-base">
              Still have questions?
            </span>
            <a
              href="/contact"
              className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary px-4 sm:px-6 py-2 rounded-full text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampFAQs;
