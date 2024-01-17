import cars from "./assets/data/cars"
import './App.css'
import CarList from './assets/components/carList/CarList'

function App() {
// ! App.jsx ist wie eine Verwaltung
// ! hier ist Vanilla Js Bereich

console.log(cars);

  return (
    <>
      <CarList cars={cars}/>
    </>
  )
}

export default App
