import logo from './logo.svg';
import './App.css';
import React from 'react';

// class App extends React.Component
// {
//   state = {counter: 0}
// incrementCounter = () =>
// {
// this.setState({counter:parseInt(this.state.counter)+1})
// }

// static getDerivedStateFromProps()
// {
// console.log("Inside the getDerivedStateFromProps")
// }

// // Overridden render function
// render()
// {
// console.log("Inside the render method")
// console.log(this.props)
// return (
// <div>
// <button onClick={this.incrementCounter}>Click me</button>
// <br/>
// Counter:{this.state.counter}
// </div>
// )
// }

// componentDidMount()
// {
// console.log("Inside the componentDidMount method")
// }


// }

//Class component
class App extends React.Component
{
  //declaring the state
  state = {count: 0}
  //setCount
  //setAditya

  componentDidMount()
  {
    console.log("--------------------componentDidMount--------------------")
  }
  constructor(props)
  {
    super(props)
    console.log("------------Constructor of App------------")
  }

  //Mounting
  //Updating
  static getDerivedStateFromProps()
  {
    console.log("------------getDerviedStateFromProps------------")
  }

  shouldComponentUpdate()
  {
    console.log("------------shouldComponentUpdate------------")
    console.log(this.state.count)
    return true;
  }

  updateCount()
  {
    console.log("Hello button click! ")
    //this.state.count = this.state.count+1
    this.setState({count: this.state.count+1})
  }
  printCount()
  {
    console.log(this.state.count)
  }

  render()
  {
    console.log("--------------------Rendered the UI--------------------")
    return <div>
      Hello Functional component
      <div>
        Prop 1: {this.props.color}
        <br/>
        Prop 2: {this.props.size}
        <br/>
        <button onClick={()=>this.printCount()}>Click me!</button>
      </div>
      <div>
        State: {this.state.count}
        <br/>
        <button onClick={()=>this.updateCount()}>Increment count</button>
      </div>
    </div>
  }

  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log("--------------------getSnapshotBeforeUpdate--------------------")
    console.log("prevProps")
    console.log(prevProps)
    console.log("----------")
    console.log("props")
    console.log(this.props)
    console.log("----------")
    console.log("prevState")
    console.log(prevState)
    console.log("----------")
    console.log("state")
    console.log(this.state)
    return true;
  }

  componentDidUpdate()
  {
    console.log("--------------------componentDidUpdate--------------------")
  }

}


//Functional Component
// function App()
// {

// }
// const App = (props) =>
// {
//   console.log(props)
//   const myElement = 
//   <div>
//     Hello Functional component
//     <div>
//       Prop 1: {props.color}
//       <br/>
//       Prop 2: {props.size}
//       <br/>
//       <button onClick={props.clickEvent}>Click me!</button>
//     </div>
//   </div>
//   return myElement
// }

// function App()
// {
//   return <div>Hello Functional component</div>
// }

//Class component
// class App extends React.Component
// {
//   myComponent = React.createElement(
//     "div",
//     null,
//     React.createElement("p", null, "This is a simple example of paragraph in a Div of React component"),
//     React.createElement("ul", null,),
//     React.createElement("li", null, "Item 1"),
//     React.createElement("li", null, "Item 2"),
//     React.createElement("li", null, "Item 3")
//   )
//   render()
//   {
//     return this.myComponent;
//   }
// }

// const App = () =>
// {

//   // function abc()
//   // {
//   //   console.log("This is my function ABC")
//   // }

//   var abc = () => console.log("Hello all from arrow function")

//   var def = (myVariable) =>
//   {
//     console.log("Hello all from another arrow function: "+myVariable())
//   }

//   abc()
//   console.log(def)
//   def(abc)

//   console.log("Hello world")
// myFunction()

// function myFunction()
// {
//   console.log("This is myFunction")
// }


  // let promiseArgument = (resolve, reject) =>
  // {
  //   setTimeout(()=>
  //   {
  //     console.log("in SetTimeOut")
  //     var myVariable = 1
  //     if(myVariable %2 == 0)
  //     {
  //       resolve("Resolved!!!")
  //     }
  //     else
  //     {
  //       reject("Rejected the condition check result!!")
  //     }
  //   },2*1000)
  // };

  // let myPromise = new Promise(promiseArgument)
  // console.log(myPromise)










  //let myPromiss = new Promise(promiseArgument)
  //console.log("myPromiss : "+myPromiss)

//   class RBI 
//   {
//     savingsInterest = 6;
//     LoanInterest = 6;
//     constructor()
//     {
//       console.log("RBI Constructor")
//     }

//     collectInterstonLoan()
//     {
    

//     }
//     payInterestonSavings()
//     {

//     }
//   }

//   class SBI extends RBI
//   {
//     constructor()
//     {
//       super()
//       console.log("-----SBI Constructor-----")
//     }
//   }

//   let sbi = new SBI();
//   //let sbi1 = new SBI();

//   return (
//     <div>Hello! </div>
//   );
// }

export default App;
