import React from "react";

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.changedCity = this.changedCity.bind(this);
    };

    /**
     * input value has been changed
     * @param {*} event
     */
    changedCity(event) {
        this.props.changedCity(event.target.value);
    }

    render() {
        return (
            <input type="search" 
                className="form-control cityIn"
                placeholder={this.props.placeholder}
                onChange={this.changedCity}
            />
        );
    };
};