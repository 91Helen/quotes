import { Component } from 'react';
import './App.css';

class App extends Component{

 state = {
quote:null,
author:null
}

 async componentDidMount(){
const url ="https://quotes-api-self.vercel.app/quote";
const response = await fetch(url);
const data = await response.json();
this.setState({content:data.quote, author: data.author})
console.log (data.quote, data.author);
  }

  render() {
   
    return (
      <div>
      <p>{this.state.quote}</p>  
    <p>{this.state.author}</p>
      </div>
    );
  }
}

export default App;
