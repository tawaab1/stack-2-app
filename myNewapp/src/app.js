import React from 'react';
import Data from './component/data';
import Dropdown from './component/dropdown';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            year: null,
            data: [],
          };
    }
    updateState(year, data){
        this.setState({
           year: year,
           data: data, 
        });
    }
    render(){
        return (
            <div>
                <Dropdown onClick={(year, data) => this.updateState(year, data)}/><br/>
                <Data year={this.state.year} data={this.state.data}/>
            </div>
        )
    }
}

export default App