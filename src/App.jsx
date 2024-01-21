import React from "react";
import Form from "./components/Form";
import Button from "./components/Button";
import MainContext from "./components/Context/MainContext";
import './global.css'
export default function App() {
  return (
    <>
    <MainContext.Provider value={'Welcome'}>
      <Form>
        <Button />
      </Form>
    </MainContext.Provider>
      
    </>
  );
}
