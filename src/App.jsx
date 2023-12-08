import React ,{ useState} from 'react'
import Nabvar from './Components/Nabvar'
import Header from './Components/Shared/Header'
import CarRental from './Components/Shared/CarRental'
import CarList from './Components/Shared/Carlist'




function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (car) => {
    setCart([...cart, car]);
  };

  return (
    <>

        <Nabvar cart={cart}/>
        <Header></Header>
        <CarRental></CarRental>
        <CarList></CarList>
        
      
     
          
                         
    
    </>
  )
}

export default App
