const Signin = () => {
    return (
        <div>
            <h2>Signin</h2>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Email address</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Signin