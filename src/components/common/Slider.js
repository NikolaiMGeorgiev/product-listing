import "../../styles/slider.css";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Slider({ min, max, name }) {
    const [cursorPositionX, setCursorPositionX] = useState(null);
    const [isDragging, setIsDraggin] = useState(false);
    const [sliderValue, setSliderValue] = useState(max);
    const [barFillWidth, setBarFillWidth] = useState("100%");
    const sliderRef = useRef(null);
    const valueRef = useRef(null);
    const hadleStyle = cursorPositionX ? {left: cursorPositionX} : {};

    useLayoutEffect(() => {
        setCursorPositionX(sliderRef.current.getBoundingClientRect().width - 16);
    }, [])

    useEffect(() => {
        if (sliderValue === "" || isDragging) {
            return;
        }
        const timeout = setTimeout(() => {
            let valuePercent = (sliderValue - min) / (max - min);
            const sliderWidth = sliderRef.current.getBoundingClientRect().width - 16;
            if (sliderValue > max) {
                valuePercent = 1;
                setSliderValue(max);
                setCursorPositionX(sliderWidth);
                return;
            } else if (sliderValue < min) {
                valuePercent = 0;
                setSliderValue(min);
                return;
            }
            const newPositionX = Math.ceil(valuePercent * sliderWidth);
            setBarFillWidth(newPositionX);
            setCursorPositionX(newPositionX);
        }, 800)

        return () => {
            clearTimeout(timeout);
        };
    }, [sliderValue])

    const handleDrag = (e) => {
        if (!isDragging) {
            return;
        }

        const sliderWidth = sliderRef.current.getBoundingClientRect().width - 16;
        const sliderPositonX = sliderRef.current.getBoundingClientRect().left;
        const handlePosition = (e.clientX ? e.clientX : e.touches[0].clientX) - sliderPositonX - 8;
        const newPositionX = handlePosition <= 0 ? 
            0 : 
            (handlePosition > sliderWidth ?
                sliderWidth :
                handlePosition
            );
        setCursorPositionX(newPositionX);
        setSliderValue(Math.ceil((newPositionX / sliderWidth) * (max - min)) + min);
        setBarFillWidth(newPositionX);
    }

    const handleValueChange = () => {
        setSliderValue(valueRef.current.value === "" ? 
            "" : 
            Number.parseInt(valueRef.current.value));
    }

    return (
        <div 
            className="slider" 
            onMouseMove={handleDrag} 
            onMouseUp={() => setIsDraggin(false)} 
            onMouseLeave={() => setIsDraggin(false)}
            onTouchMove={handleDrag}
            onTouchEnd={() => setIsDraggin(false)}
        >
            <div className="slider__value-container">
                <span>Selected value:</span>
                <input 
                    type="number" 
                    name={name} 
                    id={`${name}-slider-val`} 
                    value={sliderValue} 
                    onChange={handleValueChange} 
                    ref={valueRef}
                />
            </div>
            <div className="slider__area" ref={sliderRef}>
                <div className="slider__bar">
                    <div className="slider__bar-fill" style={barFillWidth !== null ? {width: barFillWidth} : {width: "100%"}}></div>
                </div>
                <div 
                    className="slider__handle" 
                    onMouseDown={() => setIsDraggin(true)} 
                    onTouchStart={() => setIsDraggin(true)}
                    style={hadleStyle}
                ></div>
            </div>
            <div className="slider__ticks">
                <span className="slider__tick min-tick">{min}</span>
                <span className="slider__tick max-tick">{max}</span>
            </div>
        </div>
    )
}