import { useState, useEffect } from "react";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://backend:5000/api/data")  // Use backend container name
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div>
            <h1>Next.js Frontend</h1>
            <p>Backend says: {data || "Loading..."}</p>
        </div>
    );
}
