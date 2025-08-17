import { Github } from "lucide-react"; // install with: npm install lucide-react

export default function Projects() {
  const projects = [
    {
      title: "Amazon Clone",
      desc: "An Amazon clone is a web application that replicates the core features of Amazon’s online shopping platform, built using JavaScript for interactivity and dynamic content.",
      link: "https://github.com/Manoranjini6268/Amazon-Clone.git",
    },
    {
      title: "Weather App",
      desc: "A React weather app fetches real-time data from an API and displays temperature, conditions, and forecasts with an interactive UI that updates based on user city input.",
      link: "https://github.com/Manoranjini6268/Weather-App.git",
    },
    {
      title: "Food Cart",
      desc: "A React Food Cart lets users browse items, add to cart, adjust quantities, and see the total price in real-time with smooth, dynamic updates.",
      link: "https://github.com/Manoranjini6268/Food-Cart.git",
    },
  ];

  return (
    <section id="Projects" className="min-h-screen bg-gray-100 px-6 py-16">
      <h2 className="text-4xl font-bold text-center  mt-12 mb-10">Projects</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {projects.map((p, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transform transition duration-300 w-80 h-70 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                >
                  <Github size={20} />
                </a>
              </div>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
