import { useState, useEffect } from "react";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api/container")  // Use backend container name
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
