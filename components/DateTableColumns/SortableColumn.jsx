// import React from 'react';
// import{ Button } from "@/components/ui/button";
// import{ ArrowUpDown } from "lucide-react";
// export default function SortableColumn({column,title}){
//     return(
//         <Button
//         variant="ghost"
//         onCLick={()=>column.toggleSorting(column.getIsSorted()
//         ==="asc")}
//         >
//         {title}
//         <ArrowUpDown className='ml-2 h-4 w-4'/>
//         </Button>

//     );
// }
import React from 'react';
import{ Button } from "../../components/ui/button";
import{ ArrowUpDown } from "lucide-react";
export default function SortableColumn({column,title}){
    return(
        <Button
        variant="ghost"
        onCLick={()=>column.toggleSorting(column.getIsSorted()
        ==="asc")}
        >
        {title}
        <ArrowUpDown className='ml-2 h-4 w-4'/>
        </Button>

    );
}






