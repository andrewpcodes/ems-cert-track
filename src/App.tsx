import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import { createTodo as createTodoMutation } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import "./App.css";

Amplify.configure(awsconfig);

function App() {
  useEffect(() => {
    //myFirstTodo();
    result();
  });

  const myFirstTodo = async () => {
    const inputs = { name: "Hello", description: "World" };
    const result = await API.graphql({
      query: createTodoMutation,
      variables: { input: inputs },
    });
    console.log(result);
  };

  const result = async () => {
    const data = await API.graphql({ query: listTodos });
    console.log(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
