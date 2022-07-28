import { Button } from "../../components";
import Input from "../../components/Input"
import styles from "./Add.module.scss"
import { BiArrowBack } from "react-icons/bi"

interface IAdd {
  onClick: () => void;
}

const AddPage = (props: IAdd) => {
  return (
    <div className={styles.Add}>
      <button className={styles.Back} onClick={props.onClick}><BiArrowBack /></button>
      <div className={styles.Main}>
        <main className={styles.main}>
          <form>
            <Input label="Nome"/>
            <Input label="Marca"/>
            <Input label="Cor"/>
            <Input label="Ano"/>
            <Input label="Placa"/>
          </form>
          <Button text="SALVAR" onClick={props.onClick}/>
        </main>
      </div>
    </div>
  );

}


export default AddPage;