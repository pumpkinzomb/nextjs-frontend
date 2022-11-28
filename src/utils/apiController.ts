import axios from 'axios';
import uniqId from 'uniqid';
import notification from '@/reducers/modules/notification_v2';

const BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ENDPOINT || '';

const axiosInterceptor = axios.create({
    baseURL: BASE_URL,
    timeout: 60000,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
});

export const passStoreToInterceptor = (store: any) => {
    axiosInterceptor.interceptors.response.use(
        function (response) {
            /*
                http status가 200인 경우
            */
            if (response.config.headers?.usetoast) {
                const tempId = uniqId();
                store.dispatch(
                    notification.actions.setNotification({
                        id: tempId,
                        contents:
                            response.config.headers?.usetoast === 'default'
                                ? `Your server request(${response.config.method}) was succeed.`
                                : JSON.stringify(response.config.headers.usetoast),
                        type: 'success',
                    }),
                );
            }
            return response;
        },

        function (error) {
            /*
                http status가 200이 아닌 경우
            */
            const tempId = uniqId();
            store.dispatch(
                notification.actions.setNotification({
                    id: tempId,
                    contents: error?.message || '-',
                    type: 'error',
                }),
            );
            return Promise.reject(error);
        },
    );
};

export default axiosInterceptor;

export const setAxiosHeaders = (headers: any) => {
    axiosInterceptor.interceptors.request.use(
        function (config) {
            config.headers = {
                ...config.headers,
                ...headers,
            };
            return config;
        },
        function (error) {
            return Promise.reject(error);
        },
    );
};

export const resetAxiosHeaders = () => {
    axiosInterceptor.interceptors.request.use(
        function (config) {
            config.headers = {};
            return config;
        },
        function (error) {
            return Promise.reject(error);
        },
    );
};
