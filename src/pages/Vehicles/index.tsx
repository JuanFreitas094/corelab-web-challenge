import { useEffect, useState } from "react";
import { getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";
import AddPage from "../Add";
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import FilterPage from "../../pages/Filter";

var vehicles1: IVehicle[] = new Array;
var teste: IVehicle = {
  id: 1,
  plate: "GFM0495",
  isFavorite: false,
  createdAt: new Date(2022, 10, 2, 2, 20, 1, 10),
  name: "TESTE1",
  price: 100,
  description: "OLA",
  year: 2300,
  color: "VERDÃO" 
}
vehicles1.push(teste);

var teste: IVehicle = {
  id: 2,
  plate: "GFM0495",
  isFavorite: true,
  createdAt: new Date(2022, 10, 2, 2, 20, 1, 10),
  name: "TESTE2",
  price: 100,
  description: "OLA",
  year: 2300,
  color: "VERDÃO" 
}
vehicles1.push(teste);

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>(vehicles1);
  const [search, setSearch] = useState<string>("");

  const[isFilterOpened, setFilterOpened] = useState<boolean>(false);
  const[isAddOpened, setAddOpened] = useState<boolean>(false);

  const handleFilterClick = () => {
    setFilterOpened(!isFilterOpened);
  }

  const handleAddClick = () => {
    setAddOpened(!isAddOpened);
  }
  
  const handleFavoriteClick = (vehicle: IVehicle)  => {
    let vehicleAux = [...vehicles];
    for (let i = 0; i<= vehicleAux.length; i++) {
      if (vehicleAux[i].id === vehicle.id) {
        vehicleAux[i].isFavorite = !vehicle.isFavorite;
        break;
      }
    }
    setVehicles(vehicleAux);
  }

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();
      setVehicles(payload);
    };

    fetchVehicles();
  }, []);

  console.log({ vehicles });

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        { !isAddOpened && !isFilterOpened ?
          <>
            <div className={styles.SearchFilter}>
              <Search placeholder="Buscar" value={search} onChange={() => {}} />
              <button className={styles.Filter} onClick={handleFilterClick}><TbAdjustmentsHorizontal/></button>
            </div>
              <Button text="ADICIONAR" onClick={handleAddClick} /> 

              <h2>Favoritos</h2>
              <div className={styles.Cards}>
                {
                  vehicles.filter(function(obj) {
                    if (obj.isFavorite) {
                      return obj;
                    } 
                  }).map((value, pos) =>
                  <Card
                      title={value.name}
                      children={
                        <>
                          <p>{teste.price}</p>
                          <p>{teste.description}</p>
                          <p>{teste.year}</p>
                          <p>{teste.color}</p>
                        </>    
                      }
                      vehicle={value}
                      onClick={handleFavoriteClick}
                    />
                  )
                }
              </div>
              
              <h2>Meus Anúncios</h2>
              <div className={styles.Cards}>           
                {
                  vehicles.filter(function(obj) {
                    if (!obj.isFavorite) {
                      return obj;
                    }
                  }).map((value, pos) =>
                  <Card
                      title={value.name}
                      children={
                        <>
                          <p>{teste.price}</p>
                          <p>{teste.description}</p>
                          <p>{teste.year}</p>
                          <p>{teste.color}</p>
                        </>    
                      }
                      vehicle={value}
                      onClick={handleFavoriteClick}
                    />
                  )
              }
            </div>          
          </>
          : null          
        }
        
        <div>
          { isAddOpened ? <AddPage onClick={handleAddClick}/> : null }
        </div> 
        <div>
          { isFilterOpened ? <FilterPage onClick={handleFilterClick}/> : null }
        </div>           
      </main>
    </div>
  );
};

export default VehiclesPage;
