import React, {Component} from 'react';
import './style.css';
//import App from './App';
import './App';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
class Form extends Component {


    render(){
        return (
                <div className="container">
                   <div className="col s12 m4 l8">
                        <div className="cards">
                              <h1>{props.date}, {props.name} {props.info}</h1>
                         </div>
                        <button type="submit" value="submit">Get Calender</button>
                   </div>
                </div>
        )
    }
}

export default Form;