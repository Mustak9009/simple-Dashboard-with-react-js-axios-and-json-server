import Axios from 'axios';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DashCharts() {
    let [chatData,setChatData] = React.useState();
    React.useEffect(()=>{
        Axios.get("http://localhost:3005/HomeReChardData").then((resPonse)=>{
            setChatData(resPonse.data);
        })
    },[]);
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={chatData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Revenue"  stroke="rgba(255, 0, 0, 0.598)" activeDot={{ r: 7 }} />
                    <Line type="monotone" dataKey="Sales" stroke="#82ca9d" activeDot={{ r: 6 }}/>
                    <Line type="monotone" dataKey="Cost" stroke="tomato" activeDot={{ r: 5 }}/>
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}