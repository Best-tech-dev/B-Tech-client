import NavBar from "@/components/Header/NavBar";
import LandingPageHero from "@/components/Home/LandingPageHero";
import DigitalInnovationHero from "@/components/Home/DigitalInnovationHero";

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
      </main>
      <h1 className="text-3xl text-amber-400 mt-20">Hello Next.js</h1>
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
  );
}
