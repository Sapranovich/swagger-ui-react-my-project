import React from "react";
import SwaggerUi from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

const SwaggerUI = () => {
  React.useEffect(() => {
    SwaggerUi({
      dom_id: "#swaggerContainer",
      url: "https://raw.githubusercontent.com/Sapranovich/swagger-ui-react-my-project/main/swagger.yml",
    });
  }, []);
  return <div id="swaggerContainer" />;
};

export default SwaggerUI;
