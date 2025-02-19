import { useState } from 'react';

export default function HomeScreen({ isVisible }) {
    const [seePushups, setSeePushups] = useState(false);
    const [seeHome, setSeeHome] = useState(true);

    const togglePushups = () => {
        setSeeHome(false)
        setSeePushups(true);

    }

    if (isVisible) {
        return (
            <>
                <h1>Get Moving!</h1>
                <p>Choose an exercise: </p>

                <button onClick={togglePushups}>
                    Pushups
                </button>

                <button>
                    Running
                </button>

                <button>
                    Plank
                </button>
            </>
        )
    }


}