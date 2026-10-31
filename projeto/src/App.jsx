
import './App.css'
import { ToastContainer } from 'react-toastify/unstyled'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import ListaPage from './pages/ListaPage'
import CadastroPage from './pages/CadastroPage'

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lista" element={<ListaPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
        </Routes>
      </main>

      <Footer />

      <ToastContainer autoClose={5000} />
    </>
  )
}

export default App
