"use client"
 
import * as React from "react"

import PriceFilter from "./PriceFilter"
import BrandFilter from "./BrandFilter"
  

export default function Filters({slug}) {
    return (
        <div className="">
            <PriceFilter slug={slug}/>
            {/* <BrandFilter/> */}
 </div>
    );
}

