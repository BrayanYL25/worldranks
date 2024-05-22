import { useContext, useState } from 'react'
import { Countries } from '../context/Countries'

export default function ButtonFilter ({ country }) {
  const { filterRegion } = useContext(Countries)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    filterRegion(country)
    setClicked(prev => !prev)
  }

  const styles = clicked ? 'bg-stone text-smoke' : 'bg-transparent text-graphite'

  return (
    <button className={`px-3 py-2 rounded-2xl ${styles}`} onClick={handleClick}>{country}</button>
  )
}
