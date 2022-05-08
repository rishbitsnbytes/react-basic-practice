import { useState, useEffect } from "react";

const Greetings = ({randomMax}) => {
    const [randomNumber, setRandomNumber] = useState( Math.floor(Math.random() * 5) +1 );

    const [greeting, setGreetingMsg] = useState("Hi");

    useEffect (() => {
        window.localStorage.setItem("random", randomNumber);
        if(randomNumber === randomMax) {
            window.localStorage.setItem("jackpot", true);
        }
        else {
            window.localStorage.setItem("jackpot", false);
        }
        switch(randomNumber) {
            case 1: 
                setGreetingMsg("Hello");
                break;
            case 2: 
                setGreetingMsg("Bonjour");
                break;
            case 3: 
                setGreetingMsg("Hey");
                break;
            case 4: 
                setGreetingMsg("Howdie");
                break;
            case 5: 
                setGreetingMsg("Hey Yo!!");
                break;          
        }
        return function cleanup() {
            window.localStorage.removeItem("random");
            window.localStorage.removeItem("jackpot");
        }
    })

    return (
        <div>
            <h1>Random Greeting</h1>
            <h2>{greeting}</h2>

        </div>
    )
}

export default Greetings;