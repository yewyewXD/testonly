import Layout from '../components/layout'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import '../styles/globals.css'
import '../styles/flaticon.css'
import '../styles/font-awesome-all.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
