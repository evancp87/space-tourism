import React, { createContext, Dispatch, useState, useEffect, SetStateAction } from "react";

interface DefaultData {
  data: Object;
  setData: Dispatch<SetStateAction<{}>>;
  planets: Array<string> | undefined;
  setPlanets: Dispatch<SetStateAction<string[] | undefined>>;
  currPlanet: string;
  setCurrPlanet: Dispatch<SetStateAction<string>>;
  crew: string;
  setCrew: Dispatch<SetStateAction<string>>;
  technology: string;
  setTechnology: Dispatch<SetStateAction<string>>;
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
const [planets, setPlanets] = useState<string[] | undefined>([]);
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
