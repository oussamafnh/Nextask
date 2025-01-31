import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoadingPage = () => {
  const [counter, setCounter] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 100) {
        setCounter((prev) => prev + 1)
      } else {
        clearInterval(interval)
        navigate('/dashboard')
      }
    }, 30) 
    return () => clearInterval(interval)
  }, [counter, navigate])

  return (
    <div className="relative flex justify-center items-center h-screen w-full bg-white text-gray-900 overflow-hidden">
      <div className="absolute bottom-12 left-8 text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 leading-none">
        {counter}%
      </div>
\      <div className="absolute bottom-8 right-8 text-sm text-gray-500">© Nextask 2025</div>
    </div>
  )
}

export default LoadingPage