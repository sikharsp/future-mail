const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Send an email to <span className="text-purple-400">your future</span>
      </h1>

      <p className="mt-6 text-lg text-gray-400 max-w-2xl">
        Words written today, delivered when they matter most.
      </p>

      <button className="mt-10 bg-purple-600 px-8 py-4 rounded-xl text-lg hover:bg-purple-700 transition">
        Send to the Future
      </button>
    </section>
  );
};

export default Hero;
