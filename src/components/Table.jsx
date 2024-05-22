import NotFound from './NotFound'
import Row from './Row'

export default function Table ({ data }) {
  return (
    <table className='w-[100%] mt-6 lg:col-start-4 lg:col-span-9 col-start-1 col-span-12'>
      <thead className='text-lightGray border-b border-graphite text-graphite'>
        <tr>
          <th className='pb-4 text-sm font-medium text-center'>Flag</th>
          <th className='pb-4 text-sm font-medium text-center'>Name</th>
          <th className='pb-4 text-sm font-medium text-center'>Population</th>
          <th className='pb-4 text-sm font-medium text-center'>Area (km<sup>2</sup>)</th>
          <th className='pb-4 text-sm font-medium text-center'>Region</th>
        </tr>
      </thead>
      <tbody>
        {
          data.length === 0 && <NotFound />
        }
        {
          data.length > 0 && data.map(({ id, img, alt, name, population, region, area }) => (
            <Row key={id} img={img} alt={alt} name={name} population={population} region={region} area={area} />
          ))
        }
      </tbody>
    </table>
  )
}
