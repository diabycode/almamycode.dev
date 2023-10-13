import React, { useEffect, useState } from 'react';


function App() {

    const [theme, setTheme] = useState("white")

    useEffect(() => {
        // set colors using the current theme
        if (theme === "blue") {
            const root = document.querySelector(":root")
            root.style.setProperty("--bg", "#210637")
            root.style.setProperty("--accent-1", "#FBEAFF")
            root.style.setProperty("--accent-2", "#7F6A9B")
            root.style.setProperty("--accent-3", "#7B7484")
            root.style.setProperty("--linear-1", "linear-gradient(100deg, #FBEAFF 34.82%, #7F6A9B 93.68%)")
            root.style.setProperty("--linear-2", "linear-gradient(269deg, #FBEAFF 37.02%, #7F6A9B 92.17%)")
        }
    }, [])


    return (
        <>
            <h1>Almamy Code </h1>
        </>
    )
}

export default App
