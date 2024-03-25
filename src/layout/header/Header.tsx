import { Link } from "react-router-dom"
import styled from "styled-components"
import { Theme } from "../../styles/Theme"
import { FlexWrapper } from './../../components/flexwrapper/FlexWrapper';
import { NavBar } from "./navigation/NavBar";

const headerMenuItemsData = [
    {link:"/",
     description:"pavel-retynskih"
    },
    {link:"/",
     description:"_hello"
    },
    {link:"about",
     description:"_about-me"
    },
    {link:"projects",
     description:"_projects"
    },
    {link:"contact",
     description:"_contact-me"
    },
]

export function Header (){
    return(
        <StyledHeader>
            <NavBar items = {headerMenuItemsData}/>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
    width: 100%;
    max-width: 1782px;
    margin: 0 auto;
    background-color: ${Theme.colors.primary.blue};
   
`
