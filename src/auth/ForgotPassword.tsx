import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import LogoLight from '@/assets/logo.png'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'

const ForgotPassword = () => {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleSendCode = () => {
    console.log('Sending code to:', email)
    setStep(2)
  }

  const handleVerifyOTP = () => {
    console.log('Verifying OTP:', otp)
    setStep(3)
  }

  const handleChangePassword = () => {
    if (password !== confirmPassword) {
      console.error('Passwords do not match')
      return
    }
    console.log('Changing password:', password)
    navigate('/auth')
  }

  return (
    <div className="relative flex justify-center items-center h-screen w-full bg-gray-50 overflow-hidden">
      <img src={LogoLight} alt="Logo" className="absolute top-10 w-24 h-24 object-contain" />
      <Card className="w-[400px] z-10">
        <CardHeader className="text-center">
          <CardTitle>
            {step === 1 && 'Forgot Password'}
            {step === 2 && 'Verify OTP'}
            {step === 3 && 'Reset Password'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 1 && (
            <>
              <div className="space-y-1">
                <Label htmlFor="email">Email or Username</Label>
                <Input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button onClick={handleSendCode} className="w-full">
                Send Code
              </Button>
            </>
          )}
          {step === 2 && (
            <>
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <Button onClick={handleVerifyOTP} className="w-full">
                Verify OTP
              </Button>
            </>
          )}
          {step === 3 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button onClick={handleChangePassword} className="w-full">
                Change Password
              </Button>
            </>
          )}
        </CardContent>
      </Card>
      <footer className="absolute bottom-0 w-full flex justify-between items-center p-4 text-sm text-gray-500">
        <div className="flex gap-4">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Policies</a>
        </div>
        <div>© Nextask 2025</div>
      </footer>
    </div>
  )
}

export default ForgotPassword