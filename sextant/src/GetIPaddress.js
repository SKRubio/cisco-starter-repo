import React from 'react';
import './index.css';
import DataPoint from './DataPoint';

class GetIPaddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ipv4: "0.0.0.0", ipv6: "::/128"};
    }

    componentDidMount() {
        const ipType = this.props.type === 'ipv4' ? 'https://api.ipify.org?format=json' :'https://api64.ipify.org?format=json';
 //       console.log(ipType);
        if (this.props.type === 'ipv4'){
            fetch(ipType)
            .then(response => response.json())
            .then(result => this.setState({ ipv4: result.ip }))
            .catch(error => console.warn(error));
        }else{
            fetch(ipType)
            .then(response => response.json())
            .then(result => this.setState({ ipv6: result.ip }))
            .catch(error => console.warn(error));
        }
    }

    getIP(){
        return this.props.type === 'ipv4' ? this.state.ipv4 : this.state.ipv6;
    }

    render() {
        return (
            <DataPoint title = {"IP Address (" + this.props.type + "): "} data = {this.getIP()} />
        );
    }
}

export { GetIPaddress };