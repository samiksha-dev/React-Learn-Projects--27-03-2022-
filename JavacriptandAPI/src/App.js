import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spaceing={3} style={{ width: "100%" }}></Grid>
      <Grid item xs={12} md={4}>
        {/* this means small devices for eg. mobile  me poore 12 columns lo bt medium me 4 */}
        <List />
      </Grid>
      <Grid item xs={12} md={8}>
        {/* this means small devices for eg. mobile  me poore 12 columns lo bt medium me 8 */}
        <Map />
      </Grid>
    </div>
  );
}

export default App;
