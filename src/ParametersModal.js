import React, {Component} from "react";

import "./App.css"
class ParametersModal extends Component {
    constructor (props){
        super(props);
        let val1="default";
        let val2=2;
        let val3=true;
        let val4="default";
        for(let i=0;i<this.props.chosenAlgorithms.length;i++){
            if(i==this.props.algorithmID){
                    val1=this.props.chosenAlgorithms[i].parameters[0];
                    val2=this.props.chosenAlgorithms[i].parameters[1];
                    val3=this.props.chosenAlgorithms[i].parameters[2];
                    val4=this.props.chosenAlgorithms[i].parameters[3];
                    break;
            }

        }
        this.state={value1:val1,value2:val2 , value3 :val3,value4:val4};
       
    }
    handleSubmit=(e)=>{

        this.props.onParameterSubmit(this.state.value1,this.state.value2,this.state.value3,this.state.value4);
        e.preventDefault();
    }
    handleParameterChange=(i,e)=>{
        switch(i){
            case 1 :
              
                const val1=e.target.value;                
                this.setState({value1:val1})
                break;
            case 2:
               
                const val2=e.target.value;
                this.setState({value2:val2})
                break;
            case 3:
               
                const val3=e.target.checked;              
                this.setState({value3:val3})
                break;
            case 4:
                
                const val4=e.target.value;              
                this.setState({value4:val4})
                break;
            default: 
        }
        


    }

    render( ) {
        
        
        return (
        <div className="parametersModal">
            <form style={{padding:"6%" ,display:"grid"}} onSubmit={this.handleSubmit}>
                <div>
                    <button type="close" className="X" onClick={this.props. closeFromModal}>X</button>
                </div>
                <legend>Parameters for algorithm {parseInt(this.props.algorithmID,10)+1} </legend>
                <div>
                   
                     <label >Parameter 1:</label>
                     <input  onChange={(e)=>this.handleParameterChange(1,e)} className="parametersModalInputs" type="text" id="param1"
                     value={this.state.value1}/>
                    
                </div>
                
                <div>
                     <label >Parameter 2:</label>
                         <select className="parametersModalInputs" name="param2" id="param2" 
                         onChange={(e)=>this.handleParameterChange(2,e)} value={this.state.value2}> { /* buraya value={this.state.bişey} ve onChange={handleChange} */}
                            <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                        </select>
               
                </div>
                <div>
                <label >
                      Parameter 3:
                </label>
                 <input    type="checkbox" id="param3" onChange={(e)=>this.handleParameterChange(3,e)}
                           className="checkbox parametersModalInputs" checked={this.state.value3}  />
                
                </div>
                <div>
                
                </div>
                <div>
                <label >Parameter 4:</label>
                <input className="parametersModalInputs" type="text" id="param4" onChange={(e)=>this.handleParameterChange(4,e)}  value={this.state.value4}/>
                </div>
                <input className="Submit" style= {{marginLeft:"70%" ,marginTop:"10px", color:"white"}}  type="submit"></input>
                
            </form>
        </div>
        );

}





}
export default ParametersModal;