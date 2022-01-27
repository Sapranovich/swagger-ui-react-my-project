import React from "react";
import ReactDOM from "react-dom";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function App() {

  return (
    <div className="App">
      <SwaggerUI url="https://raw.githubusercontent.com/Sapranovich/swagger-ui-react-my-project/main/swagger.yml" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
