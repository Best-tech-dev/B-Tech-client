import React from "react";
import RecentPosts from "@/components/Home/RecentPosts";
import GetInTouch from "@/components/Footer/GetInTouch";
import Footer from "@/components/Footer/Footer";
import NewLandingPageHero from "@/components/Home/NewLandingPageHero";
import HomepageAbout from "@/components/Home/HomepageAbout";
import HomepagePortfolio from "@/components/Home/HomepagePortfolio";
import HomepageTestimonials from "@/components/Home/HomepageTestimonials";
import WhoWeAreFor from "@/components/Home/WhoWeAreFor";
import HomepageServiceCards from "@/components/Home/ServiceCard";
import FromTheVisionary from "@/components/Home/FromTheVisionary";
import NewsletterSection from "@/components/Home/Newsletter";
import NavBar from "@/components/Header/NavBar";

// Unused imports
// import BackgroundAnimation from "@/components/Home/BackgroundAnimation";
// import HomepageServices from "@/components/Home/HomepageServices";
// import HomeWhyChooseUs from "@/components/Home/HomeWhyChooseUs";
// import NewHeader from "@/components/Header/NewHeader";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* <BackgroundAnimation /> */}
      {/* <NewHeader /> */}

      <div className="overflow-x-hidden">
        <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <NewLandingPageHero />
          <HomepagePortfolio />
          <FromTheVisionary />
          <WhoWeAreFor />
          <HomepageServiceCards />
          <HomepageTestimonials />
          {/* <HomeWhyChooseUs /> */}
          <HomepageAbout />
          <section
            id="blog"
            className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 scroll-m-24 overflow-hidden"
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Tech circuit pattern */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-5"
                  viewBox="0 0 200 200"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id="circuit"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="10" cy="10" r="2" fill="currentColor" />
                      <path
                        d="M10,0 L10,20 M0,10 L20,10"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#circuit)"
                    className="text-brand-primary"
                  />
                </svg>
              </div>
              <div className="absolute top-20 right-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <RecentPosts />
            </div>
            {/* <NewsletterSection /> */}
          </section>
        </main>
        <NewsletterSection />
        <footer id="contact" className="scroll-m-24">
          <GetInTouch />
          <Footer />
        </footer>
      </div>
    </>
  );
}
