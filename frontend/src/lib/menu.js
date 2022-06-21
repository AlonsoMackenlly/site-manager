import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {GlobalOutlined, HddOutlined} from "@ant-design/icons";
import Link from "next/link";

const menu = [
    {
        key: '/',
        icon: (<GlobalOutlined style={{fontSize: "20px"}} />),
        label: (<Link href="/" shallow><a>Сайты</a></Link>),
    },
    {
        key: '/web-config',
        icon: (<HddOutlined style={{fontSize: "20px"}} />),
        label: (<Link href="/web-config" shallow><a>Nginx / База данных</a></Link>),
    },
]

export const useMenu = () => {
    const [actveMenuKey, setActiveMenuKey] = useState()
    const router = useRouter();

    const updateActiveMenuKey = () => {
        setActiveMenuKey(menu.find(menuItem => menuItem.key.indexOf(router.asPath.replace(/^\//, '')) !== -1).key);
    }

    useEffect(() => {
        updateActiveMenuKey()
    }, [router.asPath]);

    return {actveMenuKey, menu};
}