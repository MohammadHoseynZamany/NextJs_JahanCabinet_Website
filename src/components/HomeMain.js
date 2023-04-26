import Head from 'next/head'
import Script from 'next/script'
import Header from './Header'
import { Provider } from 'react-redux'
import store from '@/features/store'


export default function HomeMain({children}) {
    return (
        <Provider store={store}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            {children}
        </Provider>
    )
}