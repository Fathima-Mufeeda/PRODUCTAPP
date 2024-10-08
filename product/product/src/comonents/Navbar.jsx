import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>PRODUCT MANAGEMENT</Typography>
                <Link to='/a'>
                        <Button variant='contained' color="blue">ADD</Button>
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link to='/h'>
                        <Button variant='contained' color="blue">HOME</Button>
                    </Link>
            </Toolbar>
        </AppBar>
      
    </div>
  )
}

export default Navbar
