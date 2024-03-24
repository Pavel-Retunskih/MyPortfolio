import { Link } from "react-router-dom"
import styled from "styled-components"
import { Theme } from "../../styles/Theme"
import { FlexWrapper } from './../../components/flexwrapper/FlexWrapper';


export function Header (){
    return(
        <StyledHeader>
            <Navigation>
                <NavMenu>
                    <FlexWrapper>
                        <NavMenuItem><Link to = "/">pavel-retynskih</Link></NavMenuItem>
                        <NavMenuItem><Link to = "/">_hello</Link></NavMenuItem>
                        <NavMenuItem><Link to = "about">_about-me</Link></NavMenuItem>
                        <NavMenuItem><Link to = "projects">_projects</Link></NavMenuItem>
                    </FlexWrapper>
                    <NavMenuItem><Link to = "contact">_contact-me</Link></NavMenuItem>
                </NavMenu>
            </Navigation>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
    width: 100%;
    max-width: 1782px;
    margin: 0 auto;
    background-color: ${Theme.colors.primary.blue};
   
`
const Navigation = styled.nav`

`
const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
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
       border-left: 1px solid ${Theme.colors.lines};
    }
    
`