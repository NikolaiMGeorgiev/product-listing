import "../../styles/popup.css";

export default function Popup({ message, setShowPopup, isPopupBusy }) {
    setTimeout(() => {
        setShowPopup(false);
        isPopupBusy.current = false;
    }, 2000)

    return ( 
        <div className="popup">
            <p>{message}</p>
        </div>
    )
    
} 