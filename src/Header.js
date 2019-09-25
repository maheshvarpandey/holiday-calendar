import React, {Component} from 'react';
import './style.css';
import './App';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
class Header extends Component {

    render(){
        return (
                <div className="header-app">
                    <form >
                        <button className="btn-btn-holidays1" type="submit"> Upcomig Holidays  </button> 
                        <button className="btn-btn-holidays"  type="submit"> Passed Holidays  </button>
                    </form>
                </div>
        )
    }
}

export default Header;