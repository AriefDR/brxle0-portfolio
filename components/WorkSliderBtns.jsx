"use client";

import  { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'; 


const WorkSliderBtns = ({ containerStyle, btnStyles, iconStyles }) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyle}>
            <button className={btnStyles}>
                <PiCaretLeftBold className={iconStyles} onClick={() => swiper.slidePrev()}/>
            </button>
            <button className={btnStyles}>
                <PiCaretRightBold className={iconStyles} onClick={() => swiper.slideNext()}/>
            </button>
        </div>
    )
  
}

export default WorkSliderBtns;