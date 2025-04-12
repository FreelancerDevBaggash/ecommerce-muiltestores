// import FormHeader from "../../../../../../../components/backoffice/FormHeader";
import NewPaymentProviderForm from "../../../../../../components/backoffice/Forms/NewPaymentProviderForm";
import { getData } from "../../../../../../lib/getData";
import React from "react"
import FormHeader from "../../../../../../components/backoffice/FormHeader";

export default async function UpdateCategory({params:{id}}){
    const PaymentProvider = await getData(`PaymentProvider/${id}`) ;
    
  
    return(
        <div>
            <FormHeader title="UpdatePaymentProviderForm" />
            <NewPaymentProviderForm updateData = { PaymentProvider } />
        </div>

    );
}