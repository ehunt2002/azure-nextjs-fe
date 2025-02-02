import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch("https://azure-container-app-backend1.internal.calmpebble-705cf87d.australiaeast.azurecontainerapps.io/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error: unknown) {
        if(error instanceof Error)
        res.status(500).json({ error: error.message });
    }
}
