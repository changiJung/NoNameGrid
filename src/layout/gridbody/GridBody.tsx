/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';

interface GridBodyInterface {
    css: string,
    dataType : string,
    data : string[]

    
}

// props type 설정
export function GridBody(props: GridBodyInterface){


    const gridArray = props.data;

    return(

        <div style={{display:'flex'}} >

            {gridArray.map(name => (  
                     <div className={props.css}>
                     {name}  
                     </div>   
                    ))}  



       </div>
 
    )

}