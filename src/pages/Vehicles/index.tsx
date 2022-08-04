import { useEffect, useState } from "react";
import { getVehicles, updateVehicle } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";
import AddPage from "../Add";
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import FilterPage from "../../pages/Filter";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  const[vehicle1, setVehicleToEdit] = useState<IVehicle>();

  const[isFilterOpened, setFilterOpened] = useState<boolean>(false);
  const[isAddOpened, setAddOpened] = useState<boolean>(false);

  const handleFilterClick = () => {
    setFilterOpened(!isFilterOpened);
  }

  const handleAddClick = () => {
    setAddOpened(!isAddOpened);
    fetchVehicles();
  }

  const handleCardEditClick = (vehicle: IVehicle) => {
    setVehicleToEdit(vehicle);
    handleAddClick();
  }
  
  const handleFavoriteClick = (vehicle: IVehicle)  => {
    let vehicleAux = [...vehicles];
    for (let i = 0; i<= vehicleAux.length; i++) {
      if (vehicleAux[i].id === vehicle.id) {
        vehicleAux[i].is_favorite = !vehicle.is_favorite;
        updateVehicle(vehicleAux[i]);
        break;
      }
    }
    setVehicles(vehicleAux);
  }

  const fetchVehicles = async () => {
    const payload = await getVehicles();
    setVehicles(payload);
  };

  useEffect(() => {    
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
                    if (obj.is_favorite) {
                      return obj;
                    } 
                  }).map((value, pos) =>
                  <Card
                      title={value.name}
                      children={
                        <>
                          <p>{value.price}</p>
                          <p>{value.description}</p>
                          <p>{value.year}</p>
                          <p>{value.color}</p>
                        </>    
                      }
                      vehicle={value}
                      onClick={handleFavoriteClick}
                      onClickEdit={handleCardEditClick}
                    />
                  )
                }
              </div>
              
              <h2>Meus Anúncios</h2>
              <div className={styles.Cards}>           
                {
                  vehicles.filter(function(obj) {
                    if (!obj.is_favorite) {
                      return obj;
                    }
                  }).map((value, pos) =>
                  <Card
                      title={value.name}
                      children={
                        <>
                          <p>{value.price}</p>
                          <p>{value.description}</p>
                          <p>{value.year}</p>
                          <p>{value.color}</p>
                        </>    
                      }
                      vehicle={value}
                      onClick={handleFavoriteClick}
                      onClickEdit={handleCardEditClick}
                    />
                  )
              }
            </div>          
          </>
          : null          
        }
        
        <div>
          { isAddOpened ? <AddPage onClick={handleAddClick} vehicle={vehicle1} /> : null }
        </div> 
        <div>
          { isFilterOpened ? <FilterPage onClick={handleFilterClick}/> : null }
        </div>           
      </main>
    </div>
  );
};

export default VehiclesPage;
