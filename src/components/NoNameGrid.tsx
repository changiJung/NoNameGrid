import './../assets/css/Main.css'
import React from 'react';
import { GridFooter } from './../layout/girdfooter/GridFooter';
import { GridHeader } from './../layout/gridheader/GridHeader';
import { GridBody } from './../layout/gridbody/GridBody';

/**
 * typeScript의 기본값 설정방법을 이용하여 최초의 값은 받지 않았을때도 가능하도록 설정
 * 
 * 
 */



interface NonameGridIntf {
  
  //Header
  headerCss : string | 'headerTest',
  headerName : string[] | ['헤더1', '헤더2', '헤더3'],
  
  //Body
  bodyCss: string | 'mainTest',
  bodyType : string | 'body',
  bodyData : string[] | ['test', 'test1', 'test2'],

  //Footer
  footerCss : string | 'test',
  pageNumber : number | 1,  
}


export function NonameGrid(props: NonameGridIntf) {

    const gridInfo = {
        headerName : props.headerName,
        headerCss : props.headerCss,        
    }

    const gridBody = {
        bodyCss : props.bodyCss,
        bodyType : props.bodyType,        
        bodyData : props.bodyData,        
    }

    const gridFooter = {
        footCss : props.footerCss,
        page : props.pageNumber,        
    }




    return (
    <div>
      <GridHeader css={gridInfo.headerCss}
        headerName={gridInfo.headerName}
      />
      <GridBody
      css={gridBody.bodyCss}
      dataType={gridBody.bodyType}
      data = {gridBody.bodyData}
      />

      <GridFooter css={gridFooter.footCss}      
        page = {gridFooter.page}            
      ></GridFooter>
    </div>
  );
}
