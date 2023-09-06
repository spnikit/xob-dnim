import { Layout, Space, Typography } from 'antd';
import { ReactNode } from 'react';

interface TodoLayoutProps {
  children: ReactNode;
}

export const TodoLayout = ({ children }: TodoLayoutProps) => {
  const { Text, Title } = Typography;
  return (
    <Layout>
      <Layout.Content style={{ margin: '0 auto', padding: '10px' }}>
        <Space direction="vertical" style={{ marginTop: '20px' }} size="middle">
          <Title className="title" type="secondary">
            ToDos
          </Title>
          {children}
        </Space>
      </Layout.Content>
    </Layout>
  );
};
