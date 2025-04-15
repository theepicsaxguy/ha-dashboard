import { CardBase, Row, TimeCard, WeatherCard } from '@hakit/components';
import { EntityName } from '@hakit/core';

const WEATHER_ENTITY: EntityName = 'weather.smhi_home';

const GlobalInfoBar = () => {
  return (
    <CardBase>
      <Row
        alignItems="center"
        justifyContent="space-between"
        gap="md"
        wrap="wrap"
      >
        <TimeCard />
        <WeatherCard entity={WEATHER_ENTITY} />
      </Row>
    </CardBase>
  );
};

export default GlobalInfoBar;
