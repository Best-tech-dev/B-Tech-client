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
        <section className="px-4 sm:px-10 md:px-20 lg:px-40 py-10 bg-white">
          <DigitalInnovationHero />
        </section>

        <section>
          <OurClientsSection />
        </section>
        <section>
          <ExploreServices />
        </section>
        <section className="w-full bg-[#111827]">
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
