import { useContext } from 'react'
import { Countries } from '../context/Countries'

export default function Search ({ result }) {
  const { handleSearch } = useContext(Countries)

  return (
    <div className='col-start-1 col-span-12 flex justify-between'>
      <h3 className='font-semibold text-graphite font-vietnampro'>Found {result} countries</h3>

      <form className='w-[350px] flex gap-1 bg-stone px-2 py-2 rounded-lg' onSubmit={handleSearch}>
        <label htmlFor='search'>
          <img src='/worldranks/Search.svg' alt='Lupe icon' className='pl-1' />
        </label>
        <input type='text' name='search' id='search' className='bg-transparent text-sm !text-graphite outline-none border-none focus:outline-none focus:shadow-none focus:border-none focus:ring-0 py-0 w-[85%]' placeholder='Search by Name, Region, Subregion' />
      </form>
    </div>
  )
}
