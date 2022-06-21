import {Layout} from 'antd';
import PageLayout from 'components/PageLayout';
import {useUser} from 'lib/user';
import React from 'react';
import SitesTable from "../components/SitesTable/index";

const {Content} = Layout;

const App = function (props) {
    const user = useUser();
    return (
        <PageLayout h1="Сайты" {...props}>
            <SitesTable {...props} />
        </PageLayout>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            domain: process.env.DOMAIN
        }
    }
}

export default App;