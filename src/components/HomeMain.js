import Head from 'next/head'
import Header from './Header'
import { Provider } from 'react-redux'
import store from '@/features/store'


export default function HomeMain({children}) {
    const MainStyle = "text-sm sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl px-6 py-5"
    return (
        <div className={MainStyle}>
            <Provider store={store}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <Header />
                {children}
            </Provider>
        </div>
    )
}