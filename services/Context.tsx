import React, {
  createContext,
  Dispatch,
  useState,
  useEffect,
  SetStateAction,
} from 'react'

interface DefaultData {
  data: Object
  setData: Dispatch<SetStateAction<{}>>
  planets: Array<string> | undefined
  setPlanets: Dispatch<SetStateAction<string[] | undefined>>
  currPlanet: string
  setCurrPlanet: Dispatch<SetStateAction<string>>
  crew: string
  setCrew: Dispatch<SetStateAction<string>>
  technology: string
  setTechnology: Dispatch<SetStateAction<string>>
  loadInitialCrew: () => void
  loadInitialTechnology: () => void
  loadInitialDestination: () => void
}
const SpaceContext = createContext<DefaultData>({
  data: {},
  setData: () => {},
  planets: [],
  setPlanets: () => {},
  currPlanet: '',
  setCurrPlanet: () => {},
  crew: '',
  setCrew: () => {},
  technology: '',
  setTechnology: () => {},
  loadInitialCrew: () => {},
  loadInitialTechnology: () => {},
  loadInitialDestination: () => {},
})

type ContextProps = {
  children: React.ReactNode
}

const PlanetProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState({})
  const [planets, setPlanets] = useState<string[] | undefined>([])
  const [crew, setCrew] = useState<string>('Douglas Hurley')
  const [technology, setTechnology] = useState<string>('Launch Vehicle')
  const [currPlanet, setCurrPlanet] = useState<string>('Moon')

  // .then((response) => response.json())
  // .then((planets) =>
  //   setPlanets(
  //     planets.filter((planet: any) => {
  //       const {
  //         name,
  //         overview: { content: overviewContent, source: overviewSource },
  //         structure: { content: structureContent, source: structureSource },
  //         geology: { content: geometryContent, source: geometrySource },
  //         rotation,
  //         revolution,
  //         radius,
  //         temperature,
  //         images: {
  //           planet: planetImage,
  //           internal: planetInternalImage,
  //           geology: planetGeologyInternal,
  //         },
  //       } = planet;
  //       if (name === currPlanet) {
  //         setData({
  //           name,
  //           overviewContent,
  //           overviewSource,
  //           structureContent,
  //           structureSource,
  //           geometryContent,
  //           geometrySource,
  //           rotation,
  //           revolution,
  //           radius,
  //           temperature,
  //           planetImage,
  //           planetInternalImage,
  //           planetGeologyInternal,
  //         });
  //       }
  //     })
  //   )
  // );
  //       }
  //     })
  //     );
  //   })

  async function loadInitialTechnology(currPlanet) {
    const response = await fetch('../../data.json')
    const data = await response.json()

    return data.technology
      .filter((tech) => tech.name === currPlanet)
      .map((tech) => ({
        name: tech.name,
        pngImage: tech.images.png,
        webpImage: tech.images.webp,
        description: tech.description,
        distance: tech.distance,
        travel: tech.travel,
      }))
  }

  async function loadInitialDestination(currPlanet) {
    const response = await fetch('../../data.json')
    const data = await response.json()

    return data.destinations
      .filter((destination) => destination.name === currPlanet)
      .map((destination) => ({
        name: destination.name,
        pngImage: destination.images.png,
        webpImage: destination.images.webp,
        description: destination.description,
        distance: destination.distance,
        travel: destination.travel,
      }))
  }

  async function loadInitialCrew(currPlanet) {
    const response = await fetch('../../data.json')
    const data = await response.json()

    return data.crew
      .filter((c) => c.name === currPlanet)
      .map((c) => ({
        name: c.destination.name,
        pngImage: c.images.png,
        webpImage: c.images.webp,
        description: c.description,
        distance: c.distance,
        travel: c.travel,
      }))
  }

  return (
    <SpaceContext.Provider
      value={{
        data,
        setData,
        planets,
        setPlanets,
        crew,
        setCrew,
        technology,
        setTechnology,
        currPlanet,
        setCurrPlanet,
        loadInitialCrew,
        loadInitialTechnology,
        loadInitialDestination,
      }}
    >
      {children}
    </SpaceContext.Provider>
  )
}

export default PlanetProvider
