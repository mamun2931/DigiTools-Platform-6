
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import Rating from './components/Rating/Rating'
import { ToastContainer } from 'react-toastify'
import Steps from './components/Steps/Steps'
import Transparent from './components/Transparent/Transparent'
import Workflow from './components/Workflow/Workflow'
import SocialLinks from './components/SocialLinks/SocialLinks'

const fetchData = async() =>{
  const res = await fetch('data.json');
  const data = await res.json();
  return data;
}

const fetchPlans = async() =>{
  const res = await fetch('PlanData.json');
  const data = await res.json();
  return data;
} 
   const Plans = fetchPlans();
  const data = fetchData();
function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);


  return (
    <>
      <main>

            <NavBar selectedProducts={selectedProducts} />

                <Hero />
                <Rating />
    
            <Suspense fallback={<div className='flex justify-center items-center p-10'><span className="loading loading-spinner loading-lg "></span></div>}>
                 
            <Products 
              data={data}
              selectedProducts={selectedProducts} 
              setSelectedProducts={setSelectedProducts}
            />
            </Suspense>

                <Steps />
                <Suspense fallback={<div className='flex justify-center items-center p-10'><span className="loading loading-spinner loading-lg "></span></div> }>
                  <Transparent Plans={Plans} />
                </Suspense>



                
                
                <Workflow />
                <SocialLinks />
      </main>

        
      <ToastContainer position="top-right" autoClose={3000}/>
    </>
  )
}

export default App
