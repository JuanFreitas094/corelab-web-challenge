import React, { ReactNode } from "react";
import styles from "./Card.module.scss";
import { AiOutlineHeart } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'

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
};

export default Card;
