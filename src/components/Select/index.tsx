import styles from "./Select.module.scss"

function Select ({ label, ...props }: { label: string }) {
    return (
        <div className={styles.Select}>
            <p className={styles.Label}>{label}</p>
            <input className={styles.InputText} placeholder={label} {...props}/>
        </div>
    );
};

export default Select;