import React from "react";
import "./navbar.css";

class Navbar extends React.Component{
  render(){
    const categories = ["Art", "Films", "Brands", "Restaraunts"];
    var categoryList = categories.map(function(category){
              return <div className='navbar-item'>{category}</div>;
          })
    // Real thing would equal const category = this.props.category.name;
    return(
      <div className='navbar'>
          { categoryList }
      </div>
      );
  }
}

export default Navbar;




