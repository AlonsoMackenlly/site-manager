import {Layout} from 'antd';
import PageLayout from 'components/PageLayout';
import { useUser } from 'lib/user';
import React from 'react';
import SitesTable from "../components/SitesTable/index";

const {Content} = Layout;

const App = () => {
    const user = useUser();
    return (
        <PageLayout h1="Сайты">
            <SitesTable />
        </PageLayout>
    )
}


export default App;