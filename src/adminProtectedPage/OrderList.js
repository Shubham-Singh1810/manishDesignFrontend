import React from 'react'

function OrderList() {
  return (
    <div className="my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="text-secondary mb-4">
          <i className="fa fa-shopping-cart"></i> Orders
        </h4>
        <button type="button" className="btn shadow btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add Product
        </button>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Product Avatar</th>
            <th scope="col">Ordered By</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">
              <div className="d-flex justify-content-end">
                <div>Status</div>
              </div>
            </th>
            <th scope="col">
              <div className="d-flex justify-content-end">
                <div>Action</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="pt-4">
              1.
            </th>
            <td>
              <div className="d-flex">
                <div className="provileAvtar">
                  <img src="/image/productSampleImage.jpg" />
                </div>
                <div className="ms-2 my-auto">
                  <h6 className="mb-0">Wedding Card</h6>
                  <p className="text-secondary mb-0 fontMono">This is a wedding card product</p>
                </div>
              </div>
            </td>
            <td>
                <div className="d-flex">
                    <div className="provileAvtar">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&rs=1&c=1&qlt=95&w=184&h=122"/>
                    </div>
                    <div className="ms-2 my-auto">
                        <h6 className="mb-0">Shubham Singh</h6>
                        <p className="text-secondary mb-0 fontMono">7762042085</p>
                    </div>
                </div>
            </td>
            <td className="pt-4">200 INR</td>
            <td className="pt-4">1</td>
            <td className="pt-4">
              <div className="d-flex justify-content-end">
                {/* <span>Ordered</span> */}
                {/* <span className='text-primary'>Payment Done</span> */}
                <span className='text-success'>Delivered</span>
                {/* <span className='text-danger'>Canceled</span> */}
              </div>
            </td>
            <td className="pt-4">
              <div className="d-flex justify-content-end">
                {/* <span>Ordered</span> */}
                {/* <span className='text-primary'>Payment Done</span> */}
                <span className='text-success' onClick={()=>alert("need to create pop up for it")}>Update Status</span>
                {/* <span className='text-danger'>Canceled</span> */}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
     
    </div>
  )
}

export default OrderList