import React from 'react';

class UpdateCountry extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form>
              <p>Update Country: </p>
              <br/>
              <input type ="text" id="updateCountry" />
              <br/>
              <button id="submitButton" value="update">Update Country</button>
            </form>
        )
    }
}

export default UpdateCountry