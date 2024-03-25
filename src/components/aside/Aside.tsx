import styled from "styled-components"
import { Theme } from "../../styles/Theme"
import { FlexWrapper } from "../flexwrapper/FlexWrapper"
import listArrow from "../../assets/Vector.png"
import subInfoArrow from "../../assets/subInfoArrow.png"
import pinkFolder from "../../assets/pinkFolder.png"
import greenFolder from "../../assets/greenFolder.png"
import blueFolder from "../../assets/blueFolder.png"
import subListIcon from "../../assets/subListIcon.png"
import { Icon } from "../icon/Icon"


export function Aside(){
    return(
        <StyledAside>
            <IconsBar>
                <li><Icon iconId = "aside_icon_professional"/></li>
                <li><Icon iconId = "aside_icon_personal"/></li>
                <li><Icon iconId = "aside_icon_hobby"/></li>
            </IconsBar>
            <Info>
                <InfoItem><span>personal-info</span></InfoItem>
                <SubInfo>
                        <SubInfoListItem><SubInfoItem image={`${pinkFolder}`}>bio</SubInfoItem></SubInfoListItem>
                        <SubInfoListItem><SubInfoItem image={`${greenFolder}`}>interests</SubInfoItem></SubInfoListItem>
                        <SubInfoListItem><SubInfoItem image={`${blueFolder}`}>education</SubInfoItem></SubInfoListItem>
                        <SubInfo>
                            <SubInfoListItem><SubInfoItem image={`${subListIcon}`}>high-school</SubInfoItem></SubInfoListItem>
                            <SubInfoListItem><SubInfoItem image={`${subListIcon}`}>high-school</SubInfoItem></SubInfoListItem>
                        </SubInfo>
                </SubInfo>
                <InfoItem>contacts</InfoItem>
            </Info>
        </StyledAside>
    )
}


const StyledAside = styled.aside`
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    max-width: 322px;
    height: 980px;
    border-right: 1px solid ${Theme.colors.lines};
`

const IconsBar = styled.ul`
    border-right: 1px solid ${Theme.colors.lines};
    padding: 17px 20px 0 24px;
    width: 68px;
    height: 100%;
`

const Info = styled.ul`
    
`
const InfoItem = styled.li`
    color: ${Theme.colors.secondary.white};
    border-bottom: 1px solid ${Theme.colors.lines};
    border-top: 1px solid ${Theme.colors.lines};
    padding: 10px 94px 10px 34px;
    position: relative;
    margin-bottom: 18px;
    margin-top: 27px;
    &:first-child{
        border-bottom: 1px solid ${Theme.colors.lines};
        border-top: none;
        margin-top: 0;
    }
    &::before{
        content: '';
        position: absolute;
        height: 6px;
        width: 8.5px;
        background-image: url(${listArrow});
        top:18px;
        left: 15px;
    }
`
const SubInfo =styled.ul`
    
`
const SubInfoListItem = styled.li`
    color: ${Theme.colors.secondary.grey};
    padding: 8px 60px;

    position: relative;
    &::before{
        content: '';
        position: absolute;
        height: 13px;
        width: 8px;
        background-image: url(${subInfoArrow});
        top:10px;
        left: 16px;
    }
`
type SubInfoItemProps = {
    image:string
}

const SubInfoItem = styled.span<SubInfoItemProps>`
position: relative;
    &::before{
        position: absolute;
        content: '';
        width: 15px;
        height: 13px;
        background-image: url(${props => props.image});
        top: 3px;
        left: -23px;
    }
`