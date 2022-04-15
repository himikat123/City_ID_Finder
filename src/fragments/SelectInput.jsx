import React from "react";

export default class SelectInput extends React.Component {
    constructor(props) {
        super(props);
        this.changedValue = this.changedValue.bind(this);
    };

    /**
     * Language has been changed
     * @param {*} event
     */
    changedValue(event) {
        this.props.changedLang(event.target.value);
    }

    render() {
        return(
            <select className="form-select lang"
                value={this.props.lang} 
                onChange={this.changedValue}
            >
                {this.props.options.map((opt, num) => {
                    return <option key={num} value={opt.lg}>{opt.lang}</option>
                })}
            </select>
        );
    };
};