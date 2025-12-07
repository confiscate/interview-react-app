import VoiceBody from './VoiceBody.jsx'

function Body(props) {

    const rain = [
        { city: 'SFO', val: 1.29 },
        { city: 'OAK', val: 3.9 },
        { city: 'LAX', val: 183.91 }
    ];

    return (
        <div>
            <h1>This is the body!</h1>
            <ul>
                {rain.map(r => (
                    <li key={r.city}><span>{r.city}</span> is <span>{r.val}</span></li>
                ))
                }
            </ul>
            <VoiceBody />
        </div>
    );
}

export default Body;