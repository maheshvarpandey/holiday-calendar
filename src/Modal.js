import React,{Component} from 'react';
import './CSS/Modal.css';

const backdropStyle={
  position:'fixed',
  top:0,
  bottom:0,
  left:0,
  right:0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding:50
};

const modalStyle = {
  backgroundColor: '#fff',
  borderRadius:5,
  maxWidth: 900,
  minHeight: 'auto',
  margin: '0 auto',
  padding:30,
  position:'relative'
};

const footerStyle ={
 color: 'white',
 
  textAlign: 'center'
};
class Modal extends Component{
    constructor(props){
        super(props);

    }
    onClose=(e)=>{
      this.props.onClose && this.props.onClose(e);
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
      if(!this.props.show){
        return null;
      }
        return(
          <div style={backdropStyle}>
          <div style={modalStyle}>
      
        <div id="datestyle"> { this.props.modalshow[0].date.datetime.day+" "+this.month( this.props.modalshow[0].date.datetime.month)+" "+ this.props.modalshow[0].date.datetime.year}</div>
        {
        this.props.modalshow.map((sub)=>{
          return(
           <div >
            
            <br></br>
            <br></br>
            <br></br>
             <div style={{  fontFamily: 'Teko',
    fontSize: '30px'}}> {sub.name}</div>
    <br></br><br></br>
             <div> {sub.type.map((t)=>{
               return (
                      <span style={{
                        height: 'auto',
                        borderRadius: '25px',
                        width:'auto',
                        color:'white',
                        backgroundColor: 'purple',
                        padding: '10px'
                      }}>{t}</span>
               );
             })
             }</div><br></br>
             <br></br>
             <div style={{fontSize:'20px'}}>{sub.description}</div>
            </div>

          );
      })
     }
     <br></br><br></br>
          <div style={footerStyle}>
            <button style={{backgroundColor:'green',color:'white',padding:'10px'}} onClick={(e)=>{this.onClose(e)}}>Close</button>
          </div>
          </div>
        </div>

        );
    }
}
export default Modal;