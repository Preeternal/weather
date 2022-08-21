import axios from 'axios';
import Toast from 'react-native-toast-message';
import { config } from '@config';

export const configureAxios = () => {
    axios.defaults.baseURL = config.apiUrl;

    axios.defaults.timeout = 30000;
    axios.defaults.headers.common.Accept = 'application/json';
    axios.defaults.headers.common['Accept-Language'] = 'en';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.params = { appid: config.appId };

    axios.interceptors.response.use(
        async function (response) {
            if (response?.status < 400) {
                console.log('response', response?.status, response);
            }

            return response;
        },
        function (error) {
            if (error.response) {
                if (
                    error.response.status === 401 ||
                    error.response.status === 403 ||
                    error.response.status === 404 ||
                    error.response.status === 500
                ) {
                    Toast.show({
                        type: 'error',
                        text1: `error ${error.response.status}`,
                        text2: `${error?.message ? error?.message : ''}\n${
                            error?.response?.data?.message || ''
                        }`,
                        position: 'top',
                    });
                }
                console.log(error.response);
                console.log(
                    error?.message,
                    error?.response?.data?.message,
                    error?.response?.data?.errors,
                );
            } else if (error?.request) {
                console.log('error request', error?.request);
                Toast.show({
                    type: 'error',
                    text1: 'error request',
                    text2: 'Timeout server error',
                    position: 'top',
                });
            } else {
                console.log('Error', error?.message);
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: error?.message
                        ? error?.message
                        : 'Something went wrong, please try again later',
                    position: 'top',
                });
            }
            return error;
        },
    );
};
