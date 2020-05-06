import React from 'react';
import './Layout.css';
import ComponentHolder from '../../containers/ComponentCardHolder/ComponentCardHolder';

const Layout = () => {
    return (
        <div className="Layout">
            <div className="menu">
                Nav
            </div>
            <div className="main">
                <div className="sideBar">
                    <ComponentHolder />
                </div>
                <div className="display">

                </div>
            </div>
        </div>
    );
};

export default Layout;