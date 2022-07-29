import styles from './Input.module.scss';

function Input ({ label, ...props }: { label: string }) {
    return (
        <div className={styles.Input}>
            <p className={styles.Label}>{label}</p>
            <input className={styles.InputText} placeholder={label} {...props}/>
        </div>
    );
};

export default Input;