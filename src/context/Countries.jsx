import { createContext, useEffect, useReducer, useState } from 'react'
import getCountries from '../utils/getCountries'
import { ACTIONS } from '../consts/consts'

export const Countries = createContext()

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTIONS.INIT:
      return payload.sort((a, b) => b.population - a.population)
    case ACTIONS.SORT_POPULATION:
      return [...state].sort((a, b) => b.population - a.population)
    case ACTIONS.SORT_ALPHABET:
      return [...state].sort((a, b) => a.name < b.name ? -1 : 1)
    case ACTIONS.FILTER: {
      const { countries, regions, independent, unmember } = payload

      return countries
        .filter(country => regions.length === 0 || regions.some(r => r === country.region))
        .filter(country => {
          if (!independent) return true
          return country.independent === independent
        })
        .filter(country => {
          if (!unmember) return true
          return country.unMember === unmember
        })
    }
    case ACTIONS.SEARCH: {
      const { countries, search } = payload

      return countries.filter(c => search === '' || c.name === search || c.region === search || c.subregion === search)
    }
    default:
      return []
  }
}

export function Provider ({ children }) {
  const [state, dispatch] = useReducer(reducer, [])
  const [initial, setInitial] = useState([])
  const [region, setRegion] = useState([])

  const init = (payload) => dispatch({ type: ACTIONS.INIT, payload })

  const sort = (sortType) => dispatch({ type: sortType })

  const filterByRegion = (reg) => {
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

  const filterBy = (filters) => {
    dispatch({ type: ACTIONS.FILTER, payload: { countries: initial, regions: region, ...filters } })
  }

  const search = (event) => {
    event.preventDefault()

    dispatch({ type: ACTIONS.SEARCH, payload: { countries: initial, search: event.target.search.value } })
  }

  useEffect(() => {
    getCountries()
      .then(setInitial)
      .catch(() => setInitial([]))
  }, [])

  useEffect(() => init(initial), [initial])

  useEffect(() => {
    dispatch({ type: ACTIONS.FILTER, payload: { countries: initial, regions: region } })
  }, [region])

  return (
    <Countries.Provider value={{ state, region, init, sort, filterByRegion, search, filterBy }}>
      {children}
    </Countries.Provider>
  )
}
