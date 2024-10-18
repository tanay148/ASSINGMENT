

export default function Header() {
    return (
        <>
        <header>
        <div className=' ' >
                <div className="container bg-primary p-lg-2 p-1">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-4">
                            <h3 className='f_size  mb-0 text-white' >
                                Inventory Management System
                            </h3>
                        </div>
                        <div className="col-md-2 text-lg-end text-center">
                            <a href="#" className="text-white ">
                                Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-3">
                    <div className="text-center">
                    <a href="" className=" text-dark pe-3" >
                            <input type="checkbox" /> Item
                        </a>
                        <a href=""  className="text-dark" >
                            <input type="checkbox" /> Supplier
                        </a>  
                    </div>
                     
                    </div>
                </div>
            </div>
        </header>
          



        </>
    )
}
