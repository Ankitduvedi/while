import React from "react";

function Footer() {
    
    const year = new Date().getFullYear();
    
    return <footer>
    <p>
        copyright © Ankit duvedi {year}
    </p>
    </footer>
} 

export default Footer;