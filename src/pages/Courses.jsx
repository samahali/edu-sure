import { Link } from "react-router-dom"

const courses = [
  {
    id: 1,
    title: "Web Development Masterclass",
    description: "Learn HTML, CSS, JavaScript, React, and Node.js to become a full-stack developer.",
    image: "https://placehold.co/350x200",
    level: "Beginner to Advanced",
    duration: "12 weeks",
    price: "$99.99",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description: "Master Python, statistics, and machine learning for data analysis and visualization.",
    image: "https://placehold.co/350x200",
    level: "Intermediate",
    duration: "10 weeks",
    price: "$89.99",
  },
  {
    id: 3,
    title: "UX/UI Design Principles",
    description: "Create stunning user interfaces and improve user experience with modern design techniques.",
    image: "https://placehold.co/350x200",
    level: "All Levels",
    duration: "8 weeks",
    price: "$79.99",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Build iOS and Android apps using React Native and publish them to app stores.",
    image: "https://placehold.co/350x200",
    level: "Intermediate",
    duration: "10 weeks",
    price: "$94.99",
  },
  {
    id: 5,
    title: "Digital Marketing Strategy",
    description: "Learn SEO, social media marketing, and content creation to grow your online presence.",
    image: "https://placehold.co/350x200",
    level: "Beginner",
    duration: "6 weeks",
    price: "$69.99",
  },
  {
    id: 6,
    title: "Blockchain & Cryptocurrency",
    description: "Understand blockchain technology and develop smart contracts on Ethereum.",
    image: "https://placehold.co/350x200",
    level: "Advanced",
    duration: "8 weeks",
    price: "$109.99",
  },
]

export default function Courses() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="pt-24 pb-12 bg-gradient-to-b from-blue-600 to-blue-400 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl max-w-2xl">
            Discover the perfect course to advance your skills and achieve your goals.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="relative h-48">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{course.level}</span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">{course.price}</span>
                  <Link to={`/courses/${course.id}`}>
                    <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300">
                      View Course
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

