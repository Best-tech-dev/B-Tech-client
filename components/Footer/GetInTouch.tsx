import GetInTouchForm from "@/ui/GetInTouchForm";

const GetInTouch = () => {
  return (
    <div className="bg-black">
      <section className="bg-black text-white px-6 py-16 md:px-12 lg:px-20 flex flex-col lg:flex-row justify-between items-start gap-10 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="italic text-md lg:text-lg mb-6 inline-block border-b border-gray-400">
            Connect on Socials
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mb-6">
            <button className="btn bg-black border border-white rounded-full px-6 py-2">
              LinkedIn
            </button>
            <button className="btn bg-black border border-white rounded-full px-6 py-2">
              Facebook
            </button>
            <button className="btn bg-black border border-white rounded-full px-3 py-2">
              X
            </button>
          </div>

          <h2 className="text-2xl md:text-5xl font-bold mt-8">
            Get In Touch And <br />
            <span className="text-[#7ca412]">
              Let&apos;s Discuss About Your Project.
            </span>
          </h2>
        </div>

        {/* Right Section - Form */}
        <GetInTouchForm />
      </section>
    </div>
  );
};

export default GetInTouch;
