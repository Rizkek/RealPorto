import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-gray-900 text-center text-gray-500 py-8 border-t border-gray-800">
            <p>Copyright © {new Date().getFullYear()} Rizqy. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
