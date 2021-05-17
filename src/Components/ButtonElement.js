import styled from "styled-components"
import {Link} from "react-scroll"

export const Button = styled(Link)`
border-radius: 50px;
background: ${({primary})=>(primary ? "#047aed" :"#010606")};
white-space: nowrap;
padding: ${({big}) =>(big ? "14px 48px": "11px 15px")};
color: ${({dark}) => (dark ? "#010606": "#fff")};
font-size: ${({fontBig}) =>(fontBig ? "18px" : "16px")};
outline:none;
font-weight:bold;
border: none;
cursor:pointer;
display:flex;
justify-content:center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    color: #333;
    background: ${({primary})=> (primary ?  "#047aed":"#047aed")}

}
`