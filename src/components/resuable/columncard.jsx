import React from 'react'
import styled from 'styled-components';
import { Button } from './button';





 const devices = {
  xs: `(min-width: ${'320px'})`,
  sm: `(min-width: ${'640px'})`,
  Msm: `(max-width: ${'640px'})`,
  md: `(min-width: ${'768px'})`,
  Mlg: `(max-width: ${'1024px'})`,
  lg: `(min-width: ${'1024px'})`,
  xl: `(min-width: ${'1280px'})`,
  
}




export const ColWrapper = styled.div`

  display:flex;
  flex-direction: ${({reverseColumn}) => (reverseColumn ? "row-reverse" : "row")};
  justify-content:space-between;
  align-items:center;
  gap:0px;
  margin:40px 0px;


  @media only screen and ${devices.md} and ${devices.Mlg} {
    
    width:100%;
    max-width:700px;
    
    
  }

  @media only screen and ${devices.xs} and ${devices.Msm} {

    width:100%;
    display:flex;
    flex-direction:column-reverse ;
    justify-content:space-between;
    align-items: center;
    
    }




`

export const DataColumn = styled.div`
width:100%;
max-width:50%;
overflow:hidden;



@media only screen and ${devices.xs} and ${devices.Msm} {

  width:100%;
  max-width:80%;

}



`
export const ImageColumn = styled.div`
width:100%;
max-width:50%;
overflow:hidden;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;


@media only screen and ${devices.xs} and ${devices.Msm} {

width:100%;
max-width:80%;

}



`
export const Datawrapper = styled.div`


font-family: 'jost', serif;
font-size:18px;
padding:10px 40px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: ${({reverseColumn}) => (reverseColumn ? "end" : "start")};
text-align:start;

h2{
  font-size:32px;
  font-weight:400;
  margin:20px 0px;
}

@media only screen and ${devices.md} and ${devices.Mlg} {
    
  display:flex;
  flex-direction:column ;
  justify-content:space-between;
  align-items: ${({reverseColumn}) => (reverseColumn ? "end" : "start")};
  
    
  }

  @media only screen and ${devices.xs} and ${devices.Msm} {

    display:flex;
  flex-direction:column ;
  justify-content:space-between;
  align-items:center;

}





`
export const ImageWrapper = styled.div`

width:90%;
height:240px;
border-radius:40px;
overflow:hidden;


@media only screen and ${devices.md} and ${devices.Mlg} {

  width:100%;

}


`




export const ColumnCard = (props) => {


  return (
    <div>
      <ColWrapper 
      reverseColumn={props.reverseColumn}
      >
        <DataColumn>
          <Datawrapper>
            <h2> {props.title}</h2>
            <span>{props.description}</span>
                  <Button
                  primary={true}
                  big={true}
                  dark={false}
                  smallButton={true}
                  >{props.buttonText} 
                  </Button>

          </Datawrapper>
        </DataColumn>
        <ImageColumn>
          <ImageWrapper>
            <img src={props.image} alt="" width="100%" height="100%"/>
          </ImageWrapper>
        </ImageColumn>
      </ColWrapper>
    </div>
  )
}

export default ColumnCard;

