import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import { createTodo as createTodoMutation } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import Homepage from "./components/Homepage"
import Navbar from './components/Navbar';
import Registration from "./components/Registration"
import Login from "./components/Login"

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
        <Router>
            <Navbar />
            <div className="App-header">
           
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/Registration" element={<Registration />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
          
            </div>
        </Router>
    );
}

export default App;
