import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import '../pages/Item/Item.css'
import { Images } from "../utils/ExtraUtils";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { handleAddItem, handleUpdateItem } from "../store/Action";
import ReactLoading from 'react-loading';

const AddCard = () => {
    const navigate = useNavigate();
    const currentData = useLocation();
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state?.shoppingList)
    const [data, setData] = useState({
        name: '',
        description: '',
        quantity: ''
    })
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
        setData({ ...data, quantity: event.target.value })
    };

    return (
        <div className="main-container">
            <div className="header">
                <h4 className="title-header">{"SHOPPING LIST"}</h4>
                <img onClick={() => navigate('/')} src={Images.backImg} />
            </div>
            <div className="sub-continer">
                <div className="tx-div">
                    <span className="main-text">{currentData.state == null ? "Add an Item" : 'Edit an item'}</span>
                    <span className="banner-text">{currentData.state == null ? "Add your New item below" : "Edit your item below"}</span>
                </div>
                <div>
                    <div className="input-title">
                        <TextField
                            size="medium"
                            sx={{ width: '100%', }}
                            id="outlined-basic"
                            label={currentData.state == null ? "name" : currentData.state?.item_name}
                            variant="outlined"
                            value={data.name}
                            onChange={(e) => { setData({ ...data, name: e.target.value }) }}
                            key={"name"}
                        />
                    </div>
                    <div className="input-title">
                        <TextField
                            id="outlined-basic"
                            size="medium" sx={{ width: '100%', }}
                            multiline
                            rows={4}
                            label={currentData.state == null ? "Description" : currentData.state?.item_description}
                            variant="outlined"
                            value={data.description}
                            onChange={(e) => { setData({ ...data, description: e.target.value }) }}
                            key={"description"}
                        />
                    </div>
                    <div className="input-title" >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">{currentData.state == null ? "How Many?" : currentData.state?.item_quantity}</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label={currentData.state == null ? "How Many?" : currentData.state?.item_quantity}
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={3}>4</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <footer className="btn-container">
                        <Stack spacing={2} direction="row" >
                            <Button variant="text" onClick={() => navigate('/')} >Cancel</Button>
                            {isLoading?.loadingState ?
                                <>
                                    <div style={{}}>
                                        <ReactLoading type={'spin'} color={"blue"} height={30} width={30} />
                                    </div>
                                </>
                                :
                                <>
                                    {currentData.state == null ?
                                        <Button variant="contained"
                                            onClick={() => {
                                                dispatch(handleAddItem(data, navigate))
                                            }}>{"Add task"}</Button>
                                        :
                                        <Button variant="contained"
                                            onClick={() => {
                                                dispatch(handleUpdateItem(data, navigate, currentData.state?.id))
                                            }}>{"Save Item"}</Button>
                                    }

                                </>
                            }
                        </Stack>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default AddCard;