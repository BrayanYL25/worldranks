import { useContext } from 'react'
import { Countries } from '../context/Countries'
import { REGION } from '../consts/consts'
import ButtonFilter from './ButtonFilter'

const VALUES = {
  POPULATION: 'POPULATION',
  ALPHABET: 'ALPHABET'
}

export default function Controller () {
  const { sortPopulation, sortAlphabet } = useContext(Countries)

  const sortHandle = (e) => {
    const { target } = e

    if (target.value === VALUES.POPULATION) {
      sortPopulation()
    } else if (target.value === VALUES.ALPHABET) {
      sortAlphabet()
    }
  }

  return (
    <div className='xl:col-start-1 xl:col-span-3 lg:col-start-1 lg:col-span-3 col-start-1 col-span-12 flex flex-col pr-4'>
      <label htmlFor='sorting' className='mb-2 text-graphite font-semibold text-sm'>Sort by</label>
      <select name='sorting' id='sorting' onChange={sortHandle} className='bg-transparent text-smoke border-2 border-stone rounded-2xl p-3'>
        <option value={VALUES.POPULATION} defaultValue>Population</option>
        <option value={VALUES.ALPHABET}>Alphabet</option>
      </select>

      <h2 className='mt-4 mb-2 text-graphite font-semibold text-sm'>Region</h2>
      <div className='flex gap-2 flex-wrap'>
        <ButtonFilter country={REGION.AMERICAS} />
        <ButtonFilter country={REGION.ANTARTIC} />
        <ButtonFilter country={REGION.AFRICA} />
        <ButtonFilter country={REGION.ASIA} />
        <ButtonFilter country={REGION.EUROPE} />
        <ButtonFilter country={REGION.OCEANIA} />
      </div>

      <h2 className='mt-4 mb-2 text-graphite font-semibold'>Status</h2>
      <div className='flex gap-3 flex-col'>
        <div className='flex items-center gap-2 text-smoke'>
          <input type='checkbox' name='unitednations' id='unitednations' className='bg-transparent rounded-md' /><p>Member of United Nations</p>
        </div>

        <div className='flex items-center gap-2 text-smoke'>
          <input type='checkbox' name='independent' id='independent' className='bg-transparent rounded-md' /><p>Independent</p>
        </div>
      </div>
    </div>
  )
}