import React, { createContext, useState, useEffect } from "react";


interface DefaultData {
  data: Object;
  setData: () => void;
  planets: Array<string> | undefined;
  setPlanets: () => void;
  currPlanet: string;
  setCurrPlanet: () => void;
  crew: string;
  setCrew: () => void;
  technology: string;
  setTechnology: () => void;
}
const SpaceContext = createContext<DefaultData>({
  data: {},
  setData: () => {},
  planets: [],
  setPlanets: () => {},
  currPlanet: "",
  setCurrPlanet: () => {},
  crew: "",
  setCrew: () => {},
  technology: "",
  setTechnology: () => {},
});

type ContextProps = {
  children: React.ReactNode
}


// const storage = localStorage.getItem("items")
//   ? JSON.parse(localStorage.getItem("items"))
//   : [];

const PlanetProvider = ({ children }: ContextProps) => {
const [data, setData] = useState({})
const [planets, setPlanets] = useState([])
const [crew, setCrew] = useState("Douglas Hurley")
const [technology, setTechnology] = useState("Launch Vehicle")
const [currPlanet, setCurrPlanet] = useState<string>("Moon")

useEffect(() => {
  fetch( "../data.json")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    });
}, []);

  return (
    <SpaceContext.Provider value={{
      data, 
      setData, 
      planets, 
      setPlanets, 
      crew, 
      setCrew, 
      technology, 
      setTechnology, 
      currPlanet, 
      setCurrPlanet
  }}>
      {children}
  </SpaceContext.Provider>
  );
};

export default PlanetProvider;
