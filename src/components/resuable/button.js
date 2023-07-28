import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
border-radius: 18px;
font-weight: 400; 
background:${({primary}) => (primary ? '#292F36' : '#CDA274')};
white-space: nowrap;
padding:${({big}) => (big ? '14px 48px' : '12px 30px')};
color:${({dark}) => (dark ? '#010606' : '#fff')};
font-size:16px;
outline:none;
cursor:pointer;
display: flex;
justify-content:center;
align-items: center;
transition: all 0.2s ease-in-out;
margin-top:20px;


&:hover{
    transition: all 0.2 ease-in-out;
    background:${({primary}) => (primary ? '#CDA274' : '#292F36')};

}
`

export const PlainButton = styled(Link)`
border-radius: 18px;
font-weight: 400; 
background:${({transparent}) => (transparent ? 'transparent' : '#292F36')};
white-space: nowrap;
padding:${({big}) => (big ? '14px 48px' : '12px 20px')};
color:${({dark}) => (dark ? '#4D5053' : '#fff')};
font-size:18px;
font-weight:600;
outline:none;
cursor:pointer;
display: flex;
justify-content:center;
align-items: center;
margin-top:20px;
`