import Navbar from './navbar'
import Footer from './footer'
import ScrollTopBtn from './scrollTopBtn/ScrollTopBtn'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <ScrollTopBtn />
            <Footer />
        </>
    )
}
