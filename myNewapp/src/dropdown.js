import React from 'react';

class DropdownComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          jsonData: [],
          isLoaded: false,
        };
    }

    componentWillMount(){
      //set state to data in local storage
      localStorage.getItem("jsonData") && this.setState({
        jsonData: JSON.parse(localStorage.getItem("jsonData")),
        isLoaded: true,
      });
    }

    componentDidMount() {
      //grab data from web api if know data found in local storage
      if(!localStorage.getItem("jsonData")){
        fetch('http://10.25.116.138:80/countries')
        .then(response => response.json())
        .then($response => {
          this.setState({
            jsonData: $response,
            isLoaded: true,
          });
        })
        .catch(error => console.log("Parser failed", error));
      } else {
        // use the local storage data instead
        console.log("Using local storage data ..");
      }
    }
    //sets local storage data from the current state
    componentWillUpdate(nextProps, nextState){
      localStorage.setItem("jsonData", JSON.stringify(nextState.jsonData));
    }
    //function passes the value from select box to "data"
    onClick(){
      if((document.getElementById("dataYears").value == "null") || (document.getElementById("countryName").value == "null")){
        //alert user if country and year not selected
        window.alert("Select country and year");
      } else {
        //pass data -> parent class(app) -> component class (data)
        this.props.onClick(
          document.getElementById("dataYears").value,
          this.state.jsonData[document.getElementById("countryName").value].data,
          );
      }
    }

    render(){
      let index = -1;
      let years = [];
      for(let i = 1965; i <= 2013; i++){
        years.push(<option value={i}>{i}</option>);
      }
      return (
        <div>
          {this.state.isLoaded ? <div>Data has been Loaded</div> : <div>Loading Data...</div>}
          <div>
            <select id="countryName">
              <option value="null">Please select a country:</option>
              {this.state.jsonData.map((country)=>{
                index ++
                return <option value={index}>{country.name}</option> 

              })}
            </select>

            <select id="dataYears">
              <option value="null">Please select the year:</option>
              {years.map((year) => {
                return year;
              })}
            </select>

            <br/>
            <button id="submitButton" value="submit" onClick={() => this.onClick()}>Submit</button>
          </div>
        </div>
      )   
    }
}

export default DropdownComponent

