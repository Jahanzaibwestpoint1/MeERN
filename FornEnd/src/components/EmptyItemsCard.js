import * as React from 'react';
import '../pages/Home/HomePage.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

const EmptyCard = ({ title }) => {
    const navigate = useNavigate()
    return (
        <div className='parent-container'>
            <div className='sec-container'>
            <p className='error-msg'>{title}</p>
            <Button size='large' variant="contained" onClick={()=>{navigate('addItem')}} >Add your first item</Button>
            </div>
        </div>
    )
}

export default EmptyCard;