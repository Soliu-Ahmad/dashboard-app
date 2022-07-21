import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>
                    Admin Profile
                </title>
            </Head>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;