import React from "react";
import RecentPosts from "@/components/Home/RecentPosts";
import Footer from "@/components/Footer/Footer";
import NewLandingPageHero from "@/components/Home/NewLandingPageHero";
import HomepageAbout from "@/components/Home/HomepageAbout";
import HomepagePortfolio from "@/components/Home/HomepagePortfolio";
import HomepageTestimonials from "@/components/Home/HomepageTestimonials";
import WhoWeAreFor from "@/components/Home/WhoWeAreFor";
import HomepageServiceCards from "@/components/Home/ServiceCard";
import FromTheVisionary from "@/components/Home/FromTheVisionary";
import NewsletterSection from "@/components/Home/Newsletter";
import HomepageContact from "@/components/Home/HomepageContact";
import NavBar from "@/components/Header/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="overflow-x-hidden">
        <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <NewLandingPageHero />
          <FromTheVisionary />
          <HomepagePortfolio />
          <WhoWeAreFor />
          <HomepageServiceCards />
          <HomepageTestimonials />
          <HomepageAbout />
          <HomepageContact />

          {/* Blog Section */}
          <section
            id="blog"
            className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 scroll-m-24"
          >
            <div className="relative z-10">
              <RecentPosts />
            </div>
          </section>
        </main>

        <NewsletterSection />

        <Footer />
      </div>
    </>
  );
}
