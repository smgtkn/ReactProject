import React, { Component} from "react";
import "./App.css"


class DetailsModal extends Component {
 
    render( ) {
  
            
            return (
            <div className="descriptionModal">
                <div className="containerCloseButton">
                                    <button type="close" className="X" onClick={this.props. closeFromModal}>X</button>
                </div>
                <ul>
                <li>
                {this.props.algo.name}<br></br> <br></br>
                </li>
                <li>
                {this.props.algo.description}
                </li>
                </ul>
            </div>
            );

    }



}
export default  DetailsModal;