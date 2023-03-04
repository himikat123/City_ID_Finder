import AppFn from "./AppFn";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./scss/style.scss";
import Map from "./fragments/Map.jsx"
import TextInput from "./fragments/TextInput.jsx";
import LanguageChange from "./fragments/LanguageChange"
import Flags from "./Flags";
import Languages from "./Languages";
import {ReactComponent as Gps} from "./svg/gps.svg";


class App extends AppFn {
    render() {
        let text = new Languages();

        return(
            <div className="d-flex justify-content-center">
                <div className="content pt-1">

                    {/* Map */}
                    <Map c1lat={this.state.c1.lat} c1lon={this.state.c1.lon}
                        c2lat={this.state.c2.lat} c2lon={this.state.c2.lon}
                        mlat={this.state.m.lat} mlon={this.state.m.lon} 
                    />

                    {/* City input field */}
                    <TextInput placeholder={text.get('yourCity', this.state.lang)} changedCity={this.city} />

                    {/* Language change */}
                    <div className="lng">
                        <LanguageChange lang={this.state.lang} changedLang={this.changedLang} />
                    </div>

                    {/* Find my location button */}
                    <button className="but gps" onClick={this.geo}><Gps /></button>                    


                    {/* List of cities */}
                    <div className="d-flex justify-content-center scroll mt-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>{text.get('city', this.state.lang)}</td>
                                    <td>{text.get('coordinates', this.state.lang)}</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.found.map((x, i) =>
                                    <tr key={i} onClick={() => {this.showCity(x)}} className={x.id==this.state.id?'t-active':''}>
                                        <td>
                                            {x.id}
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <div className="flag"><Flags country={x.country} /></div>
                                                <div className="ms-1">(</div>{x.country}) {x.state}
                                            </div>
                                            {x.name}
                                        </td>
                                        <td>
                                            {x.coord.lon}<br />
                                            {x.coord.lat}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    };
};

export default App;