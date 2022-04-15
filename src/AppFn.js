import React from "react";
import data from "./data.json";
import Cookies from 'universal-cookie';

export default class AppFn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: "en",
            id: 0,
            c1: { lat: 0, lon: 0 },
            c2: { lat: 30, lon: 60 },
            m: {lat: 0, lon: 0 },
            found: [],
            languages: [
                { lg: "en", lang: "English" },
                { lg: "de", lang: "Deutsch" },
                { lg: "pl", lang: "Polski" },
                { lg: "ro", lang: "Română" },
                { lg: "ru", lang: "Русский" },
                { lg: "bg", lang: "Български" },
                { lg: "az", lang: "Azərbaycan" },
                { lg: "ua", lang: "Український" },
                { lg: "es", lang: "Español" }
            ]
        }
        this.city = this.city.bind(this);
        this.geo = this.geo.bind(this);
        this.changedLang = this.changedLang.bind(this);
    };

    componentDidMount() {
        const cookies = new Cookies();
        let lang = cookies.get('lang');
        if(lang == undefined) lang = 'en';
        this.setState({ lang: lang });
    }

    city(city) {
        if(city.length > 1) {
            let found = [];
            for(let i=0; i<data.length; i++) {
                if(data[i].name.toUpperCase().includes(city.toUpperCase())) found.push(data[i]);
                if(found.length > 99) break;
            }
            this.setState({ found: found });
        }
    }

    showCity(city) {
        this.setState({
            id: city.id,
            m: {
                lat: city.coord.lat,
                lon: city.coord.lon
            },
            c1: {
                lat: city.coord.lat - 0.125,
                lon: city.coord.lon - 0.125
            },
            c2: {
                lat: city.coord.lat + 0.125,
                lon: city.coord.lon + 0.125
            }
        });
    }

    geo() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                
                this.showCity({id: 0, coord: {lon: lon, lat: lat}});

                let found = [];
                for(let i=0; i<data.length; i++) {
                    if(data[i].coord.lon - 0.08 < lon && lon < data[i].coord.lon + 0.08)
                        if(data[i].coord.lat - 0.08 < lat && lat < data[i].coord.lat + 0.08) 
                            found.push(data[i]);
                    if(found.length > 99) break;
                }
                this.setState({ found: found });
            });
        }
    }

    changedLang(lang) {
        this.setState({ lang: lang });
        const cookies = new Cookies();
        cookies.set('lang', lang, { path: '/' });
    }
}