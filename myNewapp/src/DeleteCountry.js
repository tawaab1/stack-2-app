import React from 'react';

class DeleteCountry extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form>
              <label for="country">Delete Country: </label>
              <br/>
              <input type ="text" id="deleteCountry" />
              <br/>
              <button id="submitButton" value="delete">Delete Country</button>
            </form>
        )
    }
}

export default DeleteCountry