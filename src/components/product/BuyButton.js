import { useState } from "react"
import Popup from "./Popup";

export default function BuyButton({ item, isPopupBusy }) {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        if (isPopupBusy.current) {
            setTimeout(() => {
                handleClick();
            }, 1000);
            return;
        }
        isPopupBusy.current = true;
        setShowPopup(true);
    }

    return (
        <>
            {showPopup && 
                <Popup 
                    message={`"${item.name}" has been added to your cart.`} 
                    setShowPopup={setShowPopup} 
                    isPopupBusy={isPopupBusy}
                />}
            <div className="btn-container">
                <button className="buy-btn" type="button" onClick={handleClick}>Add to cart</button>
            </div>
        </>
    )
}