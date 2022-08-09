import styles from "./Select.module.scss";
import Select from 'react-select'

function Dropdown ({ label, options, onChange, ...props }: { label: string, options: string[], onChange: (value: string) => void }) {
    const handleOnChange = (value: any) => {
        onChange(value.label);
    }
    
    return (
        <div className={styles.Select}>
            <p className={styles.Label}>{label}</p>
            <Select className={styles.SelectText} placeholder="" options={options} onChange={handleOnChange} {...props}/>
        </div>
    );
};

export default Dropdown;