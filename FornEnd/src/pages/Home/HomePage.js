import React, { useState } from "react";
import DataCard from "../../components/DatacCard";
import EmptyCard from "../../components/EmptyItemsCard";
import HomeHeader from "../../components/HomeHeader";
import { dummyData } from "../../utils/ExtraUtils";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import { async } from "q";
import { useDispatch, useSelector } from "react-redux";
import { handleAllShoppingList, handleDeleteListItem, handleUpdateItemStatus } from "../../store/Action";
import ReactLoading from 'react-loading';

const HomePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const listData = useSelector((state) => state?.shoppingList)
    const [open, setOpen] = useState(false);
    const [seclectId, setSelecId] = useState()

    const openModal = () => {
        return (
            <Dialog
                open={open}
                onClose={() => { setOpen(false) }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Item?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this item? This can not be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Stack spacing={2} direction="row" >
                        <Button
                            variant="text"
                            onClick={() => setOpen(false)} >Cancel</Button>
                        <Button
                            variant="contained"
                            onClick={() => {
                                dispatch(handleDeleteListItem(seclectId.id))
                                setOpen(false)
                            }}>Delete</Button>
                    </Stack>
                </DialogActions>
            </Dialog>
        )
    }
    
    return (
        <>
            {openModal()}
            <HomeHeader title={"SHOPPIN LIST"} />
            {listData?.loadingState ?
                <div className="data-continer">
                    <div style={{ marginTop: '4%' }}>
                        <ReactLoading type={'spin'} color={"blue"} height={50} width={50} />
                    </div>
                </div>
                :
                <>
                    {listData?.getData?.length == 0 ?
                        <EmptyCard title={'Your shopping list is empty :('} />
                        :
                        <>
                            <div className="data-continer">
                                <div className="sub-coantiner">
                                    <p className="your-item">Your Items</p>
                                    <Button size='small'
                                        variant="contained"
                                        onClick={() => {
                                            navigate('addItem')
                                        }}
                                    >Add Item</Button>
                                </div>
                                {listData?.getData?.map((item, index) => {
                                    return (
                                        <>
                                            <div style={{}} >
                                                <DataCard
                                                    mainTitleStyle={item.item_status ?
                                                        { textDecoration: "line-through", textDecorationColor: '#4D81B7' }
                                                        : null}
                                                    descriptionStyle={item.item_status ?
                                                        { textDecoration: "line-through", textDecorationColor: '#4D81B7' }
                                                        : null}
                                                    checkValue={item.item_status ? true : false}
                                                    editPress={() => { navigate('addItem', { state: item }) }}
                                                    mainTitle={item.item_name}
                                                    description={item.item_description}
                                                    deltePress={() => {
                                                        setSelecId(item)
                                                        setOpen(true)
                                                    }}
                                                    changeStatus={()=>{
                                                        dispatch(handleUpdateItemStatus(item.item_status,item?.id))
                                                    }}
                                                />
                                            </div>
                                        </>
                                    )
                                })

                                }

                            </div>

                        </>
                    }

                </>
            }
        </>
    )
}

export default HomePage;