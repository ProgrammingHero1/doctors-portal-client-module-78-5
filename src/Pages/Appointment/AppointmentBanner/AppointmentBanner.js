import React from 'react';
import chair from '../../../assets/images/chair.png';

const AppointmentBanner = () => {
    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;