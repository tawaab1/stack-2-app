import React from 'react';

class DeleteCountry extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form>
              <h3>Delete Country: </h3>
              <br/>
              <input type ="text" id="deleteCountry" />
              <br/>
              <button id="submitButton" value="delete">Delete Country</button>
            </form>
        )
    }
}

export default DeleteCountry