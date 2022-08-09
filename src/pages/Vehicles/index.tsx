import { useEffect, useState } from "react";
import { getVehicles, updateVehicle } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";
import Vehicle from "../../types/Vehicle";
import AddPage from "../Add";
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import FilterPage from "../../pages/Filter";
import { Console } from "console";


const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);  
  const [allVehicles, setAllVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  const[vehicleToEdit, setVehicleToEdit] = useState<Vehicle>(new Vehicle);

  const[isFilterOpened, setFilterOpened] = useState<boolean>(false);
  const[isAddOpened, setAddOpened] = useState<boolean>(false);

  const handleFilterClick = () => {
    setFilterOpened(!isFilterOpened);
  }

  const handleAddClick = () => {
    setVehicleToEdit(new Vehicle);
    setAddOpened(!isAddOpened);
    fetchVehicles();
  }

  const handleCardEditClick = (vehicle: IVehicle) => {
    setVehicleToEdit(vehicle);
    setAddOpened(!isAddOpened);
    fetchVehicles();
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

  const handleFiltering = (vehicles: Vehicle[]) => {
    setVehicles(vehicles);
    handleFilterClick();
  }

  const fetchVehicles = async () => {
    const payload = await getVehicles();
    setVehicles(payload);
    setAllVehicles(payload);
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
                    onClickDelete={fetchVehicles}
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
                    onClickDelete={fetchVehicles}
                  />
                )
            }
            </div>          
          </>
          : null          
        }
        
        <div>
          { isAddOpened ? <AddPage onClick={handleAddClick} vehicle={vehicleToEdit} /> : null }
        </div> 
        <div>
          { isFilterOpened ? <FilterPage vehicles={allVehicles} onClickBack={handleFilterClick} onClickSave={handleFiltering}/> : null }
        </div>           
      </main>
    </div>
  );
};

export default VehiclesPage;
