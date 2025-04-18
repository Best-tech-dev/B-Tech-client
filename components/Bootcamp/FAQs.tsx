import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/ui/Bootcamp/accordion";

export const BootcampFAQs = () => {
  return (
    <section className="relative bg-[#f9fafb] py-24">
      {/* Background Blobs */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Get answers to some of the most common questions about the Best
          Technologies Ltd. Bootcamp.
        </p>

        <Accordion>
          <AccordionItem id="faq-1">
            <AccordionTrigger
              id="faq-1"
              title="How long is the Bootcamp program?"
            />
            <AccordionContent id="faq-1">
              The Bootcamp typically spans 4–6 months, depending on the program.
              You&apos;ll progress through foundational, intermediate, and
              advanced content at an intensive pace.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem id="faq-2">
            <AccordionTrigger
              id="faq-2"
              title="Do I need prior tech experience to join?"
            />
            <AccordionContent id="faq-2">
              Not at all. We welcome beginners and provide a comprehensive
              foundational on-ramp to bring all learners up to speed before
              diving into the core curriculum.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem id="faq-3">
            <AccordionTrigger
              id="faq-3"
              title="What career support is offered?"
            />
            <AccordionContent id="faq-3">
              We offer resume reviews, technical interview prep, personal
              portfolio development, and access to our growing network of hiring
              partners.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem id="faq-4">
            <AccordionTrigger
              id="faq-4"
              title="Is the program remote or in-person?"
            />
            <AccordionContent id="faq-4">
              The entire program is delivered online, allowing you to learn from
              anywhere while still participating in live classes and
              collaborative projects.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem id="faq-5">
            <AccordionTrigger
              id="faq-5"
              title="What kind of projects will I build?"
            />
            <AccordionContent id="faq-5">
              You&apos;ll build full-stack apps, collaborate on team projects,
              and develop a capstone portfolio piece that showcases your
              practical experience.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export function TrainingsFAQ() {
  return (
    <section className="bg-[#f9fafb] py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Get answers to some of the most common questions about the Best
          Technologies Ltd. Trainings.
        </p>

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
              especially Bootcamps and Online Courses. We welcome both beginners
              and career switchers — our curriculum is designed to guide you
              from foundation to fluency.
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
              program’s description for specifics.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem id="4">
            <AccordionTrigger
              id="4"
              title="How do I know which training is right for me?"
            />
            <AccordionContent id="4">
              That’s what we’re here for! Each program page outlines the ideal
              candidate, but you can also reach out to our team for guidance
              based on your goals, time availability, and experience level.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem id="5">
            <AccordionTrigger id="5" title="Will I receive a certificate?" />
            <AccordionContent id="5">
              Yes! Upon successful completion of any program, you’ll receive a
              digital certificate from Best Technologies Ltd. It reflects your
              participation and the skills you’ve gained — a great addition to
              your resume or LinkedIn profile.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
