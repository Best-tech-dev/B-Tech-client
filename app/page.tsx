import React from "react";
import RecentPosts from "@/components/Home/RecentPosts";
import GetInTouch from "@/components/Footer/GetInTouch";
import Footer from "@/components/Footer/Footer";
import NewLandingPageHero from "@/components/Home/NewLandingPageHero";
import NewHeader from "@/components/Header/NewHeader";
import HomepageAbout from "@/components/Home/HomepageAbout";
import HomepagePortfolio from "@/components/Home/HomepagePortfolio";
import HomepageTestimonials from "@/components/Home/HomepageTestimonials";
import WhoWeAreFor from "@/components/Home/WhoWeAreFor";
import HomepageServiceCards from "@/components/Home/ServiceCard";
import FromTheVisionary from "@/components/Home/FromTheVisionary";
import NewsletterSection from "@/components/Home/Newsletter";

// Unused imports
// import BackgroundAnimation from "@/components/Home/BackgroundAnimation";
// import HomepageServices from "@/components/Home/HomepageServices";
// import HomeWhyChooseUs from "@/components/Home/HomeWhyChooseUs";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <BackgroundAnimation /> */}
      <NewHeader />

      <div className="overflow-x-hidden">
        <main className="mt-26 bg-white">
          <NewLandingPageHero />
          <HomepagePortfolio />
          <FromTheVisionary />
          <WhoWeAreFor />
          <HomepageServiceCards />
          <HomepageTestimonials />
          {/* <HomeWhyChooseUs /> */}
          <HomepageAbout />
          <section id="blog" className="bg-gray-200 scroll-m-24">
            <RecentPosts />
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
