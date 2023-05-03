import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShoppingListPage from './pages/ShoppingListPage'
import TaskListPage from './pages/TaskListPage'
import LoginPage from './pages/LoginPage'
import AuthStore from './contexts/AuthStore'
import PrivateRoute from './guards/PrivateRoute.jsx'



function App() {


  return (
    <>
      <AuthStore>
        <div className="h-screen bg-lightGreen font-[Comfortaa]">
          <Routes>

            <Route path="/login" element={<LoginPage />} />

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