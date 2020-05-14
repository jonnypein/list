import React from "react";
import "./bottomNavbar.css";

class BottomNavbar extends React.Component{
  render(){
    const style = {
      fontWeight: "bold"

    };
    // Real thing would equal const category = this.props.category.name;
    return(
      <div className='bottomNavbar'>
          <div className='bottomNavbar-item' style={style}>Profile</div><div className='bottomNavbar-item' style={style}>Search</div><div className='bottomNavbar-item' style={style}>Recommendations</div><div className='bottomNavbar-item' style={style}>To Do List</div>
      </div>
      );
  }
}

export default BottomNavbar;
