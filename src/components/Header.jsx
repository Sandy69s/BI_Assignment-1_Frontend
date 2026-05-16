

const Header = ( { setTitle } ) => {
    return(
        <>
          <div className="container py-2 d-flex justify-content-between" >
            <div>
                
                <a href="/" className="navbar-brand fs-1 text-danger brand-cursive"> Meetup </a>
            </div>
            <div className="mt-2">
                <input type="text" placeholder="search by title" className="form-control" onChange={ (e) => setTitle(e.target.value) }/>
            </div>
          </div>
          <hr className="container" />
        </>
    )
}

export default Header;