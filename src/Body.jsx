import VoiceBody from './VoiceBody.jsx'
import React, { useState, useEffect } from 'react';

function Body(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const [data2, setData2] = useState(null);
    const [loading2, setLoading2] = useState(true);

    const controller = new AbortController();
    const signal = controller.signal;

    const rain = [
        { city: 'SFO', val: 1.29 },
        { city: 'OAK', val: 3.9 },
        { city: 'LAX', val: 183.91 }
    ];

    let temp = [];

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://api.weather.gov/gridpoints/LWX/96,70/forecast');
                const result = await response.json();
                // console.log(result);
                temp = [];
                if (result && result.properties.periods) {
                    let periods = result.properties.periods;
                    for (let i = 0; i < periods.length; ++i) {
                        temp.push({
                            number: periods[i].number,
                            name: periods[i].name,
                            temperature: periods[i].temperature,
                            shortForecast: periods[i].shortForecast,
                        });
                    }
                    console.log(temp);
                    setData(temp);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleClickLoad2 = async () => {
        try {
            // controller.abort('test');
            const response = await fetch('https://api.weather.gov/gridpoints/LWX/96,70/forecast', { signal });
            const result = await response.json();
            let temp2 = [];
            if (result && result.properties.periods) {
                let periods = result.properties.periods;
                for (let i = 0; i < periods.length; ++i) {
                    temp2.push({
                        number: periods[i].number,
                        name: periods[i].name,
                        temperature: periods[i].temperature,
                        shortForecast: periods[i].shortForecast,
                    });
                }
                console.log(temp2);
                setData2(temp2);
            }
        } catch (err) {
            console.error("Failed fetch 2: ", err);
        } finally {
            setLoading2(false);
        }
    }


    return (
        <div>
            <h1>This is the body!</h1>
            <ul>
                {rain.map(r => (
                    <li key={r.city}><span>{r.city}</span> is <span>{r.val}</span></li>
                ))
                }
            </ul>
            {
                loading ? (
                    <h1 color="red">loading...</h1>
                ) : (
                    <>
                        <div>hi</div>
                        <div>
                            {
                                data.map(t => (
                                    <span key={t.number}>{t.temperature} - </span>
                                ))
                            }
                        </div>
                    </>
                )
            }


            <button onClick={() => handleClickLoad2()}>load 2</button>
            {
                loading2 ? <h1 color="red">loading 2...</h1> : (
                    <>
                        <div><b>load successful 2</b></div>
                        <div>
                            {
                                data2.map(t => (
                                    <span key={t.number}>{t.temperature} - </span>
                                ))
                            }
                        </div>
                    </>
                )
            }

            {
                loading2 ? <h1> test 1</h1> : <h1> test 2</h1>
            }
            <VoiceBody />
        </div>
    );
}

export default Body;