import React from "react";
import {ReactComponent as More} from "../svg/more.svg";
import {ReactComponent as En} from "../svg/en.svg";
import {ReactComponent as De} from "../svg/de.svg";
import {ReactComponent as Pl} from "../svg/pl.svg";
import {ReactComponent as Ro} from "../svg/ro.svg";
import {ReactComponent as Ru} from "../svg/ru.svg";
import {ReactComponent as Bg} from "../svg/bg.svg";
import {ReactComponent as Az} from "../svg/az.svg";
import {ReactComponent as Ua} from "../svg/ua.svg";
import {ReactComponent as Es} from "../svg/es.svg";

export default class SelectInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [
                { lg: "en", lang: "English", flag: <En /> },
                { lg: "de", lang: "Deutsch", flag: <De /> },
                { lg: "pl", lang: "Polski", flag: <Pl /> },
                { lg: "ro", lang: "Română", flag: <Ro /> },
                { lg: "ru", lang: "Русский", flag: <Ru /> },
                { lg: "bg", lang: "Български", flag: <Bg /> },
                { lg: "az", lang: "Azərbaycan", flag: <Az /> },
                { lg: "ua", lang: "Український", flag: <Ua /> },
                { lg: "es", lang: "Español", flag: <Es /> }
            ]
        };
        this.changedValue = this.changedValue.bind(this);
    };

    /**
     * Language has been changed
     * @param {*} event
     */
    changedValue(event) {
        this.props.changedLang(event.target.id.split('_')[1]);
    }

    render() {
        let lang = this.props.lang;

        return(
            <div className="dropdown">
                <button className="but" type="button" id="langChange" data-bs-toggle="dropdown" aria-expanded="false">
                    <More />
                </button>
                <ul className="dropdown-menu langList" aria-labelledby="langChange">
                    {this.state.languages.map((e, n) => {
                        return (
                            <li key={n}>
                                <a className={"dropdown-item" + (lang == e.lg ? ' active' : '')} 
                                  href="#" 
                                  onClick={this.changedValue}
                                  id={"lang_" + e.lg}
                                >
                                    {e.flag}{e.lang}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>



            // <select className="form-select lang"
            //     value={this.props.lang} 
            //     onChange={this.changedValue}
            // >
            //     {this.props.options.map((opt, num) => {
            //         return <option key={num} value={opt.lg}>{opt.lang}</option>
            //     })}
            // </select>
        );
    };
};