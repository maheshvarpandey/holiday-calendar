import React,{Component} from 'react';
import PastHoliday from './PastHoliday';
import Display from './Display';
//import Current from './Current';
import './CSS/App.css';
import TodayHoliday from './TodayHoliday';
import NoHoliday from './NoHoliday';
class App extends Component {

  constructor(props){
    super(props);
    this.state={previous:[] ,
    equal:[],
    Upcomming:[],
        term: true,
        term1: false,
        load:true,
        error:false
    };
    this.Upperpart();
  }
  // async componentDidMount() {
  //   const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
  //   const json = await response.json();
  //   this.setState({ data: json });
  // }
async Upperpart(){
    var today = new Date();
    //date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    var d=today.getDate();
   
  
   
    if(d<10){
      d="0"+d;
    }
    
    var m=today.getMonth() + 1;
 
    if(m<10){
      m="0"+m;
    }
    console.log(m);
    var y=today.getFullYear();
 
    if(y<10){
      y="0"+y;
    }
    var l;
   
    console.log(y);
    console.log(m);
    console.log(d);
//  const re= await  fetch(`https://calendarific.com/api/v2/holidays?country=IN&year=`+y+`&api_key=4c1fe818cff0ee56bdf2b850dc9a0e5004a4c8b5&day`)
// const js=await re.json();
// try{
 const js=await  fetch(`https://calendarific.com/api/v2/holidays?country=IN&year=`+y+`&api_key=4c1fe818cff0ee56bdf2b850dc9a0e5004a4c8b5&day`)
.then((response)=>{console.log(response);
                if(response.ok)
              return response.json();
             else
             throw new Error(response.status);
})
.then((myjson)=>{
  console.log(myjson);
  return myjson;
})
.catch((error)=>{
  console.log(error);
  this.setState ( {
  
    error:true,
    load:false
    });
})
if(!this.state.error){
console.log(js.response.holidays);
// l is already declared above
   l=js.response.holidays.length;
var Upcomming=[];
var Upcomming1=[];
var equal=[];
var equal1=[];
var previous=[];
var previous1=[];
var iso= y + '-' + (m) + '-' +d;

    console.log(iso);
   
    var pa='';
    var upp='';
    console.log(js.response.holidays[0].date.iso);
    var y1=js.response.holidays[0].date.iso.length;
    console.log(y1);
for(var i=0;i<l;i++){
if(js.response.holidays[i].date.iso.length<11){
  if(js.response.holidays[i].date.iso===iso){
    equal.push(js.response.holidays[i]);
    equal1.push(js.response.holidays[i].date.iso);
    continue;
  }
if(js.response.holidays[i].date.iso<iso){

  if(pa===js.response.holidays[i].date.iso){
    continue;
  }
  previous.push(js.response.holidays[i]);
  previous1.push(js.response.holidays[i].date.iso);
  pa=js.response.holidays[i].date.iso;
}
else{
  if(upp===js.response.holidays[i].date.iso){
    continue;
  }
  Upcomming.push(js.response.holidays[i]);
  Upcomming1.push(js.response.holidays[i].date.iso);
  upp=js.response.holidays[i].date.iso;
}
}
}
var mainprevious=[];
for( i=previous.length-1;i>=0;i--){
  mainprevious.push(previous[i]);
}
console.log(equal1);
console.log(equal);
console.log(Upcomming1);
console.log(Upcomming);
console.log(previous1);
console.log(previous);
console.log(mainprevious);


  
if(equal.length>0){
this.setState ( {
      equal:equal,
      previous:mainprevious,
      Upcomming:Upcomming,
      load:false,
      condition:true
      }); 

    }
    else{
      this.setState ( {
        equal:equal,
        previous:mainprevious,
        Upcomming:Upcomming,
        load:false,
        condition:false
        }); 
    }

}
}

onFromSubmitted=(e)=>{
  e.preventDefault();
  this.setState({
      term:true,
      term1:false
  });
 console.log(this.state.term);
 console.log(this.state.term1);
}
onFromSubmitted1=(e)=>{
  e.preventDefault();
  this.setState({
      term:false,
      term1:true
  });
  console.log(this.state.term1);
  console.log(this.state.term);
 
}



  render()
  {
    if(this.state.load){
      return <div class="ui ">
      <div class="ui active inverted dimmer">
        <div class="ui text loader" style={{textAlign:'center',marginTop:'50px',fontSize:"50px"}}>Loading...</div>
      </div>
    
    </div>
    }
    if(this.state.error){
      return <div  style={{textAlign:'center',marginTop:'300px',fontSize:"50px"}}><i class="exclamation triangle icon big"></i>Error Loading Data</div>
    }
  return (
    <div className="Apppp">
     {/* <Current /> */}
     <br>
     </br>
     <br></br>
     <div className="Ap">
  {this.state.condition && <TodayHoliday fun={this.state.equal}/>}
    {!this.state.condition && <NoHoliday/>}
    {/* <Show /> */}
    {/* <Show foo={this.state.response}/> */}
     </div>
     <br>
     </br>
     <br></br>
     <div className="btn">
  <button className="ui button" id="button-style" onClick={this.onFromSubmitted}>Upcomming Holidays</button>
  <button className="ui button" id="button-style" onClick={this.onFromSubmitted1}>Passed Holidays</button>

</div>
<br>
     </br>
     <center>                    <div class="dynamic">
                     {this.state.term && <Display up={this.state.Upcomming}/> }
                     {this.state.term1 && <PastHoliday pre={this.state.previous}/> }
                     </div>
                     </center>
    </div>
    
  );
}
}

export default App;
