import logo from "./logo.svg";
import "./App.css";
import Intro from "./Introduction1/Intro";
import Count from "./RepresentationOfState2/Count";
import Movie from "./Project3/Movie";
import ClaasC from "./StatewithClassComponent/setStateandClass";
//Creating a personal Component
const Person = (props) => {
  return (
    <>
      <h1>Name:{props.name}</h1>
      <h1>Age:{props.age}</h1>
      <h1>Last Name:{props.lastName}</h1>
    </>
  );
};
const App = () => {
  return (
    <div className="App">
      <ClaasC />
      {/* <Intro />
      <Person name={"Samiksha"} age={24} lastName={"Sahu"} /> */}
      {/* strings me {} yeh hata skte ho direct name="Samiksha" bhi chalega */}
      {/* <Person name={"Shashwat"} age={22} lastName={"Sahu"} />
      <Person name={"Neelam"} age={52} lastName={"Sahu"} />
      <Person name={"Apurva"} age={25} lastName={"Viswakarma"} />
      <Count /> */}
      {/* <Movie /> */}
    </div>
  );
};

export default App;
