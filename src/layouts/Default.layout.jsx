import react from "react";

//components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/Navbar/HeroCarousal/HeroCarousal.component";

const DefaultLayout = (props) => {
    return(
        <>
        <Navbar/>
        <HeroCarousal/>
        {props.children}
        </>
    );  
};

export default DefaultLayout;