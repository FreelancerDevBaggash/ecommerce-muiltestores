import FormHeader from "../../../../../../components/backoffice/FormHeader";
//import NewProductForm from "../../../../../../components/backoffice/NewProductForm";
import NewsubcategoryForm from '../../../../../../components/backoffice/Forms/NewsubcategoryForm '
//import NewProductForm from '../../../../../../components/backoffice/Forms/NewProductForm'
import { getData } from '../../../../../../lib/getData'
import React from "react"
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../../../lib/authOptions';

export default async function Updatecategories({params:{id}}){
    
     const session = await getServerSession(authOptions);
        const userId = session?.user?.id;
    
        let storeId = "";
        let categoryId = "";
    
        if (userId) { 
            // استرداد المتجر المرتبط بالمستخدم
            const storeData = await getData(`stores?vendorId=${userId}`);
            if (storeData && storeData.length > 0) {
                storeId = storeData[0].id;
                
                // استرداد الفئات المرتبطة بالمتجر
                if (storeId) {
                    const categoriesData = await getData(`categories?storeId=${storeId}`);
                    categoryId = categoriesData.map((category) => {
                        return {
                            id: category.id,
                            title: category.title,
                        };
                    });
                }
            }
        }
    const subcategory = await getData(`subcategory/${id}`) ;
    
  
    return(
        <div>
            <FormHeader title="Update subcategory" />
            <NewsubcategoryForm updateData = {subcategory} categoryId={categoryId} />
        </div>

    );
}