import {Table} from 'antd';
import {sitesList} from "@/lib/sites";
import {useEffect, useState} from "react";
import {PlusCircleOutlined} from "@ant-design/icons";
import NewSiteModal from "./NewSiteModal";
import App from "next/app";


const Index = (props) => {
    const [sites, setSites] = useState([])
    const getInitialProps = async (ctx) => {
        return {qwe: 123}
    }

    console.log(props)
    const columns = [
            {
                title: () =>
                    <div className="flex justify-between">
                        Домен <NewSiteModal {...props} />
                    </div>,
                dataIndex: 'domain',
                key: 'domain',
                render: (text, record) => <a className="w-full" onClick={() => {
                    console.log(record)
                }}>{text}</a>,
            },
        ]
    ;

    const showCreatingModal = () => {
        addNewSite()
    }

    useEffect(async () => {
        const {sites} = await sitesList()

        setSites(sites)
    }, [])

    return <>
        <Table locale={{ emptyText: 'Пусто' }} className="sites-table" rowKey="id" columns={columns} dataSource={sites}/>

        <style jsx global>{`
          .sites-table td {
            display: flex;
          }
        `}</style>
    </>
}


Index.getInitialProps = async (ctx) => {
    console.log('!!!!!!!!!!!!!!')
    const appProps = await App.getInitialProps(ctx)
    return {
        ...appProps,
        domain: process.env.DOMAIN
    }
};

export default Index;
