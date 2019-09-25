import React, {Component} from 'react';
import './style.css';
import './App';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';


class Calender extends Component {
    render(){       
        return (
            <div className="container">
            <div className="col s12 m4 l8">
                 <h3>Calender</h3>
            </div>
         </div>
        )
    }
}

export default Calender;