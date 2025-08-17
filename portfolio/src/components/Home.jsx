export default function Home() {
  return (
    <section
      id="Home"
      className="h-screen w-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-10"
    >
      <div className="text-center md:text-left md:w-1/2 md:pl-10">
        <h1 className="text-2xl md:text-5xl font-bold">
          Hi, I'm Manoranjini 👋
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-xl">
          A passionate Web Developer skilled in React & Tailwind CSS.
        </p>
        <a
          href="#Projects"
          className="mt-6 inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow-lg transition"
        >
          View My Work
        </a>
      </div>

      <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-start">
        <img
          src="/profile1.png"
          alt="Manoranjini"
          //className="w-[420px] h-auto object-contain -mt-40"
          className="w-[300px] h-[300px] object-cover rounded-full border-4 border-white-500 shadow-lg"
        />
      </div>
    </section>
  );
}
