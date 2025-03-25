
import React, { useState, useEffect } from "react";

const CountdownLightSwitch = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);

    
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

   
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft]);

    return (
        <div style={{
            backgroundColor: darkMode ? "#222" : "#fff",
            color: darkMode ? "#fff" : "#000",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transition: "0.3s"
        }}>
            <button onClick={toggleTheme} style={{
                padding: "10px",
                fontSize: "16px",
                cursor: "pointer",
                marginBottom: "20px"
            }}>
                Toggle Theme
            </button>

            <h1>Time Left: {timeLeft}s</h1>
            <div style={{
                width: "80%",
                height: "20px",
                backgroundColor: "#ccc",
                borderRadius: "10px",
                overflow: "hidden",
                marginTop: "10px"
            }}>
                <div style={{
                    width: `${(30 - timeLeft) / 30 * 100}%`,
                    height: "100%",
                    backgroundColor: "red",
                    transition: "0.5s"
                }}></div>
            </div>
        </div>
    );
};

export default CountdownLightSwitch;







