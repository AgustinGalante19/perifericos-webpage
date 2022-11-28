import { createContext, useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import NProgress from "nprogress";
import { useRouter } from 'next/router';


export const ThemeContext = createContext(null);

const Layout = ({ children }) => {
    const router = useRouter();
    useEffect(() => {

        const handleRouteChange = () => {
            NProgress.start();
        }
        //loader things
        router.events.on("routeChangeStart", handleRouteChange);
        router.events.on("routeChangeComplete", () => NProgress.done());
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        }
    }, [router]);
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Navigation>
                    <div className="form-check form-switch" style={{ marginTop: 5 }}>
                        <input className="form-check-input" type="checkbox" role="switch" />
                    </div>
                </Navigation>
                {children}
            </div>
            <Footer />
        </div>

    )
}

export default Layout;