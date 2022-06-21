// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

const { Todo } = initSchema(schema);

export { Todo };
