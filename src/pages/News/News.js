import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import getNewsThunk from '../../redux/thunks/newsThunk';
import { useEffect } from 'react';
import { Box } from '@mui/system';
import "./newsStyles.css"

export default function News() {
  const dispatch = useDispatch()
  const {newsList} = useSelector(state => state.news)
  useEffect(() => {
    dispatch(getNewsThunk())
  }, [])

  return (
    <Box sx={{ display: 'flex' }} className="box">
            {
                newsList.map((item) => (
                    <Card className='card'>
                        <CardMedia 
                        component="img"
                        height="230"
                        image={item?.image?.thumbnail?.contentUrl ?? 'https://ichef.bbci.co.uk/news/976/cpsprodpb/5A8B/production/_122497132_tesla.png'}
                        alt="new"
                        />
                        <CardContent >
                        <Typography gutterBottom variant="h5" component="div" className='title' >
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='description' >
                            {item.description}
                        </Typography>
                        </CardContent>
                        <CardActions className='cardAction'>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                        </CardActions>
                     </Card>
                ))
            }
        </Box>
  )
}
 

