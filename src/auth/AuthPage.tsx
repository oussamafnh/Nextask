import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import LogoLight from '@/assets/logo.png'
import { Link } from 'react-router-dom'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type LoginFormValues = z.infer<typeof loginSchema>
type SignupFormValues = z.infer<typeof signupSchema>

const AuthPage = () => {
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const {
    register: signupRegister,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  })

  const onLoginSubmit = (data: LoginFormValues) => {
    console.log('Login Data:', data)
  }

  const onSignupSubmit = (data: SignupFormValues) => {
    console.log('Signup Data:', data)
  }

  return (
    <div className="relative flex justify-center items-center h-screen w-full bg-gray-50 overflow-hidden">
      <img src={LogoLight} alt="Logo" className="absolute top-10 w-24 h-24 object-contain" />
      <Tabs defaultValue="login" className="w-[400px] z-10">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" {...loginRegister('email')} />
                  {loginErrors.email && <p>{loginErrors.email.message}</p>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" {...loginRegister('password')} />
                  {loginErrors.password && <p>{loginErrors.password.message}</p>}
                </div>
                <Button type="submit" className="w-full mt-4">Log In</Button>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" className="w-1/2 flex items-center justify-center gap-2">
                    <FaGoogle size={20} /> Google
                  </Button>
                  <Button variant="outline" className="w-1/2 flex items-center justify-center gap-2">
                    <FaFacebook size={20} /> Facebook
                  </Button>
                </div>
                <div className="mt-4 text-center">
                  <Link to="/OTP" className="text-sm hover:underline" >
                    Forgot my password?
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Sign Up</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <form onSubmit={handleSignupSubmit(onSignupSubmit)}>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" {...signupRegister('email')} />
                  {signupErrors.email && <p>{signupErrors.email.message}</p>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" {...signupRegister('password')} />
                  {signupErrors.password && <p>{signupErrors.password.message}</p>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" {...signupRegister('confirmPassword')} />
                  {signupErrors.confirmPassword && <p>{signupErrors.confirmPassword.message}</p>}
                </div>
                <Button type="submit" className="w-full mt-4">Sign Up</Button>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" className="w-1/2 flex items-center justify-center gap-2">
                    <FaGoogle size={20} /> Google
                  </Button>
                  <Button variant="outline" className="w-1/2 flex items-center justify-center gap-2">
                    <FaFacebook size={20} /> Facebook
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <footer className="absolute bottom-0 w-full flex justify-between items-center p-4 text-sm text-gray-500">
        <div className="flex gap-4">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Policies</a>
        </div>
        <div>
          © Nextask 2025
        </div>
      </footer>
    </div>
  )
}

export default AuthPage