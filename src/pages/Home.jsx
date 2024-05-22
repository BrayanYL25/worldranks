import Search from '../components/Search'
import Header from '../components/Header'
import Table from '../components/Table'
import Controller from '../components/Controller'
import { useContext } from 'react'
import { Countries } from '../context/Countries'
import Debugger from '../components/Debugger'

export default function Home () {
  const { state } = useContext(Countries)

  return (
    <main className='min-h-screen bg-midnight font-vietnampro'>
      <Header />
      <section className='w-[95%] p-8 mx-auto bg-midnight rounded-xl relative bottom-10 border-[0.5px] border-graphite grid grid-cols-12'>
        <Search result={state.length} />
        <Controller />
        <Table data={state} />
        <Debugger />
      </section>
    </main>
  )
}
