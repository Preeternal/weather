import axios from 'axios';

type TDailyWeatherParams = {
    dt: number;
    lat?: number;
    lon?: number;
};

export const fetchDailyWeather = async (params: TDailyWeatherParams) => {
    const response = await axios('/timemachine', {
        params: {
            lat: 51.507359, // London lat
            lon: -0.136439, // London lon
            ...params,
        },
    });

    console.log('DailyWeather response', response);
    return response;
};
