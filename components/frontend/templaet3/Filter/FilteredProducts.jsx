import { ChevronRight, Link } from 'lucide-react'
import React from 'react'
import Breadcrumb from './Breadcrumb';
import Paginate from './paginate';
import { getData } from '@/lib/getData';
import Product from '../Product'

export default async function FilterComponent({products , productCount}) {
  
    // Pagination
    const pageSize =3;
    const totalPages = Math.ceil(productCount / pageSize);
    
    return (
<div className=''> 
<div className='grid grid-cols-1 md:grid-cols-2
    lg:grid-cols-3 gap-4'>
        {
        products.map((product, i) => {
            return < Product  key={i} product={product} />;

        })
        }
        </div>
        <div className='p-8 mx-auto flex 
        items-center justify-center w-full'> 
        <Paginate totalPages={totalPages}/>
        </div>
 
    </div>

    );
}


