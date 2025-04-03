import { Button1, Button3 } from "./ButtonLib";
import MyB from "./MyButton";
import AboutPage from "./AboutPage";
import Profile from "./Profile";
import ShoppingList from "./ShoppingList";
import './App.css'

export default function App() {
  return (
    <div className="wrapper">
    <div>
      <h1>Welcome to my app</h1>
      <MyB /><br/>
      <Button1 />&nbsp;
      <Button3 />
      <AboutPage />
      <Profile />
      <ShoppingList />
    </div>
    <div>
      <h1>hi</h1>
      <MyB /><br/>
      <MyB /><br/>
      <MyB /><br/>
    </div>
    </div>
  );
}
