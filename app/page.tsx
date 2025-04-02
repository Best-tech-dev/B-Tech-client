import NavBar from "@/components/Header/NavBar";
import LandingPageHero from "@/components/Home/LandingPageHero";
import DigitalInnovationHero from "@/components/Home/DigitalInnovationHero";
import OurClientsSection from "@/components/Home/OurClientsSection";
import ExploreServices from "@/components/Home/ExploreServices";
import ServicesGrid from "@/components/Home/ServicesGrid";
import RecentPosts from "@/components/Home/RecentPosts";
import GetInTouch from "@/components/Footer/GetInTouch";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <header className="">
        <NavBar />
      </header>
      <main className="">
        <LandingPageHero />
        <section className="px-40 py-10 bg-white">
          <h2 className="text-md text-[#2bcd15] italic text-center">
            Digital Innovation Through Technology Excellence.
          </h2>
          <h3 className="text-5xl mt-2 text-center text-black font-bold">
            We&apos;re more than just a technology partner &ndash; we&apos;re
            your catalyst for digital transformation.
          </h3>
          <DigitalInnovationHero />
        </section>

        <section>
          <OurClientsSection />
        </section>
        <section>
          <ExploreServices />
        </section>
        <section className="w-full px-10 py-20 bg-[#111827]">
          <h2 className="text-3xl text-white text-center font-bold mb-10">
            Digital Solutions That Drive Business Growth
          </h2>
          <ServicesGrid />
        </section>

        <section>
          <RecentPosts />
        </section>
      </main>
      <footer>
        <GetInTouch />
        <Footer />
      </footer>
    </div>
  );
}
