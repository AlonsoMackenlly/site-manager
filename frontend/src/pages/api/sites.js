import {getUserSession} from "@/lib/session";
import {NextApiRequest, NextApiResponse} from "next";
import {retrieveSites} from "../../lib/sites";


export default async function handler(
    req,
    res
) {
    try {
        const session = await getUserSession(req);
        const sites = (session && (await retrieveSites(session.jwt))) ?? [];
        res.status(200).json({sites});
    } catch (e) {
        console.error(e);
        res.status(500).end('Authentication invalid. Please login in.');
    }
}
