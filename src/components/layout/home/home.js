
import React from 'react';
import './styles.css';
import logo from '../../../imagens/logo.png';

import {
    Input,
    Button,
    Select,
    Layout,
    Divider,
    Card,
    Menu,
    Space,
    Upload,
    Image,
    Comment,
    Avatar,
    message,
} from 'antd';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    SearchOutlined,
    SettingOutlined,
    FileSearchOutlined,
    LogoutOutlined,
    ClockCircleOutlined,
    InboxOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Option } = Select;
const { Dragger } = Upload;
const { Search } = Input;

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

let data = {};

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
        palavra: '',
        arrayPalavras: [],
        post: {
            palavra: '',
            linkVideo: '',
        },
        postRender: {
            palavra: '',
            linkVideo: ''
        }
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    inserePalavra = (value) => {
        this.setState({
            palavra: value
        })
    }

    handleChange = (value) => {
        this.setState({
            palavra: value
        })
    }

    onClick = () => {
        this.setState({
            arrayPalavras: [...this.state.arrayPalavras, this.state.palavra]
        })
    }

    newPost = () => {
        this.setState({
            post: { palavra: this.state.palavra, linkVideo: '' }
        })
    }

    render() {
        let palavras = this.state.arrayPalavras.map(i => <Option value={i}>{i}</Option>)
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu
                        style={{ height: 1100 }}
                        theme="ligth"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: 'logo',
                                icon: <Image
                                    style={{
                                        height: '20px',
                                        width: 'auto',
                                        padding: 3
                                    }}
                                    src={logo} />,
                                label: '',
                            },
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
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0, background: '#FFFFFF' }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <Card
                                style={{
                                    width: '100%',
                                    borderRadius: 15,
                                    boxShadow: '1px 2px 2px #D6D6D6'
                                }}>
                                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                    <Input.Group compact>
                                        <Input style={{ width: 'calc(100% - 45px)' }} placeholder="Adicionar palavra"
                                            onChange={evt => this.inserePalavra(evt.target.value)} /> {/* 100px */}
                                        <Button onClick={this.onClick} type="primary" >+</Button>
                                    </Input.Group>
                                    {/* --------------------------------------------------------- */}
                                    <Select
                                        style={{ width: '100%' }} //60px
                                        showSearch
                                        placeholder="Selecione uma palavra"
                                        optionFilterProp="children"
                                        onChange={this.handleChange}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }>
                                        {palavras}
                                    </Select>
                                    {/* -------------------------------------------------- */}
                                    <Select
                                        style={{ width: '100%' }} //60px
                                        showSearch
                                        placeholder="Selecione a região"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }>

                                        <Option value="0">. . .</Option>
                                        <Option value="1">Norte</Option>
                                        <Option value="2">Nordeste</Option>
                                        <Option value="3">Sul</Option>
                                        <Option value="4">Sudeste</Option>
                                        <Option value="5">Centro-Oeste</Option>
                                    </Select>
                                    {/* ----------------------------------------- */}

                                    <Dragger {...props}>
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">Adicionar vídeo</p>
                                    </Dragger>

                                    {/* ------------------------------------------ */}

                                    <Space
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}>
                                        <Button
                                            style={{
                                                background: '#ED6E0C',
                                                borderColor: '#ED6E0C'
                                            }}
                                            type="primary">Cancelar</Button>

                                        <Button style={{
                                            borderColor: '#ED6E0C',
                                            color: '#ED6E0C',
                                        }}
                                            onClick={this.newPost}
                                        >Salvar</Button>
                                    </Space>
                                </Space>
                            </Card>
                            <Divider></Divider>

                            <Card
                                style={{
                                    width: '100%',
                                    borderRadius: 15,
                                    boxShadow: '1px 2px 2px #D6D6D6'
                                }}>
                                <Search placeholder="Pesquisar palavra no dicionário" style={{ width: '100%' }}
                                    onChange={evt => this.inserePalavra(evt.target.value)}
                                    onSearch={this.renderPost}
                                />
                            </Card>

                            <Card
                                hoverable
                                style={{
                                    width: '100%',
                                    borderRadius: 15,
                                }}>
                                <Space direction="vertical">
                                    <Comment
                                        author={<a>Nathaly Oliveira</a>}
                                        avatar={<Avatar src="https://avatars.githubusercontent.com/u/73591609?v=4" alt="Nath" />}
                                        content={
                                            <div>
                                                <p>
                                                    Abacate
                                                </p>
                                                <iframe width="427" height="240" src="https://www.youtube.com/embed/q9XTofdjTVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        }
                                    />
                                </Space>
                            </Card>
                        </Space>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default SiderDemo;