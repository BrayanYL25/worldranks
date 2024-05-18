import { createContext, useEffect, useReducer, useState } from 'react'
import getCountries from '../utils/getCountries'
import { REGION } from '../consts/consts'

export const ACTIONS = {
  SORT_POPULATION: 'SORT_POPULATION',
  SORT_ALPHABET: 'SORT_ALPHABET',
  REGION: 'REGION',
  TYPE: 'TYPE',
  INIT: 'INIT'
}

export const Countries = createContext()

const reducer = (state, action) => {
  const { type, payload, regions } = action

  if (type === ACTIONS.INIT) {
    return payload.sort((a, b) => b.population - a.population)
  } else if (type === ACTIONS.SORT_POPULATION) {
    return [...state].sort((a, b) => b.population - a.population)
  } else if (type === ACTIONS.SORT_ALPHABET) {
    return [...state].sort((a, b) => a.name < b.name ? -1 : 1)
  } else if (type === ACTIONS.REGION) {
    if (regions[0] === REGION.ALL) return payload

    return payload.filter(({ region }) => regions.some(r => r === region))
  }
}

export function Provider ({ children }) {
  const [state, dispatch] = useReducer(reducer, [])
  const [initial, setInitial] = useState([])
  const [region, setRegion] = useState([])

  const init = (payload) => dispatch({ type: ACTIONS.INIT, payload })

  const sortPopulation = () => {
    dispatch({ type: ACTIONS.SORT_POPULATION })
  }

  const sortAlphabet = () => {
    dispatch({ type: ACTIONS.SORT_ALPHABET })
  }

  const filterRegion = (reg) => {
    setRegion(prev => {
      const index = prev.findIndex(r => r === reg)

      if (index > -1) {
        const newRegion = [...prev]
        newRegion.splice(index, 1)

        return newRegion.length === 0 ? [REGION.ALL] : newRegion
      }

      return [...prev, reg]
    })
  }

  useEffect(() => {
    getCountries()
      .then(setInitial)
  }, [])

  useEffect(() => init(initial), [initial])

  useEffect(() => {
    dispatch({ type: ACTIONS.REGION, payload: initial, regions: region })
  }, [region])

  return (
    <Countries.Provider value={{ state, init, sortPopulation, sortAlphabet, filterRegion }}>
      {children}
    </Countries.Provider>
  )
}
