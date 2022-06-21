import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import React, {useState} from "react"

const Application = ({Component, pageProps}) => {
    const [layoutProps, setLayoutProps] = useState({});
    console.log(Component.h1)
    return (
        <>
            <Component {...pageProps} layoutProps={{...layoutProps, setLayoutProps}}/>
        </>
    )
}

export default Application;