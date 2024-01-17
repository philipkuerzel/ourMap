import CarItem from "../carItem/CarItem";
import{v4 as uuidv4} from "uuid"

const CarList = ({cars}) => {
    console.log(cars);
    return (  
        <>
        <h1>hier ist ein CarList component</h1>
        {cars.map((car, index) => {
            return(
                <div key={index}>
                    <CarItem
                        keyID ={uuidv4()}
                        marke={car.marke}
                        farbe={car.farbe}
                        modell={car.modell}
                        Produktionsjahr={car.produktionsjahr}
                        ps={car.ps}
                        />
                </div>
            )
            
        })}
        </>
    );
}

export default CarList;