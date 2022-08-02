import React, { Children, ReactNode, useState } from "react";
import styles from "./Card.module.scss";
import { AiOutlineHeart } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'
import { IVehicle } from "../../types/Vehicle";
import { AiFillHeart } from 'react-icons/ai'

interface ICard {
  title: string;
  children: ReactNode;
  vehicle: IVehicle;
  onClick: (vehicle: IVehicle) => void;
}

const Card = (props: ICard) => {  
  const[isFavorited, setFavorite] = useState<boolean>(props.vehicle.isFavorite);

  const handleClick = () => {
    props.onClick(props.vehicle);
  }

  return (
    <div className={styles.Card}>
      <div className={styles.Icons}>
        <button onClick={handleClick}>
          { isFavorited ? <AiFillHeart/> : <AiOutlineHeart/> }
        </button>
        <button><VscChromeClose /></button>
        <button><FiEdit /></button>
      </div>
      <h2>{props.title}</h2>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
export default Card;
