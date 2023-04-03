import React from "react";
import Layout from "./components/Layout/Layout";
import AgeHandler from "./components/Age/AgeHandler";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <div>
      <Layout>
        <Header />
        <AgeHandler />
      </Layout>
    </div>
  );
}

export default App;
