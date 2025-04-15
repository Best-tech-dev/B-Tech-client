import Image from "next/image";

export default function LogoCloud() {
  return (
    <div className="relative bg-[#0f172a] py-20 overflow-hidden">
      {/* Animated Blob */}
      <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] z-0 animate-blob opacity-30 mix-blend-lighten pointer-events-none">
        <div className="bg-gradient-to-r from-lime-500 to-cyan-400 w-full h-full rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Tools & Technologies You&apos;ll Learn
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center text-white">
          <TechLogo
            name="HTML5"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <TechLogo
            name="CSS3"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <TechLogo
            name="JavaScript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <TechLogo
            name="React"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <TechLogo
            name="Redux"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          />
          <TechLogo
            name="Git"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <TechLogo
            name="GitHub"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
          <TechLogo
            name="SQL"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          />
          <TechLogo
            name="VSCode"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          />
          <TechLogo
            name="APIs"
            src="https://www.vectorlogo.zone/logos/json/json-ar21.svg"
          />
          <TechLogo
            name="WordPress"
            src="https://www.vectorlogo.zone/logos/wordpress/wordpress-ar21.svg"
          />
          <TechLogo
            name="Google Cloud"
            src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg"
          />
        </div>
      </div>
    </div>
  );
}

function TechLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={src}
        alt={name}
        width={64}
        height={64}
        className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition"
      />
    </div>
  );
}
