import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ShoppingListPage from './pages/ShoppingListPage'
import TaskListPage from './pages/TaskListPage'


function App() {


  return (
    <div className="App h-screen bg-lightGreen">

      <Routes>

        <Route path="/login" element={<LoginPage />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/shopping-list" element={<ShoppingListPage />} />

        <Route path="/task-list" element={<TaskListPage />} />

      </Routes>


    </div>
  )
}

export default App