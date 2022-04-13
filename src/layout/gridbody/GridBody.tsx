/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';

interface GridBodyInterface {
    css: string,
    dataType : string,

    
}

// props type 설정
export function GridBody(props: GridBodyInterface){

    return(

        <div className={props.css}>
            {props.dataType}

        </div>
 
    )

}