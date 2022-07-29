import { Button } from "../../components";

import styles from "./Filter.module.scss"
import { BiArrowBack } from "react-icons/bi";
import Input from "../../components/Input";
import Select from "../../components/Select";

interface IFilter {
    onClick: () => void;
}

const FilterPage = (props: IFilter) => {
    return (
      <div className={styles.Filter}>
        <>
          <button className={styles.Back} onClick={props.onClick}><BiArrowBack /></button>
        </>  
          <div className={styles.Main}>
            <main className={styles.main}>
              <form>
                <Select label="Marca:"/>
                <Select label="Cor:"/>
                <Select label="Ano:"/>
                <div className={styles.Price}>
                  <Input label="Preço mín:"/>
                  <Input label="Preço máx:"/>
                </div>
              </form>
              <Button text="SALVAR" onClick={props.onClick}  />
            </main>
          </div>  
      </div>
    );
  
  }
  
  
  export default FilterPage;
