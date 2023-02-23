import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import '@/styles/normalize.css';
import { Layout, Menu } from 'antd';
import React from 'react';
import { history } from 'umi';
const { Header, Content, Sider } = Layout;

const Index = (props) => {
  console.log(props);
  const {
    route: { routes: pageRoutes = [] },
  } = props;

  const menuHandleClick = ({ key }) => {
    history.push(key);
  };

  return (
    <Layout>
      <Header className="header">
        <div className={styles['logo']}>
          <LaptopOutlined></LaptopOutlined> UmiReactDemos
        </div>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={pageRoutes.map(({ path, name }) => ({
              key: path,
              label: name,
            }))}
            onClick={menuHandleClick}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}1
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Index;