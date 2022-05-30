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

    /* const [theme, setTheme] = useState("dark") */

    /* const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
        console.log(theme)
    }
    */
    /* function onChange(checked) {
        console.log(`switch to ${checked}`);
    }
 */
    return (
            <div className="page-container"/*  id={theme} */>
                <div className="content-wrap">
                    <Navigation>
                        <div className="form-check form-switch" style={{ marginTop: 5 }}>
                            <input className="form-check-input" type="checkbox" role="switch" /* onClick={toggleTheme} */ />
                        </div>
                    </Navigation>
                    {children}
                </div>
                <Footer />
            </div>
        
    )
}

export default Layout;        {/* <ThemeContext.Provider value={{ theme, toggleTheme }}> * </ThemeContext.Provider> */}