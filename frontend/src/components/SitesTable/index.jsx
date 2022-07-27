import {Table} from 'antd'
import {sitesList} from "@/lib/sites"
import React, {useEffect, useState} from "react"
import NewSiteModal from "./NewSiteModal"

const SitesTable = (props) => {
	const [sites, setSites] = useState([])
	
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
	
	
	useEffect(() => {
		(async () => {
			const {sites} = await sitesList()
			
			setSites(sites)
		})()
	}, [])
	
	return <>
		<Table locale={{emptyText: 'Пусто'}} className="sites-table" rowKey="id" columns={columns} dataSource={sites}/>
		
		<style jsx global>{`
          .sites-table td {
            display: flex;
          }
        `}</style>
	</>
}


export default SitesTable
