import { Button } from "../../components";

import styles from "./Filter.module.scss"
import { BiArrowBack } from "react-icons/bi";
import Input from "../../components/Input";
import Dropdown from "../../components/Select";
import { useEffect, useState } from "react";

import Vehicle from "../../types/Vehicle"

interface IFilter {
    onClickBack: () => void;
    onClickSave: (vehicles: Vehicle[]) => void;
    vehicles: Vehicle[];
}

const FilterPage = (props: IFilter) => {
  const [brandList, setBrandList] = useState<string[]>([]);
  const [colorList, setColorList] = useState<string[]>([]);
  const [yearList, setYearList] = useState<string[]>([]);

  const [brandSelected, setBrandSelected] = useState<string>('');
  const [colorSelected, setColorSelected] = useState<string>('');
  const [yearSelected, setYearSelected] = useState<string>('');
  const [priceMin, setPriceMin] = useState<number>();
  const [priceMax, setPriceMax] = useState<number>();

  const filterProperty = ( source: any, property: string, value: any ) => source.filter(function(item: any) {return (item[property] === value)} );
  const filterRange = (source: any, property: string, range1: any, range2: any) => source.filter(function(item: any) {return (range1 < item[property] && item[property] < range2)} );

  const handleFilterClick = () => {
    let filtered = props.vehicles;
    if (brandSelected) {
      filtered = filterProperty(filtered, 'brand', brandSelected);   
    }
    
    if (colorSelected) {
      filtered = filterProperty(filtered, 'color', colorSelected);
    }

    if (yearSelected) {
      filtered = filterProperty(filtered, 'year', parseInt(yearSelected));
    }
    
    if (priceMin && priceMax) {
      filtered = filterRange(filtered, 'price', priceMin, priceMax);
    } else if (priceMin) {
      filtered = filterRange(filtered, 'price', priceMin, 1000000000);
    } else if (priceMax) {
      filtered = filterRange(filtered, 'price', 0, priceMax);
    }
    
    props.onClickSave(filtered);
  }

  function getAllDistinct(field: string){
    var lookup: any = {};
    var items = props.vehicles;
    var result = [];
    var selectOption: any = {};

    for (var item, i = 0; item = items[i++];) {
      var prop = item[field as keyof Vehicle]?.toString();

      if (!prop) continue;

      if (!(prop in lookup)) {
        lookup[prop] = 1;
        selectOption = { value: prop.toLocaleLowerCase, label: prop };
        result.push(selectOption);
      }
    }
    return result;
  }

  useEffect(() => {    
    setBrandList(getAllDistinct("brand"));
    setColorList(getAllDistinct("color"));
    setYearList(getAllDistinct("year"));
  }, []);

  return (
    <div className={styles.Filter}>
      <>
        <button className={styles.Back} onClick={props.onClickBack}><BiArrowBack /></button>
      </>  
        <div className={styles.Main}>
          <main className={styles.main}>
            <form>
              <Dropdown label="Marca:" options={brandList} onChange={(value: string) => setBrandSelected(value)}/>
              <Dropdown label="Cor:" options={colorList} onChange={(value: string) => setColorSelected(value)}/>
              <Dropdown label="Ano:" options={yearList} onChange={(value: string) => setYearSelected(value)}/>
              <div className={styles.Price}>
                <Input label="Preço mín:" onChange={(event: React.FormEvent<HTMLInputElement>) => setPriceMin(parseFloat(event.currentTarget.value))} inputText=''/>
                <Input label="Preço máx:" onChange={(event: React.FormEvent<HTMLInputElement>) => setPriceMax(parseFloat(event.currentTarget.value))} inputText=''/>
              </div>
            </form>
            <Button text="SALVAR" onClick={handleFilterClick}  />
          </main>
        </div>  
    </div>
  );

}
  
export default FilterPage;
