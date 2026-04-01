
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

const data = fetch('data.json').then(res => res.json())
const Plans = fetch('PlanData.json').then(res => res.json())
 

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selected, setSelected] = useState("available"); 

  return (
    <>
      <main>
  
            <NavBar selectedProducts={selectedProducts} />

              <>
            
                <Hero />
          
                <Rating />

          <div>
    
            <Products 
              data={data} 
              selectedProducts={selectedProducts} 
              setSelectedProducts={setSelectedProducts}
              selected={selected}
              setSelected={setSelected} 
            />

            
            {selected === "available" && (
              <>
                <Steps />
                <Suspense fallback={<span>Loading...</span>}>
                  <Transparent Plans={Plans} />
                </Suspense>
                <Workflow />
                <SocialLinks />
              </>
            )}
          </div>


          </>
      </main>



      
        
      <ToastContainer position="top-right" autoClose={3000}/>
    </>
  )
}

export default App
