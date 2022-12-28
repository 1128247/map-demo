import { ConfigProvider } from 'antd';
import {memo} from "react";
import 'antd/dist/reset.css';
import '@/assets/css/reset.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import Home from '@/pages/home';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b'
        }
      }}
    >
      <div className="App">
        <Home></Home>
      </div>
    </ConfigProvider>
  );
}

export default memo(App);
