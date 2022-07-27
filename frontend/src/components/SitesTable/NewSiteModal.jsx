import { Input, Modal, Select, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { PlusCircleOutlined } from "@ant-design/icons"
import { SiteCores } from "@/lib/sites/core_list"

const {Title} = Typography
const {Option} = Select

const NewSiteModal = ({domain}) => {
	const [subdomain, setSubdomain] = useState("")
	const [visible, setVisible] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const [defaultCore, setDefaultCore] = useState()
	
	const showModal = () => {
		setVisible(true)
	}
	
	const handleOk = () => {
		setConfirmLoading(true)
		
		
		// setVisible(false)
		// setConfirmLoading(false)
	}
	
	const handleCancel = () => {
		setVisible(false)
	}
	
	useEffect(() => {
		const default_ = SiteCores.find(core => core.default)
		if (default_) {
			setDefaultCore(default_.name)
		}
		else {
			if (SiteCores.length) {
				setDefaultCore(SiteCores[0].name);
			}
		}
	}, [])
	
	return (
		<>
			<PlusCircleOutlined type="primary" style={{fontSize: '20px', color: '#08c'}} onClick={showModal}/>
			<Modal
				title="Новый веб-проект"
				visible={visible}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText="Добавить"
                cancelText="Отмена"
			>
				<Title level={5}>Ядро:</Title>
				<Select defaultValue={defaultCore} className={"w-full"} onChange={() => {
				}}>
					{SiteCores.map(core =>
						<Option key={core.name} value={core.name} disabled={!core.active}>{core.verbose}</Option>
					)}
				</Select>
				
				<Title level={5} className="mt-2">Домен:</Title>
				<div className="flex">
					<Input value={subdomain} onChange={(ev) => setSubdomain(ev.target.value)} required />
					<Input value={`.${domain}`} readOnly/>
				</div>
			</Modal>
		</>
	)
}

export default NewSiteModal
