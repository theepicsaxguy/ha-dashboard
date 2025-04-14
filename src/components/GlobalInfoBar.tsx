import React from 'react';
import { CardBase, SensorCard, WeatherCard } from '@hakit/components';
import { EntityName } from '@hakit/core';
import { motion } from 'framer-motion';

const TIME_ENTITY: EntityName = 'sensor.time';
const DATE_ENTITY: EntityName = 'sensor.date';
const WEATHER_ENTITY: EntityName = 'weather.smhi_home';

const GlobalInfoBar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CardBase
        style={{
          background: 'var(--ha-surface)',
          borderRadius: 'var(--ha-card-border-radius)',
          marginBottom: 'var(--ha-spacing-md)'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: 'var(--ha-spacing-md)',
            gap: 'var(--ha-spacing-md)'
          }}
        >
          <motion.div
            style={{ textAlign: 'center' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <SensorCard
              entity={TIME_ENTITY}
              disableColumns
              icon=""
              style={{
                color: 'var(--ha-on-surface)',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}
            />
            <SensorCard
              entity={DATE_ENTITY}
              disableColumns
              icon=""
              style={{
                color: 'var(--ha-on-surface)',
                opacity: 0.8
              }}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <WeatherCard
              entity={WEATHER_ENTITY}
              style={{
                background: 'var(--ha-surface-elevated)',
                borderRadius: 'var(--ha-card-border-radius)',
                padding: 'var(--ha-spacing-sm)'
              }}
            />
          </motion.div>
        </div>
      </CardBase>
    </motion.div>
  );
};

export default GlobalInfoBar;
