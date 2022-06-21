import {Badge, Layout, Menu} from "antd";
import React from "react";
import Link from 'next/link';
import {useMenu} from "@/lib/menu";
import {useUser} from "@/lib/user";

const {Header, Content} = Layout;

export default function PageLayout({children, h1}) {
    const user = useUser();
    const {actveMenuKey, menu} = useMenu();

    return <Layout className="layout">
        <Header className="flex bg-white">
            <div className="w-full flex justify-between align-center">
                <Menu
                    activeKey={actveMenuKey}
                    mode="horizontal"
                    items={menu}
                    className="w-full justify-start border-0"
                />
                <div className="flex justify-end items-center gap-x-6">
                    {/* TODO: Перенести в компонент */}
                    {user ? (
                        <>
                            <span>{user.claims.username}</span>
                            <Link href="/api/logout">
                                <a className="self-center border border-slate-400 text-slate-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Выйти
                                </a>
                            </Link>
                        </>
                    ) : (
                        <Link href="/api/callback">
                            <a className="self-center border border-slate-400 text-slate-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Войти
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </Header>
        <Layout style={{margin: '24px', padding: '24px'}}
                className="bg-white border border-slate-100 shadow-md rounded-md">
            <h1>{h1}</h1>
            <Content
                style={{
                    paddingTop: '1rem',
                    minHeight: 280,
                }}
            >
                {children}
            </Content>
        </Layout>
    </Layout>
}
