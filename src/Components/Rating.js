import React from 'react';
import Slider from 'react-rangeslider';

const ratingFilter = (props) => {
    const sliderLabels = {
        0: '0',
        5: '5',
        10: '10'
    }
    return (
        <div className="filter">
            <h3>Rating</h3>
            <div className='slider orientation-reversed'>
                <div className='slider-group'>
                    <div className='slider-horizontal'>
                        {/* Range Slider being called */}
                        <Slider
                            min={0}
                            max={10}
                            step={0.5}
                            value={props.currentValue}
                            labels={sliderLabels}
                            onChange={props.change} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ratingFilter;