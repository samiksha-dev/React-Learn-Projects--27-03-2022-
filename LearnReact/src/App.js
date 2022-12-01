import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import Greet from "./Greet";
import Welcome from "./Welcome";
import FunctionClick from "./FunctionClick";
import ClassClick from "./ClassClick";
import EventBind from "./EventBind";
import ParentComponent from "./ParentComponent";
import UserGreetings from "./UserGreetings";
import List from "./List";
import Stylesheet from "./Stylesheet";
import Inline from "./Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form1 from "./Form1";
import LifecycleA from "./LifecycleA";
import ParentComp from "./ParentComp";
import RefsDemo from "./RefsDemo";
import UseStateHookL from "./UseStateHookL";
import Message from "./Message";
import ClickCounter from "./ClickCounter";
import Hover from "./Hover";
import UseStateDemo from "./UseStateDemo";
import HookCountertwo from "./HookCountertwo";
import UseStatewithObject from "./UseStatewithObject";
import UseStateThapa from "./UseStateThapa";
import UseStateArray from "./UseStateArray";
import UseStaeObject from "./UseStaeObject";
import BasicToDo from "./BasicToDo";
import ShortCircuitEval from "./ShortCircuitEval";
import BasicForm from "./BasicForm";
import UseEffectThapa1 from "./UseEffectThapa1";
import UseEffectDependencyListThapa2 from "./UseEffectDependencyListThapa2";
import UseEffectCleanUp3 from "./UseEffectCleanUp3";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./React_Router/Home";
import About from "./React_Router/About";
import Contact from "./React_Router/Contact";
import Error from "./components/Error";
import UpdatedToDoThapa4 from "./UpdatedToDoThapa4";
import UseEffectAPIThapa from "./UseEffectAPIThapa";
import PortalsDemo from "./PortalsDemo";
import { UserProvider } from "./Context";
import ComponentC from "./ComponentC";
import setDemo from "./setDemo";

function App() {
  return (
    <div>
      {/* <ParentComponent /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Greet name="Samiksha" heroName="WonderWoman" />
      <FunctionClick /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form1 /> */}
      {/* <UserGreetings />
    <ParentComponent />
      <Greet name="Samiksha" heroName="WonderWoman" />
      
      <Counter />
      <Welcome name="Neelam" heroName="SuperWoman" />
      <FunctionClick />
      <ClassClick />
      <EventBind /> */}
      {/* <List />
      <Stylesheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <LifecycleA /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <UseStateHookL /> */}
      {/* <List /> */}
      {/* <Counter /> */}
      {/* <ClickCounter /> */}
      {/* <Hover /> */}
      {/* <UseStateDemo /> */}
      {/* <HookCountertwo /> */}
      {/* <UseStatewithObject /> */}
      {/* <UseStateThapa /> */}
      {/* <UseStateArray /> */}
      {/* <UseStaeObject /> */}
      {/* <BasicToDo /> */}
      {/* <ShortCircuitEval /> */}
      {/* <BasicForm /> */}
      {/* <UseEffectThapa1 /> */}
      {/* <UseEffectDependencyListThapa2 /> */}
      {/* <UseEffectCleanUp3 /> */}
      {/* <UpdatedToDoThapa4 /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Helllo</div>} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} /> */}
      {/* jaise upar teen page ke alawa kuch bhi ho uske liye path="*" */}
      {/* </Routes>
      </BrowserRouter> */}

      {/* NESTED ROUTING */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} /> */}
      {/* jaise upar teen page ke alawa kuch bhi ho uske liye path="*" */}
      {/* </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <UseEffectAPIThapa /> */}
      {/* <PortalsDemo /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicToDo />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter> */}
      {/* <UserProvider value="Samiksha">
        <ComponentC />
      </UserProvider> */}
      <setDemo />
    </div>
  );
}

export default App;
