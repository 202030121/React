import { Button1, Button3 } from "./ButtonLib";
import MyB from "./MyButton";
import AboutPage from "./AboutPage";
import Profile from "./Profile";
import ShoppingList from "./ShoppingList";
import CountState from "./CountState";
import './App.css'
import { useState } from "react";

function CountState2({count, onclick}) {
  return (
    <div>
      <button onClick={onclick}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }
  return (
    <div className="wrapper">
    <h1>Welcome to my app</h1>
    <div>
      <p>default export example</p>
      <MyB /><br/>
      <p>named export example</p>
      <Button1 />&nbsp;
      <Button3 />
      <p>wrapping example</p>
      <AboutPage />
      <p>Displaying data</p>
      <Profile />
      <p>Rendering lists</p>
      <ShoppingList />
    </div>
    <div>
      <p>Updating the screen</p>
      <CountState /><br/>
      <CountState /><br/>
      <CountState /><br/>
    </div>
    <div>
      <p>Sharing data between components</p>
      <CountState2 count={count} onclick={handleClick} />
      <CountState2 count={count} onclick={handleClick} />
    </div>
    </div>
  );
}
