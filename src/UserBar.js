import React,{Component} from "react";

class UserBar extends Component{


    render() {
        return(
            <div  >
                <img  alt="not uploaded" 
                src="https://previews.123rf.com/images/ylivdesign/ylivdesign1510/ylivdesign151000120/46153782-profile-icon-white-simple-image-isolated-on-blue-background.jpg" 
                className="imgCircular" />
                <h3  style={{color: " rgb(90, 115, 122)",textAlign:"center"}}>User Profile</h3>
            </div>

        )
    }


}
export default UserBar;