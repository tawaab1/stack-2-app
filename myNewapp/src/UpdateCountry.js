import React from 'react';

class UpdateCountry extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form>
              <label for="country">Update Country: </label>
              <input type ="text" id="updateCountry" />
              <button id="submitButton" value="update">Update Country</button>
            </form>
        )
    }
}

export default UpdateCountry