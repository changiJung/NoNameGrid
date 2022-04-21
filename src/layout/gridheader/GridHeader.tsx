/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';

interface GridHeaderInterface {
    css: string,
    headerName : string[] | ['헤더테스트'],
    width? : number[] | [100], 
    asc? : string,
    
}

// props type 설정
export function GridHeader(props: GridHeaderInterface){


    const myArray = props.headerName


    return(


        // <div>

        // </div>
        <div style={{display:'flex'}}>
        

            {myArray.map(name => (  
                       <div className={props.css}>
                        {name}  
                        </div>  
                    ))}  

        </div>

         
    )




    // return(

    //     <div className={props.css}>
    //         {props.headerName}

    //     </div>
 
    // )

}