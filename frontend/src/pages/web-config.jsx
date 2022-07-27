import {Layout} from 'antd';
import PageLayout from 'components/PageLayout';
import { useUser } from 'lib/user';
import React from 'react';

const {Content} = Layout;

const App = (props) => {
    const user = useUser();
    return (
        <PageLayout h1="Nginx / База данных" {...props}>
                {user && (
                <>
                    <div className="p-10 grid justify-items-center">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 uppercase">
                                    User Details
                                </div>
                                <pre>{user.claims.sub}</pre>
                                <pre>{user.claims.username}</pre>
                                <pre>updated at: {user.claims.updated_at}</pre>
                            </div>
                        </div>
                    </div>
                </>
            )}
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