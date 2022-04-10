const AddTask = () => {
    return (
        <><hr />
            <h2>Add Task</h2>
            <hr />

            <form>
                <div className="row g-3">
                    <div className="col">
                        <label for="colFormLabel" className="col-form-label">Project Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="colFormLabel"></input>
                        </div>
                    </div>
                    <div className="col">
                        <label for="colFormLabel" className="col-form-label">Project ID</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="colFormLabel">
                            </input>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col">
                        <label for="colFormLabel" className="col-form-label">Task ID</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="colFormLabel"></input>
                        </div>
                    </div>

                    <div className="col">
                        <label for="colFormLabel" className="col-form-label">Project ID</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="colFormLabel">
                            </input>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col">
                        <label for="colFormLabel" className="col-form-label">Task Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="colFormLabel">
                            </input>
                        </div>
                    </div>
                    <div className="col">
                        <label for="colFormLabel" className="col-form-label">Department ID</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="colFormLabel">
                            </input>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col">
                        <label for="colFormLabel" className="col-form-label">Start Date</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id="colFormLabel">
                            </input>
                        </div>
                    </div>

                    <div className="col">
                        <label for="colFormLabel" className="col-form-label">Due Date</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id="colFormLabel">
                            </input>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label for="colFormLabel" className="col-form-label">Description</label>
                    <div className="col-sm-11">
                        <textarea className="form-control" id="colFormLabel" rows="5"></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <button type="button" className="btn btn-primary">Save</button>

                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary">Back</button>
                    </div>
                </div>
            </form></>

    )
}
export default AddTask;