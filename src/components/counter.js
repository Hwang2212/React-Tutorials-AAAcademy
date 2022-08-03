import React from 'react';
import "./app.css";

class Counter extends React.Component {
    state = { 
        count: Number(this.props.count)
      }
    
    // Style if Count = 4
    fourStyle = () => {
        if(this.state.count === 4){
            return(
                {color:"red", fontSize:"40px"}
                )
        }else{
            return({color:"black", fontSize:"40px"});
        }
    }

    // Button Style
    btnStyle = {
        display: "inline-block",
        fontSize: "30px",
        padding: "0px 20px",
        margin: "0px 20px",
        border: "none",
        backgroundColor: "DodgerBlue" 
    }
            
    // Decrease Function
    decreaseCount = () => {
        console.log("Decrease Count by 1");

        this.setState({count: this.state.count -1 });
    }

    // Increase Function
    increaseCount = () => {
        console.log("Increase Count by 1");

        this.setState({count: this.state.count +1});
    }
    render(){ 
        return (
            <span>
                <button className="click" onClick={this.decreaseCount} style={this.btnStyle}>-</button>
                <span style={this.fourStyle()}>{this.state.count}</span>
                <button className="click" onClick={this.increaseCount} style={this.btnStyle}>+</button> 
            </span>
        )
    }
}
 
export default Counter;