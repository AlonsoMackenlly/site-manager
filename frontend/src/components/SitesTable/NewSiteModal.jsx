import {Input, Modal, Select, Tooltip, Typography} from 'antd';
import React, {useState} from 'react';
import {PlusCircleOutlined} from "@ant-design/icons";
import {MaskedInput} from "antd-mask-input";

const {Title} = Typography;
const {Option} = Select;

const NewSiteModal = ({domain}) => {
    const [subdomain, setSubdomain] = useState("");
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
                <Select defaultValue="Bitrix" style={{width: 120}} onChange={() => {
                }}>
                    <Option value="Bitrix">Bitrix</Option>
                    <Option value="Django" disabled>Django</Option>
                </Select>

                <Title level={5} className="mt-2">Домен:</Title>
                <div className="flex">
                    <Input value={subdomain} onChange={(ev) => setSubdomain(ev.target.value)}/>
                    <Input value={`.${domain}`} readOnly />
                </div>
            </Modal>
        </>
    );
};

export default NewSiteModal;
