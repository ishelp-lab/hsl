import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import DevPage from './DevPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/em-desenvolvimento" element={<DevPage />} />
      </Routes>
    </Router>
  )
}

export default App
