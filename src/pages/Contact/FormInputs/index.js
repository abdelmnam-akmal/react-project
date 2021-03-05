function FormInputs() {
    return (
        <div className="form-input">
            <div className="container">
                <div className="row">
                    <div className="col-12 form-content">
                        <div>
                            <h2>Leave a Comment</h2>
                            <form>
                                <input type="text" name="name" placeholder="Name" />
                                <input type="email" name="email" placeholder="Email" />
                                <input type="text" name="website" placeholder="Website" />
                                <textarea placeholder="Message" />
                            </form>
                            <div className="button-form">
                                <button className="text-uppercase">
                                    send message
                                    <span className="s-overlay"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormInputs;