import React , {Component} from "react";
import "./App.css";



class ScrollCamera extends Component {
    constructor(props){
        super(props);
        this.state={chosenCamera:-1, isChecked: Array(this.props.itemList.length).fill(false) };
    }
    ChooseCamera= (e)=>{
      
        if(e.target.checked){
           if(this.state.chosenCamera!==-1){
                    let temp=[...this.state.isChecked];
                    temp[this.state.chosenCamera]=false;
                    temp[e.target.value]=true;
                    this.setState({ isChecked:temp , chosenCamera:e.target.value},()=> this.props.getCam(e.target.value));
           
          }
          else{
         
            let temp=[...this.state.isChecked];
            temp[e.target.value]=true;
            this.setState({isChecked:temp , chosenCamera:e.target.value},()=> this.props.getCam(e.target.value));
                           
                        
          }
         }
        else {
            let temp=[...this.state.isChecked];
            temp[e.target.value]=false;

            this.setState({chosenCamera: -1,isChecked :temp} ,()=>  this.props.getCam(-1));        
                
        }
        
        
        
      }
    
    render (){
        const mycams=this.props.itemList.map((cam,i)=>{ return (
            <form key={i} className="selectionBox" >
             <div>
               <label style={{color:  "rgb(84, 85, 87)"}} >
                {cam.name}  
               
                
               </label>   
                
                <input type="checkbox" id={i} className="camInput" onChange={this.ChooseCamera}  checked={this.state.isChecked[i]} value={i}/>
               
             </div>
                
           </form>
         
        
       ); 
    });
        return (
            <div  className="scroller item">
                   {mycams}
               
            </div>
            

        );


    }


   }


export default ScrollCamera;