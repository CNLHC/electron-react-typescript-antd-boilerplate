import * as React from 'react';
import {Icon, Layout, Menu} from 'antd';
import QYRoutes from "../../QYRoutes";
import {Link} from "react-router-dom";

let styles = require('./index.scss');
const {Header, Content, Sider} = Layout;

export interface IProps {
}

export class QYFramework extends React.Component<IProps> {
    state = {
        collapsed: false,
    };

    onCollapse = () => {
        this.setState({collapsed: !this.state.collapsed});
    }

    render() {
        return (
            <Layout className={styles.QYFramework}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    className={"qy-sidebar"}
                >
                    <div className={styles.sidebarLogo}/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Link to={'/'}>
                            <Icon type="pie-chart"/>
                            <span>
                                测试1
                            </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to={'/test'}>
                            <Icon type="file"/>
                            <span>
                                  测试2
                            </span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className={styles.header}>
                    </Header>
                    <Content style={{
                        margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                    }}
                    >
                        <QYRoutes/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default QYFramework;
