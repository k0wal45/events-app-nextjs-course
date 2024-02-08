import { Fragment } from "react"
import EventList from "../../components/events/event-list"
import EventsSearch from "../../components/events/events-search"
import { getAllEvents } from "../../dummy-data"
import { useRouter } from "next/router"

const EventsPage = () => {
  const events = getAllEvents()
  const router = useRouter()

  function findEventHandler(year, month) {
    const fullpath =`/events/${year}/${month}`

    router.push(fullpath)
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler}/>
      <EventList items={events}/>
    </Fragment>
  )
}

export default EventsPage
