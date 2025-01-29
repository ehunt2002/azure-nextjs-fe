import { useState, useEffect } from "react";

export default function Home() {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch("https://localhost:3000/api/users")  // Use backend container name
            .then((res) => 
                res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h1>Next.js Frontend</h1>
            <p>Backend says: {data || "Loading..."}</p>
        </div>
    );
}
