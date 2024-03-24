import styled from "styled-components"
import { Theme } from "../../styles/Theme"
import { Icon } from "../../components/icon/Icon"

export function Footer(){
    return(
        <StyledFooter>
            <ContactIcons>
                <ContactIconsItem>find me in:</ContactIconsItem>
                <ContactIconsItem><a href="#"><Icon iconId="twitter" height="24px" width="24px" viewBox="-1 -2 20 20"/></a></ContactIconsItem>
                <ContactIconsItem><a href="#"><Icon iconId="face_book" height="24px" width="24px" viewBox="15 13 24 23"/></a></ContactIconsItem>
            </ContactIcons>
                <GitContact><a href="https://github.com/Pavel-Retunskih">@Pavel Retynskih<Icon iconId="git_hub" height="24px" width="24px" viewBox="16 15 20 20"/></a></GitContact>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    margin: 0 auto;
    width: 100%;
    max-width: 1782px;
    background-color: ${Theme.colors.primary.blue};
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ContactIcons = styled.ul`
    display: flex;
    align-items: center;
`


const ContactIconsItem = styled.li`
    font-size: ${Theme.font.size.labes};
    color: ${Theme.colors.secondary.grey};
    padding: 12px 14px;
    border-right: 1px solid ${Theme.colors.lines};
    &:first-child{
        padding: 16px 20px;
    }
`
const GitContact = styled.span`
    border-left: 1px solid ${Theme.colors.lines};
    padding: 13px 22px;
    a{
        display: flex;
        align-items: center;
        color: ${Theme.colors.secondary.grey};
        svg{
            margin-left: 5px;
        }
    }
`
