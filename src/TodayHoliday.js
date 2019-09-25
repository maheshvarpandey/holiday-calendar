import React,{Component} from 'react';


class TodayHoliday extends Component{
    constructor(props){
        super(props);
        console.log('hello');
      //  console.log(this.props.fun.response.holidays[0].date.iso);

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
            <div>
                
                <h1>Hey, you got Holiday Today</h1>
                <br></br>
                <br></br>
                <div style={{fontSize:'30px',fontFamily:'Teko'}}> { this.props.fun[0].date.datetime.day+" "+this.month( this.props.fun[0].date.datetime.month)+" "+ this.props.fun[0].date.datetime.year}</div>
             {this.props.fun.map((sub)=>{
                 return(
                     <div>
                        
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
                         </div>
                 )
             })}
            
            </div>
           
        );

    }

}
export default TodayHoliday;