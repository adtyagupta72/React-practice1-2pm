import logo from './logo.svg';
import './App.css';

const App = () =>
{

  // function abc()
  // {
  //   console.log("This is my function ABC")
  // }

  var abc = () => console.log("Hello all from arrow function")

  var def = (myVariable) =>
  {
    console.log("Hello all from another arrow function: "+myVariable())
  }

  abc()
  console.log(def)
  def(abc)

  console.log("Hello world")


  //let promiseArgument = ;
  let myPromiss = new Promise((resolve, reject) =>
  {
    setTimeout(()=>
    {
      var currentDateTime = new Date().getTime()
      console.log("Date time: "+currentDateTime)
      if(currentDateTime%2 == 0)
      {
        //console.log("Even")
        resolve("Resolved!!!")
      }
      else
      {
        //console.log("Odd")
        reject("Rejected!")
      }
    },2*1000)
  })
  console.log("myPromiss : "+myPromiss)

  class RBI 
  {
    savingsInterest = 6;
    LoanInterest = 6;
    constructor()
    {
      console.log("RBI Constructor")
    }

    collectInterstonLoan()
    {

    }
    payInterestonSavings()
    {

    }
  }

  class SBI extends RBI
  {
    constructor()
    {
      super()
      console.log("-----SBI Constructor-----")
    }
  }

  let sbi = new SBI();
  //let sbi1 = new SBI();

  return (
    <div>Hello! </div>
  );
}

export default App;
