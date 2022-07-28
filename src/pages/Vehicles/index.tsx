import { useEffect, useState } from "react";
import { getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";
import AddPage from "../Add";
import IFilter from "../../pages/Filter";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  const[isFilterOpened, setFilterOpened] = useState<boolean>(false);
  const[isAddOpened, setAddOpened] = useState<boolean>(false);


  const handleFilterClick = () => {
    setFilterOpened(!isFilterOpened);
  }

  const handleAddClick = () => {
    setAddOpened(!isAddOpened);
  }

  var teste: IVehicle = {
    id: 1,
    plate: "GFM0495",
    isFavorite: false,
    createdAt: new Date(2022, 10, 2, 2, 20, 1, 10),
    name: "TESTE",
    price: 100,
    description: "OLA",
    year: 2300,
    color: "VERDÃO" 
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
            <Search placeholder="Buscar" value={search} onChange={() => {}} />
            <Button text="ADICIONAR" onClick={handleAddClick} />  
            <h2>Meus Anúncios</h2>
            <div className={styles.Cards}>
            <Card
              title={teste.name}
              children={
                <>
                  <p>{teste.price}</p>
                  <p>{teste.description}</p>
                  <p>{teste.year}</p>
                  <p>{teste.color}</p>
                </>              
              }
              />   

            {/* {
              vehicles.map((value,pos) =>
                <Card
                  title={value.name}
                  children={
                    [
                      value.price,
                      value.description,
                      value.year,
                      value.color
                    ]
                  }
                />          
              )
            } */}
            <Card title="Sandero Stepway">
              <p>Price: 22000</p>
              <p>Description: Carro usado por 2 anos...</p>
              <p>Year: 2018</p>
            </Card>
            </div>          
          </>
          : null          
        }
        
        <div>
          { isAddOpened ? <AddPage onClick={handleAddClick}/> : null }
        </div>            
      </main>
    </div>
  );
};

export default VehiclesPage;

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  const[isFilterOpened, setFilterOpened] = useState<boolean>(false);
  const[isAddOpened, setAddOpened] = useState<boolean>(false);


  const handleFilterClick = () => {
    setFilterOpened(!isFilterOpened);
  }

  const handleAddClick = () => {
    setAddOpened(!isAddOpened);
  }
