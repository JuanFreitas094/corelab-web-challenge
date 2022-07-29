import styles from "./Search.module.scss";
import { GrSearch } from 'react-icons/gr';

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
    </div>
  );
};

export default Search;
