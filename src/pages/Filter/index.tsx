import { Button } from "../../components";

import styles from "./Filter.module.scss"
import { BiArrowBack } from "react-icons/bi";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { useCallback, useState } from "react";

interface IFilter {
    onClick: () => void;
}

const FilterPage = (props: IFilter) => {
  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')
  
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
                  <Input label="Preço mín:" onChange={(event: React.FormEvent<HTMLInputElement>) => setPriceMin(event.currentTarget.value)} inputText=''/>
                  <Input label="Preço máx:" onChange={(event: React.FormEvent<HTMLInputElement>) => setPriceMax(event.currentTarget.value)} inputText=''/>
                </div>
              </form>
              <Button text="SALVAR" onClick={props.onClick}  />
            </main>
          </div>  
      </div>
    );
  
  }
  
  
  export default FilterPage;
