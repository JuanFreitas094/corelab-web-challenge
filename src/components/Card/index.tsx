import React, { Children, ReactNode, useState } from "react";
import styles from "./Card.module.scss";
import { AiOutlineHeart } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'
import { IVehicle } from "../../types/Vehicle";
import { AiFillHeart } from 'react-icons/ai'
import { deleteVehicle } from "../../lib/api";

interface ICard {
  title: string;
  children: ReactNode;
  vehicle: IVehicle;
  onClick: (vehicle: IVehicle) => void;
  onClickEdit: (vehicle: IVehicle) => void;
  onClickDelete: () => void;
}

const Card = (props: ICard) => {  
  const[isFavorited, setFavorite] = useState<boolean>(props.vehicle.is_favorite);

  const handleClick = () => {
    props.onClick(props.vehicle);
  }

  const handleEditClick =() => {
    props.onClickEdit(props.vehicle)
  }

  const handleDeleteButtonClick = () => {
    deleteVehicle(props.vehicle.id);
    props.onClickDelete();
  }

  return (
    <div className={styles.Card}>
      <div className={styles.Icons}>
        <button onClick={handleClick}>
          { isFavorited ? <AiFillHeart/> : <AiOutlineHeart/> }
        </button>
        <button onClick={handleDeleteButtonClick}><VscChromeClose /></button>
        <button onClick={handleEditClick}><FiEdit /></button>
      </div>
      <h2>{props.title}</h2>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
export default Card;
