'use client'

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";


const AllCat = () => {

    const [categories, setCategories] = useState(0)

    useEffect(() => {
        fetch('allCat.json')
        .then(res => res.json())
        .then(data => setCategories(data))

    },[])

    console.log(categories);

    return (
        <div>
            <Card className='mt-8 '>
      <CardActionArea>
        <CardMedia>
                    <Image className='mx-auto' src={topImg} width={900} height={400} alt="logo" />
          
                    </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See More
        </Button>
      </CardActions>
    </Card>
        </div>
    );
};

export default AllCat;