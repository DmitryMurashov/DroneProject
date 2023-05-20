import React from "react";
import {Route} from "react-router-dom";
import mainLayoutUrlPatterns from "./layoutRouting";
import MainLayoutContent from "./layoutComponents/MainLayoutContent";
import './layoutCSS.css'
import Menu from "./layoutComponents/Menu/Menu";
import Footer from "./layoutComponents/Footer/Footer";


class MainLayout extends React.Component {
    get_routes() {
        return mainLayoutUrlPatterns.map(
            (path) => <Route key={path.name} path={path.path} element={<path.view/>}/>
        )
    }

    render() {
        return (
            <>
                {/* MENU */}
                <Menu />
                {/* END MENU*/}

                {/* MAIN CONTENT */}
                <div id='mainContent'>
                    <MainLayoutContent get_routes={() => this.get_routes()}/>
                </div>
                {/* END MAIN CONTENT */}

                {/* FOOTER */}
                <Footer />
                {/* END FOOTER*/}
            </>
        )
    }
}


export default MainLayout
