import './App.css';
import { useState } from 'react';


/** 
let count = 0;
  function Button(){
     const [count, setCount] = useState(0);
     function handleClick(){
       setCount(count+1);
    }
    return(
       <button onClick={handleClick}> Click Me - {count}</button>
     )
  }
  function App(){
    return(
      <Button />
    )
  }
  */

// Single count using useState
/**  function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1)
  }

  return (
    <>
    <button onClick={handleClick}>Click me</button>
    <p>{count}</p>
    </>
  )
 } */


// Up Down counter using useState
/** function App(){
  const [count, setCount] = useState(0);
  function handleUpCount(){
    setCount(count+1);
  }
  function handleDownCount(){
    setCount(count-1);
  }
  return(
    <>
    <button onClick={handleUpCount}>Up count</button>
    <button onClick={handleDownCount}>Down count</button>
    <p>{count}</p>
    </>
  )
}*/

 
// Rendering multiple objects and storing them in key value pair bcoz every product should have it's unique id

/** const products= [
  {id:1, product:"Jeans"},
  {id:2, product:"Kurta"},
  {id:3, product:"Shirt"},
  {id:4, product:"shoes"}
]

const isInCart= false;
const isLoading = false;

function Loader(){
  return(
    <h1> Loading....</h1>
  )
}

function Products(){
  return(
    <h1> Products List....</h1>
  )
}

function App() {
  return (
    <ul>
      {
        products.map((item) =>
          <li style={{color:`${item.id % 2 === 0 ? "green": "red"}`,fontSize:'10px'}} 
          key= {item.id}> {item.product} </li>
        )
      }
       <button>
        {isInCart? "Go To Cart" : "Add to Cart"}
      </button>
      {
        isLoading ? <Loader /> : <Products />
      }  
    </ul>
  );
}
*/








/**  function Message({name, age, city}){
   return(
      <p> {name} {age} {city} </p>
    )
  }
  function handleClick(event){
     console.log(event);
  }

  function handleChange(event){
     console.log(event.target.value);
  }
  function App(){
     return(
       <Message name="Sadaf " age="24" city= "Agra"/>
    )
}
*/

// props

// function Button({text,message, numbers}){ 
//   console.log( numbers?.a ? "number found" : "numbers not found");
//   return(
//    <> <button>{text}
//     </button>
//     <p>{message}</p>
//     </>  
//   )
// };

// function App() {
//   return (
//   //   <div className="App">
//   // <Button numbers= {{a: [1,2,3],b: [1,2,3,4,5] }}/>
//   //   <Button text="black" message ="dosta lulu bakas pro max"/>
//   //   <Button text="Yellow" message ="dosta lulu bakas pro pro max"/>
//   //   </div>
//   // 

//   );
// }

export default App;
