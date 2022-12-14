import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Page from '../../Layouts/Page';

const CostomerProfile = () => {
    const {id}=useParams()
    const userData= useSelector((state)=> state.costomer.costomer)
    const cetEguryFilter=(id,arr)=>arr.filter((arry)=>arry.id==id)
    const user=cetEguryFilter(id,userData)
    // console.log()
    const {name}=user[0]
    return (
        <>
            <Page header={`Costomer Profile : ${name}`} >

            </Page>
        </>
    );
}

export default CostomerProfile;
