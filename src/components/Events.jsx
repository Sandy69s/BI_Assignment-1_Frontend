import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import useFetch from "../useFetch";

const Events = ( { title } ) => {

    const { data, loading, error } = useFetch("https://bi-assignment-1-backend-sigma.vercel.app/events");

    const [ eventType, setEventType ] = useState("");

    const filteredEvents = eventType ? data?.filter( (event) => event.eventType == eventType ) : data;

    const searchedEvents = title ? filteredEvents.filter( (event) => event.title == title ) : filteredEvents;


    return (
        <>
          <div className="container d-flex justify-content-between py-3" >
            <div>
                <h1 className="display-5 fw-bold" >Meetup Events</h1>
            </div>

            <div>
                <select name="eventType" className="form-select" onChange={ (e) => setEventType( e.target.value )  }>
                  <option value="">Select Event Type</option>
                  <option value="Online Event">Online</option>
                  <option value="Offline Event">Offline</option>
                  <option value="">Both</option>
                </select>
            </div>
          </div>

          <div className="container" >
            <div className="row">
                {
                searchedEvents?.map( (event) => ( 
                    <div className="col-md-4" >
                        <div className="card my-3">
                          <img src={ event.image } alt="event image" className="w-100 rounded"  style = { { height: "200px", objectFit: "cover" } }/>
                          <div className="card-body">
                            <p>{ event.date }</p>
                            <p>{ event.eventType }</p>
                            <h5>{ event.title }</h5>
                            <a href={ `/eventDetails/${ event._id }` } className="btn btn-primary" >View Details</a>
                        </div>
                    </div>
                    </div>
                 ) )
               }
            </div>
          </div>
        </>
    )
}

export default Events;
