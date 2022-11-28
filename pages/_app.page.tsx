import '@/styles/globals.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import ProvidersWrapper from '@/components/providers/ProvidersWrapper';
import ClientOnly from '@/components/commons/ClientOnly';
import { wrapper } from '@/utils/store';
import { passStoreToInterceptor } from '@/utils/apiController';

const App = ({ Component, ...rest }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(rest);

    useEffect(() => {
        passStoreToInterceptor(store);
        console.log(`현재 개발환경은 : ${process.env.NEXT_PUBLIC_REACT_APP_MODE}`);
    }, []);

    return (
        <ClientOnly>
            <ProvidersWrapper>
                <Component {...props.pageProps} />
            </ProvidersWrapper>
        </ClientOnly>
    );
};

export default wrapper.withRedux(App);
