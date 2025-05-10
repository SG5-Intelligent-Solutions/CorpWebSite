import { ArrowRight, ChevronRight, PlayIcon } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export const FrameByAnima = () => {
  // Array of industry data for swipeable content
  const industriesData = [
    {
      id: 'energy',
      title: 'Energy',
      challenges: {
        title: 'Key Challenges:',
        description:
          'Dynamic energy pricing, asset management, and operational inefficiencies.',
      },
      solutions: {
        title: 'SG5.ai Solutions',
        description:
          'Smart Energy Management System, Predictive Asset Management, Data-Driven Decision Support.',
      },
      image: '/img1.png',
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      challenges: {
        title: 'Key Challenges:',
        description:
          'Regulatory compliance, data management, and operational efficiency.',
      },
      solutions: {
        title: 'SG5.ai Solutions',
        description:
          'Blockchain-Based Compliance Tool, Bespoke Software Development, AI & ML for Predictive Healthcare Analytics.',
      },
      image: '/img2.png',
    },
    {
      id: 'transport',
      title: 'Logistics & Transportation',
      challenges: {
        title: 'Key Challenges:',
        description:
          'Fleet management, route optimization, and predictive maintenance.',
      },
      solutions: {
        title: 'SG5.ai Solutions',
        description:
          'EV Fleet Management Platform, Predictive Asset Management, Data Engineering.',
      },
      image: '/img3.png',
    },
  ]

  // State for tracking current industry index
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentIndustry = industriesData[currentIndex]

  // Slider reference and state
  const sliderRef = useRef(null)
  const thumbRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [startPosition, setStartPosition] = useState(0)
  
  // Refs for wave animation
  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)

  // Calculate position for the slider indicator
  const calculateThumbPosition = (index) => {
    const position = index / (industriesData.length - 1)
    return position * 100
  }

  // Initialize slider dimensions
  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.offsetWidth)
    }
  }, [])
  
  // Wave animation setup
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height
    
    // Set canvas dimensions to match container size
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight
      }
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Wave parameters
    const waves = [
      { amplitude: 20, frequency: 0.02, speed: 0.03, color: 'rgba(161, 192, 255, 0.3)' },
      { amplitude: 15, frequency: 0.03, speed: 0.02, color: 'rgba(79, 70, 229, 0.2)' },
      { amplitude: 10, frequency: 0.04, speed: 0.01, color: 'rgba(59, 130, 246, 0.15)' }
    ]
    
    let time = 0
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      waves.forEach(wave => {
        drawWave(ctx, canvas.width, canvas.height, wave.amplitude, wave.frequency, time * wave.speed, wave.color)
      })
      
      time += 1
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    // Draw a single wave
    const drawWave = (ctx, width, height, amplitude, frequency, phase, color) => {
      ctx.beginPath()
      ctx.moveTo(0, height / 2)
      
      for (let x = 0; x < width; x++) {
        const y = height / 2 + amplitude * Math.sin(x * frequency + phase)
        ctx.lineTo(x, y)
      }
      
      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()
      
      ctx.fillStyle = color
      ctx.fill()
    }
    
    animate()
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Handle drag start
  const handleDragStart = (e) => {
    setIsDragging(true)
    setStartPosition(e.clientX || (e.touches && e.touches[0].clientX))
    document.addEventListener('mousemove', handleDrag)
    document.addEventListener('touchmove', handleDrag)
    document.addEventListener('mouseup', handleDragEnd)
    document.addEventListener('touchend', handleDragEnd)
  }

  // Handle drag
  const handleDrag = (e) => {
    if (!isDragging || !sliderRef.current) return

    const clientX = e.clientX || (e.touches && e.touches[0].clientX)
    const sliderRect = sliderRef.current.getBoundingClientRect()
    const offsetX = clientX - sliderRect.left
    const percentage = Math.max(0, Math.min(1, offsetX / sliderWidth))

    // Calculate nearest index based on percentage
    const newIndex = Math.round(percentage * (industriesData.length - 1))
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex)
    }
  }

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false)
    document.removeEventListener('mousemove', handleDrag)
    document.removeEventListener('touchmove', handleDrag)
    document.removeEventListener('mouseup', handleDragEnd)
    document.removeEventListener('touchend', handleDragEnd)
  }

  // Handle click on slider track
  const handleSliderClick = (e) => {
    if (!sliderRef.current) return

    const sliderRect = sliderRef.current.getBoundingClientRect()
    const offsetX = e.clientX - sliderRect.left
    const percentage = Math.max(0, Math.min(1, offsetX / sliderWidth))

    // Calculate nearest index based on percentage
    const newIndex = Math.round(percentage * (industriesData.length - 1))
    setCurrentIndex(newIndex)
  }

  // Go to previous/next industry
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? industriesData.length - 1 : prevIndex - 1,
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === industriesData.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <section className="relative w-full py-24 overflow-hidden bg-black">
      {/* Animated background with canvas */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('/3d-data-technology-abstract-background-with-cyber-particles-1.png')`,
          }}
          aria-hidden="true"
        />
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full opacity-40" 
          aria-hidden="true"
        />
      </div>

      {/* Top gradient overlay */}
      <div className="absolute w-full h-64 top-0 left-0 bg-gradient-to-b from-black to-transparent z-10" />

      {/* Bottom gradient overlay */}
      <div className="absolute w-full h-64 bottom-0 left-0 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Main content container */}
      <div className="relative z-20 md:container mx-auto px-4">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h2 className="font-medium text-white text-5xl leading-tight max-w-3xl">
            Transforming Core Industries Through Innovation
          </h2>
          <div className="mt-4 md:mt-0">
            <span className="font-medium text-blue-300 text-base text-right">
              Industries We Serve
            </span>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Image with play button */}
          <div className="relative flex-1">
            <div className="w-full mx-auto rounded-2xl overflow-hidden">
              <div className="p-0 flex justify-center items-center">
                <div
                  className="relative aspect-video rounded-2xl bg-center bg-cover w-[30rem] h-[30rem] "
                  style={{ backgroundImage: `url(${currentIndustry.image})` }}
                >
                  {/* Play button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-black bg-opacity-70 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-all">
                    <PlayIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="relative md:w-[50%] text-white p-8 overflow-hidden">
            {/* Main content */}
            <div className="relative z-10">
              {/* Energy title */}
              <h2 className="text-7xl font-light text-white mb-8">
                {currentIndustry.title}
              </h2>

              <div className="relative h-full rounded-lg">
                {/* Challenges card - dark blue with border */}
                <div className="min-h-[25rem] md:w-[20rem] h-full bg-navy-900 bg-opacity-40 backdrop-blur-md rounded-lg border-[5px] border-[#A1C0FF] p-8">
                  <h3 className="text-3xl font-light text-white mb-6">
                    {currentIndustry.challenges.title}
                  </h3>
                  <p className="text-xl font-light text-white">
                    {currentIndustry.challenges.description}
                  </p>
                </div>

                {/* Solutions card - light blue positioned to overlap */}
                <div className="md:w-[20rem] h-[20rem] bg-blue-300 rounded-lg p-8 absolute left-1/3 -bottom-[8rem]">
                  <h3 className="text-3xl font-bold text-black mb-4">
                    {currentIndustry.solutions.title}
                  </h3>
                  <p className="text-xl text-black">
                    {currentIndustry.solutions.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Swipe indicator */}
        <div className="flex flex-col items-center mt-16">
          <p className="text-xl font-medium text-blue-300 mb-4">
            Swipe to see more
          </p>

          {/* Custom slider component */}
          <div className="relative w-64 mb-6">
            {/* Slider track */}
            <div
              ref={sliderRef}
              className="relative w-full h-8 border border-white shadow-md shadow-blue-300 overflow-hidden cursor-pointer"
              onClick={handleSliderClick}
            >
              {/* Fill background */}
              <div
                className="absolute inset-0 bg-blue-300"
                style={{
                  width: `${calculateThumbPosition(currentIndex)}%`,
                  transition: isDragging ? 'none' : 'width 0.3s ease',
                }}
              />

              {/* Darker gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900"
                style={{
                  opacity: 0.3,
                  backgroundSize: `${
                    100 - calculateThumbPosition(currentIndex)
                  }% 100%`,
                  backgroundPosition: 'right center',
                }}
              />

              {/* Slider thumb */}
              <div
                ref={thumbRef}
                className="absolute top-1 cursor-grab active:cursor-grabbing z-20 flex items-center justify-center"
                style={{
                  left: `calc(${calculateThumbPosition(currentIndex)}% - ${
                    currentIndex > 0 ? '12px' : '0px'
                  })`,
                  transition: isDragging ? 'none' : 'left 0.3s ease',
                }}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
              >
                <ArrowRight
                  size={20}
                  className={`text-white stroke-2 ${
                    currentIndex !== 0 && '-ml-3'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

