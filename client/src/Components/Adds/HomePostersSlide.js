import "./HomePostersSlide.css";

import React, { useState, useEffect } from "react";
import SliderData from "./SliderData";

const HomePostersSlide = () => {
    const [currentSlide, SetCurrentSlide] = useState(0);
    const slideLenght = SliderData.length;
    const autoscroll = true;
    let slideInterval;
    let intervalTime = 5000;

    useEffect(() => {
        SetCurrentSlide(0);
    }, []);

    const nextslide = () =>
        SetCurrentSlide(
            currentSlide === slideLenght - 1 ? 0 : currentSlide + 1
        );

    const auto = () => {
        slideInterval = setInterval(nextslide, intervalTime);
    };

    useEffect(() => {
        if (autoscroll) {
            auto();
        }

        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div id="homepostersslide">
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={
                            index === currentSlide ? "current slide" : "slide"
                        }
                        key={index}
                    >
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="poster" />
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const HomePostersSlide2 = () => {
    const [currentSlide, SetCurrentSlide] = useState(0);
    const slideLenght = SliderData.length;
    const autoscroll = true;
    let slideInterval;
    let intervalTime = 5000;

    useEffect(() => {
        SetCurrentSlide(0);
    }, []);

    const nextslide = () =>
        SetCurrentSlide(
            currentSlide === slideLenght - 1 ? 0 : currentSlide + 1
        );

    const auto = () => {
        slideInterval = setInterval(nextslide, intervalTime);
    };

    useEffect(() => {
        if (autoscroll) {
            auto();
        }

        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div id="homepostersslide">
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={
                            index === currentSlide ? "current slide" : "slide"
                        }
                        key={index}
                    >
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="poster" />
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export { HomePostersSlide, HomePostersSlide2 };
