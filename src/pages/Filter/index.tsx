import { Button } from "../../components";

import styles from "./Filter.module.scss"
import { TbAdjustmentsHorizontal } from "react-icons/tb"
import Input from "../../components/Input";
import Select from "../../components/Select";

interface IFilter {
    onClick: () => void;
}

const Filter = (props: IFilter) => {
    return (
      <div className={styles.Add}>
        <>
          <button className={styles.Filter} onClick={props.onClick}>< TbAdjustmentsHorizontal /></button>
        </>  
          <div className={styles.Main}>
            <main className={styles.main}>
              <select>
                <Select label="Marca"/>
                <Select label="Cor"/>
                <Select label="Ano"/>
              </select>
              <form>
                <Input label="Preço mín"/>
                <Input label="Preço máx"/>
              </form>
              <Button text="SALVAR" onClick={props.onClick}/>
            </main>
          </div>  
      </div>
    );
  
  }
  
  
  export default Filter;
