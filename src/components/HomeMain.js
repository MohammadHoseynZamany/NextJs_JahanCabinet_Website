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
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"/>
        </Provider>
    )
}