import React,{Component} from 'react';
import Modal from './Modal';
import './CSS/Common.css';

class Display extends Component{

  static s1=[];
    constructor(props){
        super(props);

        this.state=({
            show:false
        });

    }




    async do(d,m,y,iso){
            //e.preventDefault();
            console.log("show");

            console.log(d);
            console.log(m);
            console.log(y);
            const re= await  fetch(`https://calendarific.com/api/v2/holidays?country=IN&year=`+y+`&api_key=22ce4c59210f438afa213c82024c0c3ae7d8c5c4&day`)
    const js=await re.json();
    console.log(js.response.holidays);
    var l=js.response.holidays.length;
    Display.s=[];
    
    for(var i=0;i<l;i++){
        if(js.response.holidays[i].date.iso.length<11){
          if(js.response.holidays[i].date.iso===iso){
            Display.s.push(js.response.holidays[i]);
          }
        }
    }
    //debugging output
    console.log(Display.s);
        
             this.setState({show:!this.state.show});
    }

    closeModal=()=>{
      console.log("back");
      this.setState({show:!this.state.show});
  }
    month(e){
      // console.log("hello");
    
       var t;
       switch(e){
           case 1:
               t="January";
               break;
               case 2:
                       t="Febuary";
                       break;
                       case 3:
                               t="March";
                               break;
                               case 4:
                                t="April";
                                    break;
                                    case 5:
               t="May";
               break;
               case 6:
               t="June";
               break;
               case 7:
               t="July";
               break;
               case 8:
               t="August";
               break;
               case 9:
               t="September";
               break;
               case 10:
               t="October";
               break;
               case 11:
               t="November";
               break;
               case 12:
               t="December";
               break;


       }
      // console.log(t);
       return t;

   }
render(){

return(
  <div className="cvbnm">
<br></br>
<div class="ui grid">
               {    this.props.up.map((sub)=>{
                   return(
                     
                    <div class="four wide column" id="datestyle" key={sub.date.iso} onClick={this.do.bind(this,sub.date.datetime.day,sub.date.datetime.month,sub.date.datetime.year,sub.date.iso)} >{sub.date.datetime.day} 
                    <p id="monthstyle"> {this.month(sub.date.datetime.month)}</p></div>
               
                   );
               })
                  
            }
                 </div>
                 <Modal 
        onClose={this.closeModal}
        show={this.state.show}
        modalshow={Display.s}
        >
         
          
          
        </Modal>


  </div>  
);

}


}
export default Display;