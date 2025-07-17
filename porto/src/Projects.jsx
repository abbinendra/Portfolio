import React, { useState, useRef } from 'react';
import './projects.css'
import leftArrow from './assets/left.svg';
import rytArrow from './assets/right.svg';
import Card from './slidrcard'
import Data from './slidrdata'

export default function Projects(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const contRef = useRef();

    const handleNext = () => {
        if (currentIndex < Data.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            setCurrentIndex(Data.length - 1);
        }
    };

    const cards = Data.map(item => <Card key={item.id} item={item} />);
    return(
        <div className="projects">
            <div className='prbox'>
                <div className='containr'>
                    <img src={leftArrow} className='angle lang' onClick={handlePrev}/>
                    <div className='slider'>
                        <div
                            className='cont'
                            ref={contRef}
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {cards}
                        </div>
                    </div>
                    <img src={rytArrow} className='angle rang' onClick={handleNext}/>
                </div>
                <span className='prhead'>Projects</span>
            </div>
        </div>
    )
}