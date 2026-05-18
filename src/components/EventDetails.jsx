import Header from "./Header";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";

const EventDetails = () => {

    const { id } = useParams();

    const { data, loading, error } = useFetch(`https://bi-assignment-1-backend-sigma.vercel.app/events/${id}`);

    console.log(data);

    return (
        <>
          <Header/>

          <main className="container py-4">
          <div className="row">
            <div className="col-md-6">
                <h1 className="display-6 fw-bold my-2">{ data?.title }</h1>

                <p className="my-2">Hosted By: <br /><b>{ data?.hostedBy }</b></p>

                <img src={data?.image} alt="event image" className="img-fluid my-2"/>

                <div className="my-2">
                  <h3 className="fw-bold">Details:</h3>
                  <p>{ data?.details }</p>
                </div>

                <div className="my-2">
                  <h3>Additional Infromation: </h3>
                  <p><b>Dress Code: </b>{ data?.dressCode }</p>
                  <p><b>Age Restrictions: </b>{ data?.ageRestrictions }</p>
                </div>

                <div className="my-2">
                    <h3>Event Tags:</h3>
                    {
                        data?.eventTags.map((tag) => (
                            <a href="" className="btn btn-danger me-2">{ tag }</a>
                        ))
                    }
                </div>
            </div>

            <div className="col-md-2"></div>

            <div className="col-md-4 my-2">

             <div className="card">
             <div className="card-body">
                <p className="py-2">{ data?.date }</p>
                <p className="py-2">Marketing city <br />{ data?.MarketingCity }</p>
                <p className="py-2">{ data?.eventPrice }</p>
             </div>
             </div>

             <div className="py-4">
                <h3 className="pb-2">Speakers:  { data?.speakers.length } </h3>
                <div className="row">
                    {
                        data?.speakers?.map((speaker) => (
                            <div className="col-md-6">
                            <div className="card h-100">
                            <div className="card-body text-center">
                                <img src={speaker.image} alt="speaker image" className="rounded-circle img-fluid mb-2" style={{ width: "100px", height: "100px", objectFit: "cover" }}/>
                                <br />
                                <b>{speaker.name}</b>
                                <p>{speaker.designation}</p>
                            </div>
                            </div>
                            </div>
                        ))
                    }
                </div>

                <div className="d-flex justify-content-center">
                <a href="" className="btn btn-danger px-4 mt-4">RSVP</a>
                </div>

             </div>

            </div>
          </div>
          </main>
        </>
    )
}

export default EventDetails;
