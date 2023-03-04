import React from "react";

export default class TextInput extends React.Component {
    render() {
        return (
            /**
             * Openstreetmap
             */
            <iframe width="100%" height="320" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" 
                src={
                    "http://www.openstreetmap.org/export/embed.html?bbox=" +
                    this.props.c1lon + "%2C" + this.props.c1lat + 
                    "%2C" + this.props.c2lon + "%2C" + this.props.c2lat + 
                    "&layer=mapnik&marker=" + this.props.mlat + "," + this.props.mlon
                }
                style={{ border: "1px solid black" }} rel="border: 1px solid black">
            </iframe>
        )
    }
};