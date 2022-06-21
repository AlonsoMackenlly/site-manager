import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import React from "react"
import App from "next/app";
import Index from "@/components/SitesTable";

const Application = ({Component, pageProps}) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default Application;