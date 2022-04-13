/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';

interface GridHeaderInterface {
    css: string,
    headerName : string,
    asc? : string,
    
}

// props type 설정
export function GridHeader(props: GridHeaderInterface){

    return(

        <div className={props.css}>
            {props.headerName}

        </div>
 
    )

}