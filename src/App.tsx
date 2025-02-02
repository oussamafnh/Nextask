import { useRoutes } from "react-router-dom"
import Main from "./Dashboard/main"
import AuthPage from "./auth/AuthPage"
import ForgotPassword from "./auth/ForgotPassword"
import LoadingPage from "./Loading/LoadingPage"
import { Toaster } from "./components/ui/toaster"


const routes = [
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Main /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/OTP", element: <ForgotPassword /> },
  { path: "/Loading", element: <LoadingPage /> }
]

function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Vite Ready.
        </p>
      </div>
      <div></div>
    </section>
  )
}

function App() {
  const children = useRoutes(routes)

  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <div className="flex-1">{children}</div>
        <Toaster />
      </div>
    </>
  )
}

export default App
