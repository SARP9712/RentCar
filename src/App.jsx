import React ,{ useState} from 'react'
import Nabvar from './Components/Nabvar'
import Header from './Components/Shared/Header'
import CarRental from './Components/Shared/CarRental'
import CarList from './Components/Shared/Carlist'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CarsData } from './Components/CarsData'
import CarPage from './Components/Shared/Carpage'
import PageRental from './Components/PageRental'




function App() {
//  const [cart, setCart] = useState([]);

//  const addToCart = (car) => {
//   setCart([...cart, car]);
// };

console.log(CarsData)
  return (
    <Router>
    
        <Nabvar/>




        <Header></Header>
        <CarRental></CarRental>

        
      <Routes>

<Route path="/" element={<CarRental />}></Route>
{CarsData.map((car) => (
<Route path="/car/:id" element={<PageRental />}/>
))}

</Routes>
        {/* <CarList></CarList> */}
        
      
     
          
                         
    
    </Router>
  )
}

export default App
