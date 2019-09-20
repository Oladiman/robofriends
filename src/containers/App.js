import React,{Component} from 'react';
import Searchbox from '../components/Searchbox';
import Cardlist from '../components/Cardlist';
import {robots} from '../robots';
import scroll from '../components/scroll';
import './App.css'


class App extends Component {
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:'',
        }
    }
    onSearchChange =(event)=>{
        this.setState({searchfield:event.target.value})
        

    }
    render(){
        const {robots, searchfield}=this.state;
        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1 className='f1'>ROBOFRIENDS</h1>
                <Searchbox  searchChange={this.onSearchChange}/>
                <scroll>
                <Cardlist robots={filteredRobots}/>
                </scroll>

            </div>
    
        );

    }

}

export default App;
