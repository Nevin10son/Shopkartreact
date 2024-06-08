import React from 'react'
import NavBar from './NavBar'

const AddProduct = () => {
  return (
    <div>
        <NavBar/>
      <div class="conatainer">
        <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row g-3">
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Product title</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                            <label for="" class="form-label">Product title</label>
                            <input type="text" class="form-control"/>
                        </div>
                    
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" class="form-label">Product Desc</label>
                        <textarea name="" id="" class="form-control"></textarea>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Price:</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Category:</label>
                        <select name="" id="" class="form-control">
                            <option value="Mobile">Mobile</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Cloth">Cloth</option>
                            <option value="Food">Food</option>
                            <option value="Drink">Drink</option>
                        </select>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">mfd:</label>
                        <input type="date" name="" id="" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">EXP:</label>
                        <input type="date" name="" id="" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Brand:</label>
                        <select name="" id="" class="form-control">
                            <option value="Something">Something</option>
                            <option value="Nothing">Nothing</option>
                            <option value="Everything">Everythinh</option>
                            <option value="HI">HI </option>
                            <option value="Motorola">Motorola</option>
                        </select>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">customer care no:</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Product image:</label>
                        <input type="file" name="" id="" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Distributor name:</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button class="btn btn-success">submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddProduct
