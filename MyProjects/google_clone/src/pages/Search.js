import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate(); //stores browsers history-->earlier it used to be useHistory
  const search = (e) => {
    e.preventDefault();
    console.log("you hit search button >>", input); //,input se tumne jo type kia woh bhi dikhne lagega
    navigate.push("/search"); //it pushes history of search page
  };
  //if you want to type something and on pressing the enter key u want the action to occur
  //just change div to form and button ka type="submit"
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      <div className="search__buttons">
        <Button type="submit" onClick={search}>
          Google Search
        </Button>
        {/* variant is a property of material ui which provides a outline
        variant="outlined" */}
        <Button>I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
