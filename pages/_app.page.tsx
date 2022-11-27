import '@/styles/globals.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import rootReducer from '@/reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ProvidersWrapper from '@/components/providers/ProvidersWrapper';
import ClientOnly from '@/components/commons/ClientOnly';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        console.log(`현재 개발환경은 : ${process.env.NEXT_PUBLIC_REACT_APP_MODE}`);
    }, []);

    return (
        <Provider store={store}>
            <ProvidersWrapper>
                <ClientOnly>
                    <Component {...pageProps} />
                </ClientOnly>
            </ProvidersWrapper>
        </Provider>
    );
}
