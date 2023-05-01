import AuthPageLayout from "@/components/auth/AuthPageLayout"
import LoginForm from "@/components/auth/auth-forms/LoginForm"
import { useState } from "react"
import SignupForm from "@/components/auth/auth-forms/SignupForm";


function SignInPage() {
  const [showLogin, setShowLogin] = useState(true);
  const [newUserEmail, setNewUserEmail] = useState('')

  const handleShowLogin = () => {
    setShowLogin(true)
  }

  const handleShowSignUp = () => {
    setShowLogin(false)
  }

  const handleSignupSuccess = (createdUserEmail) => {
    handleShowLogin()
    setNewUserEmail(createdUserEmail)
  }


  return (
    <>
      <AuthPageLayout>

        <div className="bg-mediumGreen h-14 flex justify-around rounded-lg p-1 w-3/5">
          <button className={`w-1/2 rounded-lg text-darkGreen ${showLogin ? 'bg-primaryWhite font-semibold' : 'text-opacity-50'}`} onClick={handleShowLogin}>Log in</button>

          <button className={`w-1/2 rounded-lg text-darkGreen ${!showLogin ? 'bg-primaryWhite font-semibold' : 'text-opacity-50'}`} onClick={handleShowSignUp}>Sign up</button>
        </div>
        <div className="w-full">
          {showLogin ? (
            <LoginForm defaultEmail={newUserEmail} />
          ) : (
            <SignupForm onSignupSuccess={handleSignupSuccess} />
          )}
        </div>

      </AuthPageLayout>
    </>
  )
}

export default SignInPage