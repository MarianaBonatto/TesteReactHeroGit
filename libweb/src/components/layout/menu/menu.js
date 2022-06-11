import React, { useState } from 'react';
import { Menu, Image, Button } from 'antd';
import logo from '../../../imagens/logo.png';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    SearchOutlined,
    SettingOutlined,
    FileSearchOutlined,
    LogoutOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';

const MenuLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{ width: 256 }}>
            <Button onClick={toggleCollapsed} style={{ borderRadius: 10, border: 0 }}>
                <img style={{ height: '1.5rem', width: 'auto', padding: 3 }}
                    src={logo} />
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
                items={[
                    {
                        key: 'user',
                        icon: <UserOutlined />,
                        label: 'Nathaly Oliveira',
                    },
                    {
                        key: 'search',
                        icon: <SearchOutlined />,
                        label: 'Pesquisar',
                    },
                    {
                        key: 'settings',
                        icon: <SettingOutlined />,
                        label: 'Configurações',
                    },
                    {
                        key: 'search-dictionary',
                        icon: <FileSearchOutlined />,
                        label: 'Dicionário',
                    },
                    {
                        key: 'pendding',
                        icon: <ClockCircleOutlined />,
                        label: 'Pendentes',
                    },
                    {
                        key: 'logout',
                        icon: <LogoutOutlined />,
                        label: 'Sair',
                    },

                ]}
            />
        </div>
    );
};

export default MenuLayout;