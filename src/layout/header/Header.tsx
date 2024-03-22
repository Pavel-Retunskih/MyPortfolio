import { Link } from "react-router-dom"
import styled from "styled-components"
import { Theme } from "../../styles/Theme"


export function Header (){
    return(
        <StyledHeader>
            <Navigation>
                <NavMenu>
                    <NavMenuItem><Link to = "/">micheal-weaver</Link></NavMenuItem>
                    <NavMenuItem><Link to = "/">_hello</Link></NavMenuItem>
                    <NavMenuItem><Link to = "about">_about-me</Link></NavMenuItem>
                    <NavMenuItem><Link to = "projects">_projects</Link></NavMenuItem>
                    <NavMenuItem><Link to = "contact">_contact-me</Link></NavMenuItem>
                </NavMenu>
            </Navigation>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 100%;
    max-width: 1782px;   
    border: 2px solid red;
    margin: 0 auto;
    background-color: ${Theme.colors.primary.blue};
`
const Navigation = styled.nav`

`
const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    a{
        text-decoration: none;
        white-space: nowrap;
        font-family: ${Theme.font.family};
        color: ${Theme.colors.secondary.grey};
    }
`
const NavMenuItem = styled.li`
    padding: 17px 30px;
`