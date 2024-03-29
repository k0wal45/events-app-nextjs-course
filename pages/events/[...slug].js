import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"


const FilteredEventsPage = () => {
  const router = useRouter()

  const filterData = router.query.slug

  if (!filterData) {
    return <p className="center">Loading...</p>
  }

  const filterYear = filterData[0]
  const filterMonth = filterData[1]

  const numYear = +filterYear
  const numMonth = +filterMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 
  ) {
    return <p className="center">Invalid filter please adjust your values!</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if(!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No events found for the chosen filter</p>
  }

  return (
    <div>
      <EventList items={filteredEvents}/>
    </div>
  )
}

export default FilteredEventsPage
