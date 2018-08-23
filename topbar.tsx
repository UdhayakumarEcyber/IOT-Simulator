import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './devices';
import { IoTSimulator } from './iot-simulator';

export interface ITopBarProps {
    
}
export interface ITopBarState {
    
}
export class TopBar extends React.Component<ITopBarProps,ITopBarState> {
    constructor(props:ITopBarProps) {
        super(props);
        this.state = {}
    }
    render() {
       // return <div className='topbar' />;

        return (
            <div className="topbar">
              <header className="iot_header">               
                 <div className="logo"><img src="images/logo.svg" /></div>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to refresh.
              </p>
            </div>
          );
    }
}




