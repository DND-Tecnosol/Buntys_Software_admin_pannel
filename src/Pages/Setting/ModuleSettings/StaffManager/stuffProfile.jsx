import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Page from '../../../../Layouts/Page';

const StuffProfile = () => {
    const id= useParams('id')
    const { staff } = useSelector((state => state.stuff))
    const staffProfile=staff.filter((user)=>user.id==id.id)[0] || []
    console.log(staffProfile);
    return (
        <>
        
        </>
    );
}

export default StuffProfile;
