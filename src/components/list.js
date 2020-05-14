import React from "react";
import "./list.css";

class List extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        list: ["Dark Night", "Whiplash", "Inception", "Moonlight", "Gladiator", "SpiderMan", "Batman", "Hulk", "Avengers", "Normal People", "Inbetweeners"]
      }
    }

addItem(e){
  e.preventDefault();
  const {list} = this.state;
  const newItem = this.newItem.value;

  this.setState({
    list: [...this.state.list, newItem]
  })
  this.addForm.reset();
}

render(){
  const {list} = this.state;
    return(
      <div className='list'>
      {
        list.map(item => {
          return <p key={item}>{item}</p>
        })
      }
      <form ref={input => this.addForm = input } onSubmit={(e) => {this.addItem(e)}}>
      <div className="form-group">
        <label className='sr-only' htmlFor='newItemInput'> </label>
          <input ref={(input) =>{this.newItem = input}} type="text" placeholder="Whats to cool" id='newItemInput' />
          <button type="submit" className="listButton">Add</button>
      </div>
      </form>
      </div>
      );
  }
}

export default List;
