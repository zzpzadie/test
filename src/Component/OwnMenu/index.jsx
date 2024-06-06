import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {Menu} from "antd";

const items = [
    {
        label: '账号信息',
        key: '/test/accountInfo',
        icon: <PieChartOutlined/>
    }, {
        label: '收藏路线',
        key: '/test/planLine',
        icon: <DesktopOutlined/>
    }, {
        label: '收藏地点',
        key: '/test/willGo',
        icon: <FileOutlined/>
    }, {
        label: '曾使用',
        key: 'onceGo',
        icon: <UserOutlined/>,
        children: [{
            label: '曾使用地点',
            key: '/test/onceGo/site',
            icon: <FileOutlined/>
        }]
    }
];
const Comp = () => {
    let firstOpenKeys = "";
    const navigateTo = useNavigate();
    const currentRoute = useLocation();

    function findKey(obj) {
        return obj.key === currentRoute.pathname
    }

    items.map(menu => {
        let children = menu['children']
        // console.log('zhao1',children[0])
        if (children && children.length > 0 && children.find(findKey)) {
            firstOpenKeys = menu.key;
        }

    })

    const [openKeys, setOpenKeys] = useState([firstOpenKeys]);
    const menuClick = (e) => {
        //点击跳转到对应路由（编程式导航）
        navigateTo(e.key)
    }
    const handleOpenChange = (keys) => {
        // 展开和回收菜单执行,只展开最后一项
        setOpenKeys([keys[keys.length - 1]])
        console.log(keys)
    }
    return (
        <Menu theme="dark"
            //当前选中项
              defaultSelectedKeys={[currentRoute.pathname]}
              mode="inline"
              items={items}
              onClick={menuClick}
            // 某项菜单展开和回收事件
              onOpenChange={handleOpenChange}
            // 当前菜单展开项的key数组
              openKeys={openKeys}
        />
    )
}
export default Comp;
