import logo from './logo.svg';
import './App.css';
import SiderDemo from './components/layout/home/home';
import MenuLayout from './components/layout/menu/menu';
import PageSearch from './components/layout/home';
import Postagens from './components/layout/postagem';

import {
  Layout,
} from 'antd';
import AdicionarPalavraVideo from './components/layout/novaPalavraVideo';

const { Header, Sider, Content } = Layout;


function App() {
  return (
    <>
      <MenuLayout />
      <PageSearch />
    </>
    // <SiderDemo />
    // <Postagens />
    // <AdicionarPalavraVideo />

    // <Layout>
    //   <Sider>
    //     <MenuLayout />
    //   </Sider>
    //   <Content>
    //     <PageSearch />
    //   </Content>
    // </Layout>


  );
}

export default App;
