import React from 'react'

interface GridFooterPaging {
    css: string,
    numbers: number[],
    
    idx:number,
}

// props type 설정
export function GridFooterPage(props: GridFooterPaging){


    const myArray = props.numbers;



    return(


        // <div>

        // </div>
        <ul className={props.css}>

            {myArray.map(name => (  
                        <a href="#${name}">  
                        {name}  
                        </a>  
                    ))}  



         </ul>
    )

}