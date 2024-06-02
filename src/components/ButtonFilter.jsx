import { useContext, useState } from 'react'
import { Countries } from '../context/Countries'

export default function ButtonFilter ({ country }) {
  const { filterByRegion } = useContext(Countries)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    filterByRegion(country)
    setClicked(prev => !prev)
  }

  const styles = clicked ? 'bg-stone text-smoke' : 'bg-transparent text-graphite'

  return (
    <button className={`px-3 py-2 font-semibold rounded-2xl ${styles}`} onClick={handleClick}>{country}</button>
  )
}
