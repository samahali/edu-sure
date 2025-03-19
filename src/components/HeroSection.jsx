import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HeroSection() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate random particles on component mount
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?fit=crop&w=1920&q=80')",
      }}
    >
      {/* Background Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-0"></div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
            }}
          ></div>
        ))}
        <div className="w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse absolute top-10 left-10"></div>
        <div className="w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse absolute bottom-10 right-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-2xl animate-fade-in-down">
          Level Up Your Skills
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-100 max-w-xl mx-auto opacity-90 leading-relaxed">
          Transform your future with our expertly crafted courses designed to empower your learning journey. Start
          today!
        </p>
        <Link to="/courses">
          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500
           text-white font-semibold rounded-lg shadow-xl hover:from-yellow-500 hover:to-orange-600 cursor-pointer
           hover:scale-110 transition-all duration-300 transform-gpu">
            Browse Courses
          </button>
        </Link>
      </div>
    </div>
  )
}

