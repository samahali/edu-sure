import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 shadow-lg py-2"
          : "bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Enhanced Logo */}
        <Link to="/" className="flex items-center group">
          <div className="relative flex items-center">
            {/* Logo Background */}
            <div
              className={`
              absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 
              rounded-full blur-sm opacity-70 group-hover:opacity-100 transition duration-300
              animate-pulse
            `}
            ></div>

            {/* Logo Circle */}
            <div
              className="
              relative w-12 h-12 flex items-center justify-center 
              bg-gradient-to-br from-white to-blue-50 
              rounded-full shadow-lg transform transition-all duration-300 
              group-hover:scale-110 group-hover:rotate-6
              border-2 border-white
            "
            >
              <span
                className="
                text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-indigo-800 
                text-2xl font-black
              "
              >
                E
              </span>

              {/* Orbiting Element */}
              <div
                className="
                absolute -top-1 -right-1 w-5 h-5 
                bg-gradient-to-br from-amber-400 to-yellow-300 
                rounded-full shadow-md
                animate-bounce
              "
              ></div>
            </div>
          </div>

          {/* Text Logo */}
          <div className="ml-3 flex flex-col">
            <span
              className="
              text-2xl font-extrabold tracking-tight
              text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300
              drop-shadow-sm
            "
            >
              Edu
              <span className="text-white">
                Sure
              </span>
            </span>
            <div className="flex items-center">
              <span
                className="
                text-xs text-blue-100 font-light tracking-wider
              "
              >
                Learn. Grow. Succeed.
              </span>
              <span
                className="
                ml-1 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse
              "
              ></span>
            </div>
          </div>
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden text-white focus:outline-none cursor-pointer
            hover:bg-blue-600/50 rounded-full p-2
            transition-all duration-200 backdrop-blur-sm
          "
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`
            fixed inset-0 bg-gradient-to-b from-indigo-900 to-blue-800
            z-50 md:static md:bg-transparent md:z-auto md:flex md:items-center
            transition-all duration-300 ease-in-out transform backdrop-blur-lg md:backdrop-blur-none
            ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          {/* Close Button (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              absolute top-4 right-4 text-white focus:outline-none
              hover:bg-blue-600/50 rounded-full p-2
              transition-all duration-200 cursor-pointer md:hidden
            "
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row md:space-x-1 text-center md:text-left mt-16 md:mt-0">
            {[
              { path: "/", label: "Home" },
              { path: "/courses", label: "Courses" },
              { path: "/cart", label: "Cart" },
              { path: "/admin", label: "Admin" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    relative block px-4 py-2 mx-2
                    font-medium text-sm tracking-wide
                    transition-all duration-200
                    ${isActive(item.path) ? "text-amber-300 md:text-amber-300" : "text-blue-100 hover:text-white"}
                    md:hover:bg-white/10 rounded-lg
                    hover:scale-105
                  `}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {item.label}

                  {/* Active Indicator */}
                  {isActive(item.path) && (
                    <span
                      className="
                      absolute bottom-0 left-1/2 transform -translate-x-1/2
                      w-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300
                      rounded-full
                    "
                    ></span>
                  )}
                </Link>
              </li>
            ))}

            {/* Special Button for Login */}
            <li className="mt-4 md:mt-0 mx-4 md:mx-0 md:ml-4">
              <Link
                to="/login"
                className="
                  block py-2 px-4
                  bg-gradient-to-r from-amber-400 to-yellow-300
                  hover:from-amber-300 hover:to-yellow-200
                  text-blue-900 font-semibold text-sm
                  rounded-lg shadow-md hover:shadow-lg
                  transform transition-all duration-200
                  hover:scale-105 hover:-translate-y-1
                  border border-amber-300
                "
                onClick={() => setIsOpen(!isOpen)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

