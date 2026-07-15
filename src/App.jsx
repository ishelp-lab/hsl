import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import EspecialidadesPage from './EspecialidadesPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/especialidades" element={<EspecialidadesPage />} />
      </Routes>
    </Router>
  )
}

export default App
