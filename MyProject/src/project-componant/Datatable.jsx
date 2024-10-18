

export default function Datatable() {
    return (
        <div>

            <div className="container my-5">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <h5>
                            Uploaded Data
                        </h5>
                    </div>
                    <div className="">
                        <button className='btn btn-white' > Clear All </button>
                    </div>
                </div>
                <div className="table-responsive">
                <table className='table  w-100' style={{ whiteSpace: "nowrap" }} >
                    <thead>
                        <tr>
                            <th>
                             <input type="checkbox" name="" id="" />   Supplier
                            </th>
                            <th>
                                Item Name
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>
                                Unit Price
                            </th>
                            <th>
                                City, Country
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Phone Number
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>

        </div>
    )
}
