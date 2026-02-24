import "../../styles/custom-checkbox.css";

import { useEffect, useRef, useState } from "react";
import MusicIcon from "../icons/MusicIcon";

export default function CustomCheckbox({ name, value, labelText, initialIsChecked = false}) {
    const [isChecked, setIsChecked] = useState(initialIsChecked);
    const checkboxRef = useRef(null);

    useEffect(() => {
        if (checkboxRef.current) {
            console.log(checkboxRef.current);
            console.log(isChecked);
            checkboxRef.current.checked = isChecked;
            console.log(checkboxRef.current.checked);
        }
    }, [isChecked])

    const handleClick = () => {
        setIsChecked(isChecked => !isChecked);
    }

    return (
        <div className={ isChecked ? "custom-checkbox custom-checkbox checked" : "custom-checkbox"} >
            <input type="checkbox" ref={checkboxRef} name={name} value={value} checked={isChecked} onChange={e => console.log(e.target)} />
            <div className="custom-checkbox__icon-container" onClick={handleClick} >
                <MusicIcon />
            </div>
            <label htmlFor={name}>{labelText}</label>
        </div>
    )
}