import { useContext } from 'react'
import { Countries } from '../context/Countries'

export default function ButtonFilter ({ country }) {
  const { filterRegion } = useContext(Countries)

  return (
    <button className='px-3 py-2 rounded-2xl bg-transparent text-graphite' onClick={() => filterRegion(country)}>{country}</button>
  )
}
