import React from 'react';
import './Layout.css';
import Input from '../../components/UI/inputFields/inputFields';

const Layout = () => {
    return (
        <div className="Layout">
            <div className="menu">
                Nav
            </div>
            <div className="main">
                <div className="sideBar">
                    <Input label="First Name" value="" />
                </div>
                <div className="display">
                    display body
                </div>
            </div>
        </div>
    );
};

export default Layout;