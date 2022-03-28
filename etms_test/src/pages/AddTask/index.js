const AddTask = () => {
    return (
        <><hr />
            <h2>Add Task</h2>
            <hr />

            <form>
                <div class="row g-3">
                    <div class="col">
                        <label for="colFormLabel" class="col-form-label">Project Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="colFormLabel"></input>
                        </div>
                    </div>
                    <div class="col">
                        <label for="colFormLabel" class="col-form-label">Project ID</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="colFormLabel">
                            </input>
                        </div>
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col">
                        <label for="colFormLabel" class="col-form-label">Task ID</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="colFormLabel"></input>
                        </div>
                    </div>

                    <div class="col">
                        <label for="colFormLabel" class="col-form-label">Project ID</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="colFormLabel">
                            </input>
                        </div>
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col">
                        <label for="colFormLabel" class="col-form-label">Task Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="colFormLabel">
                            </input>
                        </div>
                    </div>
                    <div class="col">
                        <label for="colFormLabel" class="col-form-label">Department ID</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="colFormLabel">
                            </input>
                        </div>
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col">
                        <label for="colFormLabel" class="col-form-label">Start Date</label>
                        <div class="col-sm-10">
                            <input type="date" class="form-control" id="colFormLabel">
                            </input>
                        </div>
                    </div>

                    <div class="col">
                        <label for="colFormLabel" class="col-form-label">Due Date</label>
                        <div class="col-sm-10">
                            <input type="date" class="form-control" id="colFormLabel">
                            </input>
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="colFormLabel" class="col-form-label">Description</label>
                    <div class="col-sm-11">
                        <textarea class="form-control" id="colFormLabel" rows="5"></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <button type="button" class="btn btn-primary">Save</button>

                    </div>
                    <div className="col">
                        <button type="button" class="btn btn-primary">Back</button>
                    </div>
                </div>
            </form></>

    )
}
export default AddTask;