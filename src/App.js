
import { Component } from 'react';
import './App.css';

class App extends Component{

state = {
content:null,
author:null
}

 async componentDidMount(){
const url ="https://quotes-api-self.vercel.app/quote";
const response = await fetch(url);
const data = await response.json();
this.setState({content:data.content, author: data.author})
console.log (data.content, data.author);
  }

  render() {
   
    return (
      <div>
      <p>{this.state.content}</p>  
    <p>{this.state.author}</p>
      </div>
    );
  }

}

export default App;
