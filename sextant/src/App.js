import React  from "react";
import './index.css';
import './Banner.css';
import Banner from './Banner';
import {GetIPaddress} from './GetIPaddress';

class App extends React.Component {
   render(){
    return (
      <div>
        <Banner text = "SEXTANT" />
        <div className="card">
          <GetIPaddress type = "ipv4"/>
          <GetIPaddress type = "ipv6"/>
        </div>
      </div>
    );
  }
}

export default App;