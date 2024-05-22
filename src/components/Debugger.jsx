import { useContext } from 'react'
import { Countries } from '../context/Countries'

export default function Debugger () {
  const { region } = useContext(Countries)

  return (
    <div className='fixed z-50 top-10 text-smoke'>
      {
        region.join('  ')
      }
    </div>
  )
}
