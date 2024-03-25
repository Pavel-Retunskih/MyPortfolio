import styled from "styled-components"
import { FlexWrapper } from "../../../components/flexwrapper/FlexWrapper"
import { Theme } from "../../../styles/Theme"
import { Link } from "react-router-dom"



type NavBarPropsType = {
    items: Array<itemsPropsType>
}

type itemsPropsType = {
    link: string
    description : string
}

export function NavBar (props:NavBarPropsType){
    return (
    <Navigation>
        <NavMenu>
            {props.items.map(({link,description})=>
                <NavMenuItem><Link to = {link}>{description}</Link></NavMenuItem>
            )}
        </NavMenu>
    </Navigation>
    )
}

const Navigation = styled.nav`
`
const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    
    
    a{
        text-decoration: none;
        white-space: nowrap;
        font-family: ${Theme.font.family};
        font-size: ${Theme.font.size.labes};
        color: ${Theme.colors.secondary.grey};
    }
`
const NavMenuItem = styled.li` 
    border-right: 1px solid ${Theme.colors.lines};
    padding: 17px 30px;
    &:first-child{
       padding: 17px 155px 17px 22px;
    }
    &:last-child{
       padding: 17px 23px;
       border-right: none;
       border-left: 1px solid ${Theme.colors.lines};
       margin-left: auto;
    }
    
`