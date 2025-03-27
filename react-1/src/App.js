import { Button1, Button3 } from "./ButtonLib";
import MyB from "./MyButton";
import AboutPage from "./AboutPage";
import Profile from "./Profile";

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyB /><br/>
      <Button1 />&nbsp;
      <Button3 />
      <AboutPage />
      <Profile />
    </div>
  );
}
