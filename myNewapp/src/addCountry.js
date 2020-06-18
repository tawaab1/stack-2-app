import React from 'react';

class AddCountry extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form>
              <label for="country">Add New Country: </label>
              <input type ="text" id="addCountry" />
              <button id="submitButton" value="submit">Add Country</button>
            </form>
        )
    }
}

export default AddCountry