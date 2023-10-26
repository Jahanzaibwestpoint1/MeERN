import React from "react";
import "../pages/Home/HomePage.css"
import Checkbox from '@mui/material/Checkbox';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const  DataCard = ({
    mainTitle,
    description,
    editPress,
    deltePress,
    checkValue,
    mainTitleStyle,
    descriptionStyle,
    changeStatus
 }) => {
    return (
        <div className="data-continer">
            <div className="value-container">
                <div className="first-subcontainer">
                    <Checkbox defaultChecked={checkValue} onClick={changeStatus} />
                    <div className="text-continer">
                        <span className="heading-title" style={mainTitleStyle}>{mainTitle}</span>
                        <span className="description" style={descriptionStyle}>{description}</span>
                    </div>
                </div>
                <div >
                    <span onClick={editPress}>
                        <ModeEditOutlinedIcon style={{ marginRight: '14', cursor: "pointer" }} color="#555F7C" />
                    </span>
                    <span onClick={deltePress}>
                        <DeleteOutlinedIcon style={{ cursor: "pointer" }} color="#555F7C" />
                    </span>
                </div>
            </div>
        </div>

    )
}

export default DataCard;