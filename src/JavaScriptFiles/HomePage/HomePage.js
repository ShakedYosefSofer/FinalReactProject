import { useLocation } from "react-router-dom";
import PageTitle from "../PageTitle";
import InfoInputComp from "./InfoInputComp";
import { useEffect, useState } from "react";

const HomePage = ({client}) => {
    return ( 
        <div className="home-page-content">
            
            <PageTitle className="home-page-title" />
            {client && <InfoInputComp client ={client} />}
        </div>
     );
}
 
export default HomePage;