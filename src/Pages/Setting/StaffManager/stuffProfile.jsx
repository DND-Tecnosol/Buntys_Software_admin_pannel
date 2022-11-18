import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Page from '../../../Layouts/Page';

const StuffProfile = () => {
    const id= useParams('id')
    const user= useSelector((state)=>state.costomer.costomer)
    const userProfile=user.filter((user)=>user.id===id)
    console.log(user);
    return (
        <>
            <Page header={'Hello'}>

            </Page>
        </>
    );
}

export default StuffProfile;
