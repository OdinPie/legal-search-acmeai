import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const navbarRef = useRef(null);
  const bannerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = bannerRef.current?.offsetHeight || 0;
      if (window.scrollY > bannerHeight - 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
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
        ref={navbarRef}
        className={`transition-all duration-300 z-20 bg-white flex justify-between items-center px-8 py-4 shadow-sm ${
          isSticky
            ? "fixed top-0 left-0 w-full shadow-md"
            : "sticky top-4 mx-auto w-[90%] rounded-2xl shadow"
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="font-bold text-lg text-green-600">LegalDocs</div>
          <ul className="hidden md:flex space-x-6 text-gray-700">
            <li className="cursor-pointer hover:text-green-600">Business</li>
            <li className="cursor-pointer hover:text-green-600">Personal</li>
            <li className="cursor-pointer hover:text-green-600">Real Estate</li>
          </ul>
        </div>

        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border border-green-500 text-green-600 rounded-md hover:bg-green-50">
            Login
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Create your free account
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <section className="px-8 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Legal Made{" "}
          <span className="text-green-500">Effortless.</span>
        </h1>
        <p className="text-gray-600 mb-12">
          Access legal documents anytime, anywhere. Trusted legal forms for your business, your family, your future.
        </p>
        <input
          type="text"
          placeholder="Search"
          className="border w-full md:w-1/2 mx-auto block px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Dummy scroll content */}
        <div className="mt-32 h-[150vh] bg-gradient-to-b from-white to-gray-100"></div>
      </section>
    </div>
  );
}
