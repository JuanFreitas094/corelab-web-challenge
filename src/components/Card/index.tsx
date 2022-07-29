import React, { ReactNode, useState } from "react";
import styles from "./Card.module.scss";
import { AiOutlineHeart } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'
import { IVehicle } from "../../types/Vehicle";

interface ICard {
  title: string;
  children: ReactNode;
}

const Card = (props: ICard) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Icons}>
        <div><AiOutlineHeart /></div>
        <div><VscChromeClose /></div>
        <div><FiEdit /></div>
      </div>
      <h2>{props.title}</h2>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
    const VerifyFav = () => {
      const [vehicles, setVehicles] = useState<IVehicle[]>([]);
      const [favorite, setFavorite] = useState<boolean>(false);

      const handleVerifyFav = () => {
        // setFavorite(!isFavorite);
      }
        <div className={styles.Favorite}>
          <button className={styles.Filter} onClick={handleVerifyFav}><AiOutlineHeart/></button>
        </div>
    };
  };
export default Card;
