import React,{Component} from 'react';
import './App.css';
import ScrollCamera from "./ScrollCamera";
import ScrollAlgorithm from './ScrollAlgorithm';
import {cameras,algorithms} from './data';
import UserBar from './UserBar';



      class App extends Component {
      constructor(){
          super();
          this.state={camAndAlgos:{ cam: "", algorithms:""}}
      }
      handleCam=(chosenCam)=>{
           
            let temp=JSON.parse(JSON.stringify(this.state.camAndAlgos));
            temp.cam=chosenCam;
            this.setState({camAndAlgos:temp});
      }
      handleAlgos=(chosenAlgos)=>{
       
        let temp=JSON.parse(JSON.stringify(this.state.camAndAlgos));
        temp.algorithms=chosenAlgos;
        this.setState({camAndAlgos:temp});

      }
      printState =()=>{
        if(this.state.camAndAlgos.cam===-1 || this.state.camAndAlgos.cam===""){
          alert("Cam is not selected!");
          return ;
        }
        if(this.state.camAndAlgos.algorithms==""){
          alert("Algorithm is not selected!");
          return ;

        }
        
       

        console.log(this.state.camAndAlgos);
      }
      //handle nonsubmitted algorithmsssssssssssssssssssssssss 
      render() {
       return(
        
         < div className="container">        
              
                <div style={{gridColumn :"2/4", gridRow:"1/2" ,borderLeft: "3px solid gray"}}> 
                  <h1 style={{ paddingTop:"30%",marginLeft :"20%", color:"rgb(90, 115, 122)"}}> Select Camera </h1>
                </div>
                <div className="scrollCameraContainer">
                  <div className="posCamera" >
                   
                  <ScrollCamera getCam={this.handleCam} itemList={cameras} ></ScrollCamera>
                  </div>
                 
                </div>
                <div style={{gridColumn :"4/5", gridRow:"1/2" ,borderLeft: "3px solid gray"}}> 
                  <h1 style={{ paddingTop:"40%",marginLeft :"20%", color:"rgb(90, 115, 122)"}}> Select Algorithm </h1>
                </div>
                <div style={{ gridColumn: "4/7", gridRow: "2/3" ,borderLeft : "3px solid gray"  }}> 
                <div className="posAlgo"  >
                 <ScrollAlgorithm getAlgos={this.handleAlgos}  itemList={algorithms}></ScrollAlgorithm>
                 </div>
                </div>
                <div style={{ gridColumn: "1/2", gridRow: "1/7"  ,borderLeft : "3px solid gray" }}> 
                  <UserBar></UserBar>

                </div>
                <div  className="startButtonContainer"  >
                            <button onClick={this.printState} className="startButton Submit" ><h3 style={{color:"rgb(239, 239, 235)"}} > START </h3> </button>
                    </div>
                
               
                
               

            
          </div>
        

            ) ;
  }
}




export default App;
