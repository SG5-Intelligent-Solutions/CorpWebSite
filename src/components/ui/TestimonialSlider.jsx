import React, { useState, useEffect } from 'react'

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const testimonials = [
    // First row
    {
      id: 1,
      rating: 5,
      text:
        'Cyntch has been an amazing investment partner for me. Their investment management services are easy to use.',
      author: '@Yury',
    },
    {
      id: 2,
      rating: 5,
      text:
        'I never realized how much money I was wasting on unnecessary expenses until I started using Cyntch.',
      author: '@Aryan',
    },
    {
      id: 3,
      rating: 5,
      text:
        'Such a clean, beautiful template and so easy to customise. Would highly recommend.',
      author: '@Arim',
    },
    // Second row
    {
      id: 4,
      rating: 5,
      text:
        'Cyntch has been an amazing investment partner for me. Their investment management services are easy to use.',
      author: '@Aryan',
    },
    {
      id: 5,
      rating: 5,
      text:
        'Such a clean, beautiful template and so easy to customise. Would highly recommend.',
      author: '@Arim',
    },
    {
      id: 6,
      rating: 4,
      text:
        "I accidentally discovered this while looking for something else, and I'm glad I did!",
      author: '@Sam',
    },
    {
      id: 7,
      rating: 5,
      text:
        'I never realized how much money I was wasting on unnecessary expenses until I started using Cyntch.',
      author: '@Aryan',
    },
    {
      id: 8,
      rating: 5,
      text:
        'Such a clean, beautiful template and so easy to customise. Would highly recommend.',
      author: '@Arim',
    },
    {
      id: 9,
      rating: 4,
      text:
        "I accidentally discovered this while looking for something else, and I'm glad I did!",
      author: '@Sam',
    },
    {
      id: 10,
      rating: 5,
      text:
        'I never realized how much money I was wasting on unnecessary expenses until I started using Cyntch.',
      author: '@Aryan',
    },
  ]

  // Divide testimonials into rows
  const firstRow = testimonials.slice(0, 5)
  const secondRow = testimonials.slice(4)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setActiveIndex(
        (prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3),
      )

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  // Render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-white' : 'text-gray-500'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  // Create a card component for reuse
  const TestimonialCard = ({ testimonial, isPartial = false }) => {
    if (!testimonial && isPartial) {
      return (
        <div className="w-1/12 px-1 opacity-30">
          <div className="border border-gray-800 rounded-lg p-4 h-full bg-black"></div>
        </div>
      )
    }

    return testimonial ? (
      <div className={`${isPartial ? 'w-1/12 opacity-30' : 'w-1/3'} px-1`}>
        <div className="border border-gray-800 rounded-lg p-4 h-full bg-black">
          {renderStars(testimonial.rating)}
          <p className="text-sm mb-2">{testimonial.text}</p>
          <p className="text-sm text-gray-400">{testimonial.author}</p>
        </div>
      </div>
    ) : null
  }

  // Calculate which testimonials to show based on active index
  const getVisibleCards = (row, index) => {
    const startIdx = index * 3
    return row.slice(startIdx, startIdx + 3)
  }

  const visibleFirstRow = getVisibleCards(firstRow, 0)
  const visibleSecondRow = getVisibleCards(secondRow, activeIndex)

  return (
    <div className="w-full bg-black text-white py-8 container mx-auto">
      {/* First Row */}
      <div className="mb-6">
        <div className="flex items-stretch px-4 overflow-hidden">
          <TestimonialCard isPartial={true} />

          {visibleFirstRow.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}

          <TestimonialCard isPartial={true} />
        </div>
      </div>

      {/* Second Row */}
      <div>
        <div
          className={`flex items-stretch px-4 overflow-hidden transition-transform duration-500 ${
            isTransitioning ? 'opacity-95' : ''
          }`}
        >
          <TestimonialCard isPartial={true} />

          {visibleSecondRow.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}

          {visibleSecondRow.length < 4 &&
            [...Array(4 - visibleSecondRow.length)].map((_, i) => (
              <TestimonialCard
                key={`empty-${i}`}
                testimonial={
                  secondRow[
                    (activeIndex * 4 + visibleSecondRow.length + i) %
                      secondRow.length
                  ]
                }
              />
            ))}

          <TestimonialCard isPartial={true} />
        </div>
      </div>
    </div>
  )
}
