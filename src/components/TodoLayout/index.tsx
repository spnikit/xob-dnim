import {Layout, Space} from "antd";
import {ReactNode} from "react";

interface TodoLayoutProps {
    children: ReactNode;
}

export const TodoLayout = ({children}: TodoLayoutProps) => {
    return (
        <Layout>
            <Layout.Content style={{margin: '0 auto', padding: '10px'}}>
                <Space direction="vertical" style={{marginTop: '20px'}} size="middle">
                    {children}
                </Space>
            </Layout.Content>
        </Layout>
    )
}