import React, { useEffect } from 'react';
import { fetchDailyWeather } from '@services/weatherService';

export const Daily = () => {
    useEffect(() => {
        (async () => {
            await fetchDailyWeather({ dt: new Date().valueOf() });
        })();
    }, []);
    return <></>;
};
