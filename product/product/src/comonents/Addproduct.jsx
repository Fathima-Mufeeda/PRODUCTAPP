import React from 'react'

const Addproduct = ({ }) => {
  return (
    <div>
      <h1>PRODUCT ADDING</h1>
      <TextField id="outlined-basic" label="product name" variant="outlined" /><br />
      <TextField id="outlined-basic" label="image url" variant="outlined" /><br />
      <TextField id="outlined-basic" label="category" variant="outlined" /><br />
      <TextField id="outlined-basic" label="price" variant="outlined" /><br />
      <Button variant="contained" color="secondary" onClick={addHandler}>
        ADD
      </Button>
    </div>
  )
}

export default Addproduct
