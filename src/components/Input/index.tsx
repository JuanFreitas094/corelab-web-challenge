import { info } from 'console';
import { useState } from 'react';
import { isPropertyDeclaration } from 'typescript';
import styles from './Input.module.scss';

function Input ({ label, onChange, inputText, ...props }: { label: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, inputText: string}) {
    const [inputTextState, setInputText] = useState<string>(inputText);
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.currentTarget.value);
        onChange(event);
    }

    return (
        <div className={styles.Input}>
            <p className={styles.Label}>{label}</p>
            <input className={styles.InputText} placeholder={label} onChange={handleOnChange} value={inputTextState} {...props}/>
        </div>
    );
};

export default Input;