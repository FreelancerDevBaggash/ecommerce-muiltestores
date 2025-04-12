import React from 'react' ;
import FormHeader from '../../../../../../components/backoffice/FormHeader';
import CustomerForm from '../../../../../../components/backoffice/CustomerForm';
// 6.9k (gzipped: 2.7k)
import { getData } from '../../../../../../lib/getData'
export default async function UpdateCustomer({params: { id }}){
  const user = await getData(`users/${id}`)
    return(
        <div> 
           <FormHeader title="Update Customer"/>
           <CustomerForm user={user} />
        </div>
    )
}