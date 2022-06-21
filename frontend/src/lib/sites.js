import {Claims} from "./user";

export async function retrieveSites(token) {
    try {
        const res = await fetch(
            `${process.env.API_ENDPOINT}${process.env.API_SITE_LIST_ENDPOINT}`,
            {
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=utf-8",
                    Authorization: `Bearer ${token}`,
                },
                method: "GET",
            }
        );
        const data = await res.json();
        if (res.status === 200) {
            return data;
        }
    } catch (e) {
        console.error(e);
    }
    return null;
}

export async function sitesList() {
    const res = await fetch('http://localhost/api/sites')
    return await res.json()
}
