import React, { useState } from 'react';
//Add -> css
import '../../../Style/Dashboard.css';
//import component 
import HomeCards from './HomeCards';
//Import axios for fetch data from -> api
import Axios from 'axios';
//Import Home page Charts -> from recharts
import DashCharts from './DashCharts';
function Home() {
    let [cardsData, setCardData] = useState([]);
    React.useEffect(() => {
        Axios.get("http://localhost:3005/DashboardHomePageCards").then((response) => {
            setCardData(response.data);
        })
    }, []);

    return (
        <>
            <div className="DashBoard_home_element">
                <div className="home_cards">
                    {cardsData.map((data, index) => {
                        return (
                            <HomeCards cardsData={data} key={data.id} />
                        )
                    })}
                </div>
            </div>
            <div className="chartForDashBoard">
                <DashCharts />
            </div>
        </>
    )
}
export default Home;