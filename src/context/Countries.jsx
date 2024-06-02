import { createContext, useEffect, useReducer, useState } from 'react'
import getCountries from '../utils/getCountries'
import { ACTIONS } from '../consts/consts'

export const Countries = createContext()

const reducer = (state, action) => {
  const { type, payload, search, regions, independent, unmember } = action

  if (type === ACTIONS.INIT) {
    return payload.sort((a, b) => b.population - a.population)
  } else if (type === ACTIONS.SORT_POPULATION) {
    return [...state].sort((a, b) => b.population - a.population)
  } else if (type === ACTIONS.SORT_ALPHABET) {
    return [...state].sort((a, b) => a.name < b.name ? -1 : 1)
  } else if (type === ACTIONS.REGION) {
    if (regions.length === 0) return payload

    return payload.filter(({ region }) => regions.some(r => r === region))
  } else if (type === ACTIONS.SEARCH) {
    if (search === '') return payload

    return payload.filter(c => c.name === search || c.region === search || c.subregion === search)
  } else if (type === ACTIONS.INDEPENDENT) {
    if (!independent) return payload

    return regions.length === 0
      ? [...state].filter(country => country.independent === independent)
      : payload.filter(country => country.independent === independent)
  } else if (type === ACTIONS.UNMEMBER) {
    if (!unmember) return payload

    return regions.length === 0
      ? [...state].filter(country => country.unMember === unmember)
      : payload.filter(country => country.unMember === unmember)
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
      const newRegion = [...prev]
      const index = prev.findIndex(r => r === reg)

      if (index !== -1) {
        newRegion.splice(index, 1)

        return newRegion
      }

      return [...prev, reg]
    })
  }

  const filterIndependent = ({ independent }) => {
    dispatch({ type: ACTIONS.INDEPENDENT, payload: initial, regions: region, independent })
  }

  const filterUnMember = ({ unmember }) => {
    dispatch({ type: ACTIONS.UNMEMBER, payload: initial, regions: region, unmember })
  }

  const handleSearch = (event) => {
    event.preventDefault()

    dispatch({ type: ACTIONS.SEARCH, payload: initial, search: event.target.search.value })
  }

  useEffect(() => {
    getCountries()
      .then(setInitial)
      .catch(error => {
        console.error(error)
        setInitial([])
      })
  }, [])

  useEffect(() => init(initial), [initial])

  useEffect(() => {
    dispatch({ type: ACTIONS.REGION, payload: initial, regions: region })
  }, [region])

  return (
    <Countries.Provider value={{ state, region, init, sortPopulation, sortAlphabet, filterRegion, handleSearch, filterIndependent, filterUnMember }}>
      {children}
    </Countries.Provider>
  )
}
