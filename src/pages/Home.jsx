import { useEffect, useState } from "react"
import HeroSection from "../components/HeroSection"
import { Link } from "react-router-dom"

// Sample featured courses data
const featuredCourses = [
  {
    id: 1,
    title: "Web Development Masterclass",
    description: "Learn HTML, CSS, JavaScript, React, and Node.js to become a full-stack developer.",
    image: "https://placehold.co/350x200",
    level: "Beginner to Advanced",
    duration: "12 weeks",
    price: "$99.99",
    rating: 4.8,
    students: 1245,
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description: "Master Python, statistics, and machine learning for data analysis and visualization.",
    image: "https://placehold.co/350x200",
    level: "Intermediate",
    duration: "10 weeks",
    price: "$89.99",
    rating: 4.7,
    students: 982,
  },
  {
    id: 3,
    title: "UX/UI Design Principles",
    description: "Create stunning user interfaces and improve user experience with modern design techniques.",
    image: "https://placehold.co/350x200",
    level: "All Levels",
    duration: "8 weeks",
    price: "$79.99",
    rating: 4.9,
    students: 763,
  },
]

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Front-end Developer",
    image: "https://placehold.co/100x100",
    text: "The Web Development Masterclass completely transformed my career. I went from knowing nothing about coding to landing a job as a front-end developer in just 4 months!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Analyst",
    image: "https://placehold.co/100x100",
    text: "The Data Science course was exactly what I needed to transition into analytics. The instructors are knowledgeable and the projects are practical and relevant.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    image: "https://placehold.co/100x100",
    text: "I've taken many design courses, but EduSure's UX/UI Design Principles course stands out for its comprehensive curriculum and hands-on approach.",
    rating: 4,
  },
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [counters, setCounters] = useState({ students: 0, courses: 0, instructors: 0, ratings: 0 });
  const targetCounters = { students: 15000, courses: 200, instructors: 85, ratings: 4.9 };
  
  // Counter animation effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);
      
      setCounters({
        students: Math.floor(targetCounters.students * progress),
        courses: Math.floor(targetCounters.courses * progress),
        instructors: Math.floor(targetCounters.instructors * progress),
        ratings: Number.parseFloat((targetCounters.ratings * progress).toFixed(1))
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i} 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <>
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{counters.students.toLocaleString()}+</h3>
              <p className="text-gray-600">Students Worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{counters.courses}+</h3>
              <p className="text-gray-600">Courses Available</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{counters.instructors}</h3>
              <p className="text-gray-600">Expert Instructors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{counters.ratings}</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EduSure?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the highest quality education with features designed to enhance your learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert-Led Courses</h3>
              <p className="text-gray-600">
                Learn from industry professionals with real-world experience and proven expertise in their fields.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Lifetime Access</h3>
              <p className="text-gray-600">
                Purchase once and access your course content forever, including all future updates and improvements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Learning</h3>
              <p className="text-gray-600">
                Engage with hands-on projects, quizzes, and assignments that reinforce your learning and build practical skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
              <p className="text-xl text-gray-600">
                Explore our most popular and highly-rated courses
              </p>
            </div>
            <Link to="/edu-sure/courses" className="hidden md:block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              View All Courses
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div 
                key={course.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 flex flex-col"
              >
                <div className="relative h-48">
                  <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {course.rating} ★
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{course.level}</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    <span>{course.students.toLocaleString()} students enrolled</span>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2 border-t mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">{course.price}</span>
                    <Link to={`/edu-sure/courses/${course.id}`}>
                      <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300">
                        View Course
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/edu-sure/courses" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Thousands of students have transformed their careers with EduSure. Here's what they have to say.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                >
                  <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <img 
                          src={testimonial.image || "/placeholder.svg"} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-blue-600">{testimonial.role}</p>
                        <div className="flex mt-2">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg italic">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-white' : 'bg-blue-300 bg-opacity-50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Join thousands of students who are already advancing their careers with EduSure's expert-led courses.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Access to 200+ premium courses
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Hands-on projects and assignments
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Expert instructor support
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Completion certificates
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-12 flex items-center">
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Sign up and get started today</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium rounded-md hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started For Free
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 text-xl font-bold">E</span>
                </div>
                <span className="text-2xl font-bold">EduSure</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering learners worldwide with high-quality education and practical skills for the modern workforce.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }