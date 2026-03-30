
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import Rating from './components/Rating/Rating'
import { ToastContainer } from 'react-toastify'

const data = fetch('data.json').then(res => res.json())
 

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <>
    <header>
        <NavBar selectedProducts={selectedProducts} />
        <Hero />
        <Rating />
    </header>

    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Products  data={data} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
      </Suspense>
    </main>
    
    <ToastContainer position="top-right" autoClose={3000}/>
    </>
  )
}

export default App
