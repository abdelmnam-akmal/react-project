function FormContact() {
    return (
        <div className="form-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center form-address">
                        <div>
                            <h4>Phone</h4>
                            <ul className="list-unstyled">
                                <li>Phone 01: (+20) 1010 1084 67</li>
                                <li>Phone 01: (+20) 1010 1084 67</li>
                            </ul>
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <div className="col-md-4 text-center form-address">
                        <div>
                            <h4>Address</h4>
                            <ul className="list-unstyled">
                                <li>Mansoura, Al Daqahlia.</li>
                                <li>Egypt.</li>
                            </ul>
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                    </div>
                    <div className="col-md-4 text-center form-address">
                        <div>
                            <h4>Email</h4>
                            <ul className="list-unstyled">
                                <li>www.test.com</li>
                                <li>abdoakmal71@gmail.com</li>
                            </ul>
                            <i className="far fa-envelope"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormContact;