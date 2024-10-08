
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';


const Home = () => {
    var [value, setValue] = useState([])
    axios.get("https://fakestoreapi.com/product")
        .then((response) => {
            console.log(response.data)
            setValue(response.data)
        
        })
  return (
    <div>
      <h1>PRODUCT DETAILS</h1>
      <Grid container spacing={2}>
                
                { value.map((val) => {
                    return (
                        <Grid item xs={8} sm={3} md={5}>
            
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={val.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {val.title}
                                        {val.category}
                                        {val.price}
                                    </Typography>
                                    
                                </CardContent>
                                
                            </Card>
                        </Grid>
                    )
                })}                                   
            </Grid>
      
    </div>
  )
}

export default Home

