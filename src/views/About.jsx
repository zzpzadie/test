import React, {useState} from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {Outlet,useNavigate} from "react-router-dom";
import OwnMenu from "@/Component/OwnMenu/index.jsx";


const {Header, Content, Footer, Sider} = Layout;


const View = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const navigateTo = useNavigate();

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            {/*左边栏*/}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical"/>
                <OwnMenu/>
            </Sider>
            {/*右边内容*/}
            <Layout>
                {/*右边头部*/}
                {/*<Header*/}
                {/*    className={"site-layout-background"}*/}
                {/*    style={{*/}
                {/*        paddingLeft: '16px',*/}
                {/*        background: colorBgContainer,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Breadcrumb*/}
                {/*        style={{*/}
                {/*            margin: '16px 0',*/}
                {/*            lineHeight: '64px'*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <Breadcrumb.Item>User</Breadcrumb.Item>*/}
                {/*        <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
                {/*    </Breadcrumb>*/}
                {/*</Header>*/}
                {/*右边内容-底部盒子*/}
                <Content
                    style={{
                        margin: '16px 16px 0',
                    }}
                    className={"site-layout-background"}
                >
                    {/*窗口部分*/}
                    <Outlet/>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                        padding: 0,
                        lineHeight: "48px"
                    }}
                >
                    Design ©{new Date().getFullYear()} Created by ZZP
                </Footer>
            </Layout>
        </Layout>
    );
};
export default View;
