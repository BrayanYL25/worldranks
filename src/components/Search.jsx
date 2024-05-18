export default function Search ({ result }) {
  return (
    <div className='col-start-1 col-span-12 flex justify-between'>
      <h3 className='font-semibold text-graphite font-vietnampro'>Found {result} countries</h3>

      <form className='w-[250px] flex gap-1 bg-stone px-1 py-2 rounded-lg'>
        <label htmlFor='search'>
          <img src='/worldranks/Search.svg' alt='Lupe icon' />
        </label>
        <input type='text' name='search' id='search' className='bg-transparent text-sm outline-none border-none focus:outline-none focus:shadow-none focus:border-none focus:ring-0 py-0 w-auto text-graphite' placeholder='Search by Name, Region, Subregion' />
      </form>
    </div>
  )
}
