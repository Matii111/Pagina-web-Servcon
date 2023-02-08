import React from "react";

class Navbar extends React.Component {
    render() {
        return(
            <div className="Navbar">
                <ul className="NavbarList">
                    <a href="#placeholder1"><li>placeholder1</li></a>
                    <a href="#placeholder2"><li>placeholder2</li></a>
                </ul>
            </div>
        );
    }
}

export default Navbar;