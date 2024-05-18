export default async function getCountries () {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const countries = await res.json()

    return countries?.map(({ flags, name, population, region, area, subregion, languages, currencies, capital, borders, independent, unMember }, index) => ({
      id: index,
      img: flags.png,
      alt: flags.alt,
      name: name.common,
      oficial: name.official,
      population,
      region,
      area,
      subregion,
      languages,
      currencies,
      capital,
      borders: borders?.map(border => countries?.find(({ fifa }) => fifa === border)),
      independent,
      unMember
    }))
  } catch (error) {
    console.error(`There was an error fetching data ${error}`)
  }
}
