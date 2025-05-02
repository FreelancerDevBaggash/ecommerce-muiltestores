import { ChevronRight, Link } from 'lucide-react';
import React from 'react';
import Breadcrumb from './Breadcrumb';
import Paginate from './Paginate';
import Product from '../Product';

export default async function FilterComponent({ products, productCount }) {
  
  // Pagination
  const pageSize = 3;
  const totalPages = Math.ceil(productCount / pageSize);
    
  return (
    <div dir="rtl" className="w-full">
      {/* قسم المنتجات مع ترتيب متجاوب */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          products.map((product, i) => {
            return <Product key={i} product={product} />;
          })
        }
      </div>

      {/* قسم التصفح والتصفية مع ترتيب مركزي */}
      <div className="p-8 mx-auto flex items-center justify-center w-full">
        <Paginate totalPages={totalPages} />
      </div>
    </div>
  );
}
