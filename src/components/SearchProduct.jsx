import React from 'react'
import NavBar from './NavBar'

const SearchProduct = () => {
  return (
    <div>
        <NavBar/>
          <div class="container">
        <div class="row g-3">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <label for="" class="form-label">Product Name:</label>
               <input type="text" class="form-control"/>
            </div>
            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button class="btn btn-success">Search</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SearchProduct
