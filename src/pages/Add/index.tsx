import { Button } from "../../components";
import Input from "../../components/Input"
import styles from "./Add.module.scss"
import { BiArrowBack } from "react-icons/bi"
import { useState } from "react";
import { Vehicle } from "../../types/Vehicle";
import { addVehicle, updateVehicle } from "../../lib/api";

interface IAdd {
  onClick: () => void;
  vehicle: Vehicle;
}

const AddPage = (props: IAdd) => {
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [color, setColor] = useState('')
  const [year, setYear] = useState('')
  const [plate, setPlate] = useState('')
  
  const handleAddButtonClick = () => {
    const vehicle: Vehicle = {
      name: name,
      plate: plate,
      year: parseInt(year, 10),
      color: color,
      is_favorite: false,
      description: props.vehicle.description,
      created_at: props.vehicle.created_at,
      id: props.vehicle.id,
      price: props.vehicle.price
    }

    if (props.vehicle.name) {
      updateVehicle(vehicle);
    } else {
      addVehicle(vehicle);
    }
    props.onClick();
  }
  
  return (
    <div className={styles.Add}>
      <>
        <button className={styles.Back} onClick={props.onClick}><BiArrowBack /></button>
      </>  
        <div className={styles.Main}>
          <main className={styles.main}>
            <form>
              <Input 
                label="Nome:" 
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.currentTarget.value)}
                inputText = {props.vehicle.name} />
              <Input 
                label="Marca:" 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBrand(event.currentTarget.value)}
                inputText = {props.vehicle.name}/>
              <Input 
                label="Cor:" 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setColor(event.currentTarget.value)}
                inputText = {props.vehicle.color}/>
              <Input 
                label="Ano:" 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setYear(event.currentTarget.value)}
                inputText = {props.vehicle.year.toString()}/>
              <Input 
                label="Placa:" 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPlate(event.currentTarget.value)}
                inputText = {props.vehicle.plate}/>
            </form>
            <Button text="SALVAR" onClick={handleAddButtonClick}/>
          </main>
        </div>  
    </div>
  );

}

export default AddPage;