import NavBar from "@/components/Header/NavBar";
import LandingPageHero from "@/components/Home/LandingPageHero";

export default function Home() {
  return (
    <div className="bg-white">
      <header className="">
        <NavBar />
      </header>
      <main className="">
        <LandingPageHero />
      </main>
      <h1 className="text-3xl text-amber-400 mt-20">Hello Next.js</h1>
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
  );
}
