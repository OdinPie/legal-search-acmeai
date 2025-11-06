import { useEffect, useRef, useState } from "react";

export default function App() {
  const bannerRef = useRef(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = bannerRef.current?.offsetHeight || 0;

      // when scrolled past the banner
      if (window.scrollY > bannerHeight - 10) {
        setIsStuck(true);
      } else {
        setIsStuck(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <header
        ref={bannerRef}
        className="bg-gray-100 text-right text-sm text-gray-700 py-2 px-8"
      >
        Why LegalDocs? | Pricing | Resources
      </header>

      {/* Navbar */}
      <nav
        className={`transition-all duration-300 z-20 bg-white shadow-md flex justify-between items-center px-8 py-4 mx-auto w-[90%] rounded-2xl ${
          isStuck ? "fixed top-0 left-0 w-full rounded-none" : "sticky top-4"
        }`}
      >
        <div className="font-bold text-green-600 text-lg">LegalDocs</div>

        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li className="cursor-pointer hover:text-green-600">Business</li>
          <li className="cursor-pointer hover:text-green-600">Personal</li>
          <li className="cursor-pointer hover:text-green-600">Real Estate</li>
        </ul>

        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border border-green-500 text-green-600 rounded-md hover:bg-green-50">
            Login
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Create your free account
          </button>
        </div>
      </nav>

      {/* Dummy Scroll Content */}
      <section className="px-8 py-20 text-center h-[200vh]">
        <h1 className="text-4xl font-bold mb-4">
          Legal Made <span className="text-green-500">Effortless.</span>
        </h1>
        <p className="text-gray-600">
          Access legal documents anytime, anywhere.
        </p>
      </section>
    </div>
  );
}
