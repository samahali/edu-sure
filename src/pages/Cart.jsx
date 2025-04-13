"use client"

import { useState } from "react"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"

export default function Cart() {
  // This would normally come from a state management solution or API
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Web Development Masterclass",
      image: "https://placehold.co/400x225",
      price: 99.99,
      originalPrice: 199.99,
      instructor: "Sarah Johnson",
      duration: "42 hours",
      level: "Beginner to Advanced",
      rating: 4.8,
      reviews: 342,
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      image: "https://placehold.co/400x225",
      price: 89.99,
      originalPrice: 149.99,
      instructor: "Michael Chen",
      duration: "38 hours",
      level: "Intermediate",
      rating: 4.7,
      reviews: 218,
    },
  ])

  const isEmpty = cartItems.length === 0
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0)
  const discount = cartItems.reduce((total, item) => total + (item.originalPrice - item.price), 0)
  const tax = subtotal * 0.07
  const total = subtotal + tax

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />

      {/* Enhanced Header */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mr-4 text-yellow-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Your Learning Cart
          </h1>
          <p className="text-xl text-blue-100">
            Review your selected courses and proceed to unlock your learning journey
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        {isEmpty ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-lg max-w-2xl mx-auto">
            <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any courses to your cart yet. Discover our top-rated courses to start your
              learning journey.
            </p>
            <Link to="/edu-sure/courses">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Browse Courses
                </span>
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800">Cart Items ({cartItems.length})</h2>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-48 h-40 flex-shrink-0 mb-4 md:mb-0 overflow-hidden rounded-lg group">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                        </div>
                      </div>

                      <div className="md:ml-6 flex-grow">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <div>
                            <h3 className="font-bold text-xl text-gray-800 mb-1">{item.title}</h3>
                            <p className="text-gray-600 mb-2">by {item.instructor}</p>

                            <div className="flex items-center mb-3">
                              <div className="flex items-center mr-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-gray-500 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span className="text-sm text-gray-600">{item.duration}</span>
                              </div>

                              <div className="flex items-center mr-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-gray-500 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                  />
                                </svg>
                                <span className="text-sm text-gray-600">{item.level}</span>
                              </div>

                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-yellow-500 mr-1"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm text-gray-600">
                                  {item.rating} ({item.reviews} reviews)
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-start md:items-end">
                            <div className="mb-2">
                              <span className="text-gray-400 line-through text-sm mr-2">
                                ${item.originalPrice.toFixed(2)}
                              </span>
                              <span className="text-blue-600 font-bold text-2xl">${item.price.toFixed(2)}</span>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 transition-colors flex items-center text-sm font-medium"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* What You'll Get Section */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-800">What You'll Get</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Full Lifetime Access</h3>
                        <p className="text-gray-600 text-sm">Learn at your own pace with unlimited access</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">On-Demand Video</h3>
                        <p className="text-gray-600 text-sm">High-quality videos available anytime</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Certificate of Completion</h3>
                        <p className="text-gray-600 text-sm">Receive a certificate when you finish</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">24/7 Support</h3>
                        <p className="text-gray-600 text-sm">Get help whenever you need it</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Student Reviews */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-800">What Our Students Say</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="font-bold text-blue-600">JD</span>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <h3 className="font-semibold text-gray-800 mr-2">John Doe</h3>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-yellow-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">
                          "The courses are incredibly well-structured and the instructors are top-notch. I've learned
                          more in a few weeks than I did in a year of self-study."
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="font-bold text-blue-600">AS</span>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <h3 className="font-semibold text-gray-800 mr-2">Amanda Smith</h3>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-yellow-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">
                          "Worth every penny! The practical projects helped me build a portfolio that landed me my dream
                          job. Highly recommended for anyone serious about learning."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Original Price</span>
                    <span className="text-gray-400 line-through">
                      ${cartItems.reduce((total, item) => total + item.originalPrice, 0).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Course Discount</span>
                    <span className="text-green-500">-${discount.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (7%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-bold text-xl">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1 text-right">One-time payment</p>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-2">
                    Have a promo code?
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="promo"
                      className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter code"
                    />
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-r-lg hover:bg-gray-300 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                <button className="w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Secure Checkout
                </button>

                <div className="flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs text-gray-500">Secure Payment</span>
                </div>

                <div className="flex justify-center space-x-3">
                  <img src="https://placehold.co/40x25" alt="Visa" className="h-6 opacity-70" />
                  <img src="https://placehold.co/40x25" alt="Mastercard" className="h-6 opacity-70" />
                  <img src="https://placehold.co/40x25" alt="PayPal" className="h-6 opacity-70" />
                  <img src="https://placehold.co/40x25" alt="Apple Pay" className="h-6 opacity-70" />
                </div>

                <div className="mt-6 text-center">
                  <Link
                    to="/edu-sure/courses"
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

