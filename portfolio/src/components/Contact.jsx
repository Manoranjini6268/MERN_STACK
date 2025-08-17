import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="min-h-screen bg-gray-900 text-white px-6 py-16 flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold mb-12">Contact Me</h2>

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* --- Contact Info --- */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-teal-400 text-2xl" />
            <a
              href="mailto:manoranjiniperiyasamy2005@gmail.com"
              className="hover:text-teal-400 transition"
            >
              manoranjiniperiyasamy2005@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhone className="text-teal-400 text-2xl" />
            <span>+91 7812887392</span>
          </div>

          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-teal-400 text-2xl" />
            <a
              href="https://www.linkedin.com/in/manoranjini-periyasamy-52839626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              linkedin.com
            </a>
          </div>
        </div>

        {/* --- Contact Form --- */}
        <form className="w-full bg-gray-800 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none"
          ></textarea>
          <button className="w-full bg-teal-500 hover:bg-teal-600 p-3 rounded font-bold transition">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
