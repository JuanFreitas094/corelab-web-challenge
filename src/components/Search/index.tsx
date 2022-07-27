import styles from "./Search.module.scss";
import { GrSearch } from 'react-icons/gr';
import { TbAdjustmentsHorizontal } from  'react-icons/tb'

interface ISearch {
  placeholder: string;
  value: string;
  onChange: () => void;
}

const Search = (props: ISearch) => {
  return (
    <div className={styles.Search}>
      <div className={styles.Bar}>
        <div><GrSearch/></div>
          <input type="text" placeholder={props.placeholder} value={props.value}/>
        </div>
      <button className={styles.Filter}><TbAdjustmentsHorizontal/></button>  
    </div>
  );
};

export default Search;
