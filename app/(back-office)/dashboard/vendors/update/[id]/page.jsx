import React from 'react' ;
import FormHeader from '../../../../../../components/backoffice/FormHeader'
import NewVendorForm from '../../../../../../components/backoffice/NewVendorForm'
// 6.9k (gzipped: 2.7k)

export default function UpdateVendor(){

    return(
        <div>
           <h2>Update Vendor</h2>
           <FormHeader title="Update Vendor"/>
           <NewVendorForm/> 
        </div>
    )
}