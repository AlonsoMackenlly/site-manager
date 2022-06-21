import {Input, Modal, Select, Tooltip, Typography} from 'antd';
import React, {useState} from 'react';
import {PlusCircleOutlined} from "@ant-design/icons";
import App from "next/app";

const { Title } = Typography;
const { Option } = Select;

const NewSiteModal = ({ domain }) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <>
            <PlusCircleOutlined type="primary" style={{fontSize: '20px', color: '#08c'}} onClick={showModal}/>
            <Modal
                title="Новый веб-проект"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Title level={5}>Ядро:</Title>
                <Select defaultValue="Bitrix" style={{width: 120}} onChange={() => {}}>
                    <Option value="Bitrix">Bitrix</Option>
                    <Option value="Django" disabled>Django</Option>
                </Select>
                <Title level={5}>Домен:</Title>

                <Tooltip trigger={['focus']} title={`Домен должен содержать: ${domain}`} placement="topLeft" overlayClassName="numeric-input">
                    <Input placeholder="some.g00d.ru" />
                </Tooltip>
            </Modal>
        </>
    );
};

export default NewSiteModal;
