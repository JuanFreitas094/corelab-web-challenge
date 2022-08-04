import styles from './Input.module.scss';

function Input ({ label, onChange, inputText, ...props }: { label: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, inputText?: string}) {
    return (
        <div className={styles.Input}>
            <p className={styles.Label}>{label}</p>
            <input className={styles.InputText} placeholder={label} onChange={onChange} {...props}>{inputText}</input>
        </div>
    );
};

export default Input;