import React from 'react';

class Data extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.year != null ?
                <div>
                    <p>Food supply per person: {this.props.data['food_supply_kilocalories_per_person_and_day'][this.props.year]}</p>
                    <p>Life expectancy: {this.props.data['life_expectancy_years'][this.props.year]}</p>
                    <p>PC per 100 people: {this.props.data['personal_computers_per_100_people'][this.props.year]}</p>
                </div>
                : 
                <div>
                    <h3>Life Expectency:</h3>
                    <h3>Food Supply Per Person Per Day (Kg):</h3>
                    <h3>Sugar Per Person Per Day (g):</h3>
                </div>
                }
            </div>
        )
    }
}

export default Data