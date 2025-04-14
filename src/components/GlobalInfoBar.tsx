import React from 'react';
// Correct Card import
import { CardBase, SensorCard, WeatherCard } from '@hakit/components';
import { EntityName } from '@hakit/core';

// --- Configuration ---
const TIME_ENTITY: EntityName = 'sensor.time';
const DATE_ENTITY: EntityName = 'sensor.date';
const WEATHER_ENTITY: EntityName = 'weather.smhi_home'; // Ensure this is a valid weather entity
// --- End Configuration ---

// Use React.FC for typing
const GlobalInfoBar: React.FC = () => {
    return (
        <cardbase className="global-info-bar low-priority" disableScale>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', padding: '0.5rem 1rem', gap: '1rem' }}>
                 <div style={{ textAlign: 'center' }}>
                     {/* Ensure SensorCard props are correct */}
                     <SensorCard entity={TIME_ENTITY} disableColumns icon="" disableIcon/>
                     <SensorCard entity={DATE_ENTITY} disableColumns icon="" disableIcon/>
                 </div>
                 {/* Ensure WeatherCard only needs entity prop */}
                <WeatherCard entity={WEATHER_ENTITY} />
            </div>
        </Card>
    );
};

export default GlobalInfoBar;