

export default function Items() {
    return (
        <div>
            <div className="container "  id="close_div" >

                <div className="text-center my-3">
                    <h2>
                        Item Section
                    </h2>
                </div>

                <div className="input_bg  px-lg-5 px-2 py-2">
                    <div className="row justify-content-between">
                        <div className="col-md-5">
                            <div className="my-2">
                                <label htmlFor="">
                                    Item Name
                                </label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="my-2">
                                <label htmlFor="">
                                    Quantity
                                </label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="my-2">
                                <label htmlFor="">
                                    Unit Price
                                </label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="my-2">
                                <label htmlFor="">
                                    Date of Submission
                                </label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center my-4">
                        <div className="col-md-3">
                            <button type='submit' className='btn btn-primary w-100' > Submit</button>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}
