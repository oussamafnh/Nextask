import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoadingPage = () => {
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1)
      } else {
        clearInterval(interval)
        navigate('/dashboard')
      }
    }, 30)

    return () => clearInterval(interval)
  }, [progress, navigate])

  return (
    <div className="relative flex justify-center items-center h-screen w-full bg-white text-gray-900 overflow-hidden">
      <div className="w-[10vw] h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="absolute bottom-8 right-8 text-sm text-gray-500">© Nextask 2025</div>
    </div>
  )
}

export default LoadingPage