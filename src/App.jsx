import React, { Component, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import "./components/component.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import LowNavBar from "./components/LowNavBar";
import GitHub from "./components/GitHub";
const older = () => {
  const apiKey = import.meta.env.VITE_my;
  const pageSize = 20;
  const [progress, setProgress] = useState(0);
  const [query, setQuery] = useState("");
  const [colour, setColour] = useState("#120033");
  const handleColourChange = (event) => {
    setColour(event.target.value);
  };
  const [mode, setMode] = useState("light");
  const onClick = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  document.body.style.backgroundColor = mode === "light" ? "white" : colour;
  return (
    <Router>
      <NavBar
        query={query}
        setQuery={setQuery}
        mode={mode}
        colour={colour}
        handleColourChange={handleColourChange}
        onClick={onClick}
      />
      <LoadingBar
        color="#198754"
        progress={progress}
        height={3}
        loaderSpeed={1000}
        waitingTime={1250}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              mode={mode}
              colour={colour}
              searchCheck={"NO"}
              setProg={setProgress}
              apiKey={apiKey}
              key={"general"}
              pageSize={pageSize}
              country={"us"}
              category={"general"}
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              mode={mode}
              colour={colour}
              searchCheck={"NO"}
              setProg={setProgress}
              apiKey={apiKey}
              key={"business"}
              pageSize={pageSize}
              country={"us"}
              category={"business"}
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              mode={mode}
              colour={colour}
              searchCheck={"NO"}
              setProg={setProgress}
              apiKey={apiKey}
              key={"entertainment"}
              pageSize={pageSize}
              country={"us"}
              category={"entertainment"}
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              mode={mode}
              colour={colour}
              searchCheck={"NO"}
              setProg={setProgress}
              apiKey={apiKey}
              key={"health"}
              pageSize={pageSize}
              country={"us"}
              category={"health"}
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              mode={mode}
              colour={colour}
              searchCheck={"NO"}
              setProg={setProgress}
              apiKey={apiKey}
              key={"science"}
              pageSize={pageSize}
              country={"us"}
              category={"science"}
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              mode={mode}
              colour={colour}
              searchCheck={"NO"}
              setProg={setProgress}
              apiKey={apiKey}
              key={"sports"}
              pageSize={pageSize}
              country={"us"}
              category={"sports"}
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              mode={mode}
              colour={colour}
              searchCheck={"NO"}
              setProg={setProgress}
              apiKey={apiKey}
              key={"technology"}
              pageSize={pageSize}
              country={"us"}
              category={"technology"}
            />
          }
        />
        <Route
          exact
          path={`/${query}`}
          element={
            <News
              mode={mode}
              colour={colour}
              searchCheck={"YES"}
              setProg={setProgress}
              apiKey={apiKey}
              key={query}
              pageSize={pageSize}
              country={"us"}
              query={query}
              category={query}
            />
          }
        />
      </Routes>
    </Router>
  );
};
const App = () => {
  const [colour, setColour] = useState("#120033");
  const handleColourChange = (event) => {
    setColour(event.target.value);
  };
  const [mode, setMode] = useState("light");
  const onClick = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  document.body.style.backgroundColor = mode === "light" ? "white" : colour;
  return (
    <>
      <GitHub
        mode={mode}
        onClick={onClick}
        colour={colour}
        handleColourChange={handleColourChange}
      />
    </>
  );
};
export default App;
