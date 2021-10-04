import React, {Component} from "react";
import "./App.css"
import ParametersModal from "./ParametersModal";
import DetailsModal from "./DetailsModal";
class ScrollAlgorithm extends Component {
    constructor(props){
        super(props);
        this.state={ chosenAlgorithmForParameters :-1, chosenAlgorithmForDescription :-1,isDescriptionOpen: false , descriptionID : -1 ,isParametersOpen :false ,
             chosenAlgorithms:[],isChosen: Array(this.props.itemList.length).fill(false)}
 
    }
    handleCloseDescription=()=>{

        this.setState({isDescriptionOpen:false, chosenAlgorithmForDescription: -1});
    }
    handleCloseParameters=()=>{

        this.setState({isParametersOpen:false, chosenAlgorithmForParameters: -1});
    }
 
    OpenParametersModal =(e) => {
        let targetID=e.target.id;
        if(this.state.isParametersOpen==false){
            this.setState({isParametersOpen:true,chosenAlgorithmForParameters :targetID});
            
        }
        else if(this.state.isParametersOpen==true && this.state.chosenAlgorithmForParameters==targetID ){
            this.setState({chosenAlgorithmForParameters:-1,isParametersOpen:false});
        }
        else {            
            this.setState({chosenAlgorithmForParameters :targetID});          
        }
        e.preventDefault();

    }
    handleParameterSubmit=(value1,value2,value3,value4)=>{
      
        let temp=[...this.state.chosenAlgorithms];  
         let flag=0;
         for(let i =0;i<temp.length;i++){
             if(temp[i].id==this.state.chosenAlgorithmForParameters){
                 temp[i].parameters=[value1,value2,value3,value4];
                
                 flag=1;
                 break;
                }
         }
         if(flag==0){
             alert(`Algorithm ${parseInt(this.state.chosenAlgorithmForParameters,10)+1} is not selected!`);
           
             
         }   
         else{  
                this.setState({chosenAlgorithms:temp, isParametersOpen:false});
    
            }
            
            this.props.getAlgos(this.state.chosenAlgorithms);
        }   
    OpenDetailsModal =(e)=>{
        let targetID=e.target.id;
      
        if(this.state.chosenAlgorithmForDescription==this.props.itemList[targetID]){
            this.setState({isDescriptionOpen:false, chosenAlgorithmForDescription:-1});
        }
        else{
            this.setState({isDescriptionOpen:true, chosenAlgorithmForDescription:this.props.itemList[targetID]});
          
        }
          e.preventDefault();
    }
    ChooseAlgorithm = (e,i)=>{
     
        let chosenAlgos=[...this.state.isChosen];
        let temp=[...this.state.chosenAlgorithms];       
        if(this.state.isChosen[i]==false){
            chosenAlgos[i]=true;
            temp.push({id:i,parameters:["default",2,false,"default"]});
            this.setState({chosenAlgorithms:temp,isChosen:chosenAlgos},()=>this.props.getAlgos(this.state.chosenAlgorithms));
        }
        else {            
            chosenAlgos[i]=false;
            for(let k =0;k<temp.length;k++){
                if(temp[k].id==i){
                    
                    temp.splice(k,1);
                    break;
                }

            }          
            this.setState({chosenAlgorithms:temp,isChosen:chosenAlgos},()=>this.props.getAlgos(this.state.chosenAlgorithms));
           
        }
        
      }
    render (){
      
        let myalgos=this.props.itemList.map((alg,i)=>{ return (
      
            <form  key={i} className="selectionBox" >
                <label style={{color:  "rgb(84, 85, 87)"}}>
                      {alg.name}   
                    
                </label>     
                <div style={{width:"30%", float:"right",marginTop:"2%"}} >
                    <button className="btn iconSettings"  id={i} onClick={this.OpenParametersModal} > <i id={i} className="material-icons" > settings</i> </button>
                    <button  className="btn iconMore" id={i} onClick={this.OpenDetailsModal}><i id={i} className="material-icons " >more_horiz </i></button>
                     
                    <input type="checkbox" id={`algo${i}`}  onChange={(e)=>this.ChooseAlgorithm(e,i)}  
                    checked={this.state.isChosen[i]}/>
                </div>
            </form>
            

        

        )}); 
       
        return (
             <div   className="scroller item">
                
                    {myalgos}
                  
                    {this.state.isDescriptionOpen&& this.state.chosenAlgorithmForDescription!=-1 ? <DetailsModal closeFromModal={this.handleCloseDescription} algo={this.state.chosenAlgorithmForDescription } />:"" }
                     
                    {this.state.isParametersOpen ?< ParametersModal chosenAlgorithms={this.state.chosenAlgorithms} closeFromModal={this.handleCloseParameters} onParameterSubmit={this.handleParameterSubmit} 
                    algorithmID={parseInt(this.state.chosenAlgorithmForParameters)}/> :"" }
                  
                
             </div>
            

        );


    }


}
export default ScrollAlgorithm;