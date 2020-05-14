import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav_bar/navbar';
import List from './components/list';
import BottomNavbar from './components/bottom_navbar/bottomNavbar';
import HorizantScroller from './components/horizontal_scroll/horizontalscroll';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {


  render() {
    const list = {};
    const bottomNavbar = {};
    const horizantscroller = {};


    return(
      <div>
        <HorizantScroller horrizontalScroller={horizantscroller}/>
        <List list={list}/>
        <BottomNavbar bottomNavbar={bottomNavbar}/>
      </div>

    );
  }
}

export default App;
