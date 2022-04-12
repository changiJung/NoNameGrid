/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { GridFooterPage } from './GridFooterPage';

interface GridFooterInterface {
    css: string,
    test? : string
    data?<T>(text : T) : T,
    page : number,
    pages? : number[],

}


  
// props type 설정
export function GridFooter(props: GridFooterInterface){

    return(

        <div className={props.css}>
            <GridFooterPage css='on'
                idx={props.page}                
                numbers = {[1,2,3,4,5,6,7,8,9,10]}
            />
        </div>

    )

}

