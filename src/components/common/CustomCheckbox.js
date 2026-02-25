import "../../styles/custom-checkbox.css";

import MusicIcon from "../icons/MusicIcon";

export default function CustomCheckbox({ name, value, labelText, isChecked, setIsChecked}) {
    return (
        <div className={ isChecked ? "custom-checkbox custom-checkbox checked" : "custom-checkbox"} >
            <input 
                type="checkbox" 
                name={name} 
                value={value} 
                checked={isChecked} 
                onChange={f => f} 
            />
            <div 
                className="custom-checkbox__icon-container" 
                onClick={() => setIsChecked(!isChecked, value)} 
            >
                <MusicIcon />
            </div>
            <label htmlFor={name}>{labelText}</label>
        </div>
    )
}