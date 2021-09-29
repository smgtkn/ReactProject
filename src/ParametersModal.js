import React, {Component} from "react";

import "./App.css"
class ParametersModal extends Component {
    constructor (){
        super();
        this.state={value1:"default",value2:2 , value3 :true,value4:"default"};
       
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