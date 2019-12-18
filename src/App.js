import React, { Fragment } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.css";
import { DatePicker, Timeline, PageHeader } from "antd";
import Layout from "./components/layouts/layout";
import Experience from "./components/experience/experience";
import About from "./components/about/about";
import Project from "./components/projects/projects";
import Contact from "./components/contact/contact";

const renderData = () => {
  if (window.innerWidth <= 800) {
    return (
      <Fragment>
        <About />

        <Experience />
        <Project />
        <Contact />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Route path="/" exact component={About} />

        <Route path="/experience" exact component={Experience} />
        <Route path="/projects" exact component={Project} />
        <Route path="/contact" exact component={Contact} />
      </Fragment>
    );
  }
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
        {renderData()}
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
