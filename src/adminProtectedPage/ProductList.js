import { useEffect, useState } from "react";
import { addProducr, getProducts, deleteProduct,editProduct } from "../services/admin.service";
import { ToastContainer, toast } from "react-toastify";
import { useGlobalState } from "../GlobalProvider";
import "react-toastify/dist/ReactToastify.css";
function ProductList() {
  const { setGlobalState, globalState } = useGlobalState();
  const dropDownArr = [
    {
      label: "Logo",
    },

    {
      label: "Flyer",
    },

    {
      label: "Brochure",
    },
    {
      label: "Business Card",
    },
    {
      label: "Opening Card",
    },
    {
      label: "Invitation Card",
    },
    {
      label: "Wedding Card",
    },
    {
      label: "Calendar",
    },
    {
      label: "Website Sliders",
    },
    {
      label: "Social Media Poster",
    },

    {
      label: "Letterhead",
    },
    {
      label: "Graphic Designing",
    },
    {
      label: "Stamps",
    },
    {
      label: "Premium Business Card",
    },
    {
      label: "Die Cut Business Card",
    },
    {
      label: "Banner",
    },
    {
      label: "Bill Book",
    },
  ];
  const [productForm, setProductForm] = useState({
    product_name: "",
    product_description: "",
    product_type: "",
    product_image: "",
    actual_price: "",
    discount_price: "",
    product_image_Prev:"",
    id:""
  });
  const handleAddProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("product_name", productForm.product_name);
      formData.append("product_image", productForm.product_image);
      formData.append("product_type", productForm.product_type);
      formData.append("actual_price", productForm.actual_price);
      formData.append("discount_price", productForm.discount_price);
      formData.append("product_description", productForm.product_description);
      let response = await addProducr(formData);
      if (response.status == 200) {
        toast.success("Product Added Successfully");
        setProductForm({
          product_name: "",
          product_description: "",
          product_type: "",
          product_image: "",
          actual_price: "",
          discount_price: "",
        });
        getProductList();
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const [productFormType, setProductFormType] = useState("Add");
  const setInputEdit = async (value) => {
    setProductFormType("Edit");
    setProductForm({
      product_name: value.product_name,
      product_description: value.product_description,
      product_type: value.product_type,
      product_image: "",
      product_image_Prev: value.product_image,
      actual_price: value.actual_price,
      discount_price: value.discount_price,
      id:value?.id
    });
  };
  const handleEditProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("product_name", productForm.product_name);
      formData.append("product_type", productForm.product_type);
      formData.append("actual_price", productForm.actual_price);
      formData.append("discount_price", productForm.discount_price);
      formData.append("product_description", productForm.product_description);
      if(productForm.product_image){

        formData.append("product_image", productForm.product_image);
      }
      let response = await editProduct(formData, productForm.id);
      if (response.status == 201) {
        toast.success("Product updated successfully!");
        setProductForm({
          product_name: "",
          product_description: "",
          product_type: "",
          product_image: "",
          actual_price: "",
          discount_price: "",
        });
        getProductList();
        
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const [productListArr, setProductListArr] = useState([]);
  const getProductList = async () => {
    try {
      let response = await getProducts();
      if (response.status == 200) {
        console.log(response.data.products);
        setProductListArr(response?.data?.products);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const handleDeleteProduct = async (id) => {
    try {
      // Show confirmation prompt
      const isConfirmed = window.confirm("Are you sure you want to delete this Product?");

      // If user confirms, proceed with deletion
      if (isConfirmed) {
        let response = await deleteProduct(id);
        if (response.status === 200) {
          toast.success("Product Deleted Successfully");
          getProductList();
        }
      } else {
        // User canceled the deletion
        toast.info("Product deletion canceled");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    getProductList();
  }, []);
  return (
    <div className="my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="text-secondary mb-4">
          <i className="fa fa-cube"></i> Products
        </h4>
        <button
          type="button"
          className="btn shadow btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => {
            setProductFormType("Add");
            setProductForm({
              product_name: "",
              product_description: "",
              product_type: "",
              product_image: "",
              actual_price: "",
              discount_price: "",
            });
          }}
        >
          Add Product
        </button>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Product Avatar</th>
            <th scope="col">Product Type</th>
            <th scope="col">Price</th>
            <th scope="col">Discounted Price</th>
            <th scope="col">
              <div className="d-flex justify-content-end">
                <div>Action</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {productListArr?.map((v, i) => {
            return (
              <tr>
                <th scope="row" className="pt-4">
                  {i + 1}
                </th>
                <td>
                  <div className="d-flex">
                    <div className="provileAvtar">
                      <img src={globalState.imageBaseUrl + v?.product_image} />
                    </div>
                    <div className="ms-2 my-auto">
                      <h6 className="mb-0">{v?.product_name}</h6>
                      <p className="text-secondary mb-0 fontMono">{v?.product_description}</p>
                    </div>
                  </div>
                </td>
                <td className="pt-4">{v?.product_type}</td>
                <td className="pt-4">{v?.actual_price} INR</td>
                <td className="pt-4">{v?.discount_price} INR</td>
                <td className="pt-4">
                  <div className="d-flex justify-content-end">
                    {/* <i className="fa fa-eye"></i> */}
                    <i
                      type="button"
                      className="fa fa-edit mx-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => setInputEdit(v)}
                    ></i>
                    <i className="fa fa-trash" onClick={() => handleDeleteProduct(v?.id)}></i>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {productFormType} Product
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
            {productFormType === "Edit" &&
             <><img style={{height:"50px"}} src={productForm?.product_image ==""?
              globalState.imageBaseUrl+productForm?.product_image_Prev:
              URL.createObjectURL(productForm?.product_image)
            } /><br/></>
             }
              <label>{productFormType} Product Image</label>
              <input
                className="form-control"
                type="file"
                onChange={(e) => {
                  setProductForm({ ...productForm, product_image: e.target.files[0] });
                }}
              />
              <label>Product Name*</label>
              <input
                className="form-control mb-2"
                value={productForm.product_name}
                onChange={(e) => setProductForm({ ...productForm, product_name: e.target.value })}
              />
              <div className="d-flex justify-content-between">
                <div>
                  <label>Price*</label>
                  <input
                    className="form-control mb-2"
                    type="number"
                    value={productForm.actual_price}
                    onChange={(e) => setProductForm({ ...productForm, actual_price: e.target.value })}
                  />
                </div>
                <div>
                  <label>Discounted Price*</label>
                  <input
                    className="form-control mb-2"
                    type="number"
                    value={productForm.discount_price}
                    onChange={(e) => setProductForm({ ...productForm, discount_price: e.target.value })}
                  />
                </div>
              </div>
              <label>Product Type*</label>
              <select
                id="productType"
                className="form-control mb-2"
                value={productForm.product_type}
                onChange={(e) => setProductForm({ ...productForm, product_type: e.target.value })}
              >
                <option value="">Select Type</option>
                {dropDownArr.map((v, i) => {
                  return <option value={v.label}>{v.label}</option>;
                })}
              </select>
              <label>Product Discription*</label>
              <textarea
                className="form-control mb-2"
                value={productForm.product_description}
                onChange={(e) => setProductForm({ ...productForm, product_description: e.target.value })}
              />
            </div>
            <div className="modal-footer">
            {setProductFormType == "Add"? <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddProduct}
              >
                Save
              </button>:<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleEditProduct}>
              Update
              </button>}
              
              
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductList;
