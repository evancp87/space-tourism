// import React from 'react'
// import { render } from '@testing-library/react'
import PlanetProvider, { SpaceContext } from '../services/Context'

it('should render the current planet name', () => {
  const TestComponent = () => {
    const { currPlanet } = React.useContext(SpaceContext)
    return <div>{currPlanet}</div>
  }

  const { getByText } = render(
    <PlanetProvider>
      <TestComponent />
    </PlanetProvider>
  )

  expect(getByText('Moon')).toBeInTheDocument()
})
