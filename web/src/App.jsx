import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
// import LoginPage from './pages/LoginPage'
import ShoppingListPage from './pages/ShoppingListPage'
import TaskListPage from './pages/TaskListPage'
import SignInPage from './pages/SignInPage'
import AuthStore from './contexts/AuthStore'



function App() {


  return (
    <>
      <AuthStore>
        <div className="h-screen bg-lightGreen font-[Comfortaa]">
          <Routes>

            <Route path="/login" element={<SignInPage />} />

            <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/home" element={<HomePage />} />

            <Route path="/shopping-list" element={<ShoppingListPage />} />

            <Route path="/task-list" element={<TaskListPage />} />

          </Routes>
        </div>
      </AuthStore>
    </>
  )
}

export default App