import { useState } from "react";
import style from "./style.module.css"

type Props = {
    id: string;
    label: string;
    placeholder: string;
    required: boolean;
    value?: string | undefined;
}

export default function TextAreaLabel({label, placeholder, id, required, value}: Props){
    const [self, setSelf] = useState<string | undefined>(value || "")

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSelf(e.target.value);
    }

    return(
        <div className={style.container}>
            <label htmlFor={id}>{label}</label>
		    <textarea placeholder={placeholder} name={id} id={id} value={self} onChange={handleChange} required={required} />
        </div>
    )
}