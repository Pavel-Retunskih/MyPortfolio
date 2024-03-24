import { Section } from "../../components/section/Section";
import { Container } from "../../components/container/Container";
import { FlexWrapper } from './../../components/flexwrapper/FlexWrapper';
import styled from "styled-components";
import { Theme } from "../../styles/Theme";


export function Home(){
    return (
        <Section>
            <Container>
                <FlexWrapper direction="row" justify="space-around" align="center" wrap="wrap"
                    style={{padding:"180px 0"}}>
                        <FlexWrapper direction="column" align="flex-start">
                            <MainTextGreeting>Hi all. I am</MainTextGreeting>
                            <HeadlineText>Pavel Retynskih</HeadlineText>
                            <MainTitle>&lt; Front-end developer</MainTitle>
                            <MainComentsText>// complete the game to continue</MainComentsText>
                            <MainComentsText>// you can also see it on my Github page</MainComentsText>
                            <Text color = "#E5E9F0" size = {Theme.font.size.labes}>
                            <ColorText color={Theme.colors.secondary.blue} size = {Theme.font.size.labes}>const githubLink</ColorText> = <a href="https://github.com/Pavel-Retunskih"><ColorText color={Theme.colors.accent.pink} size = {Theme.font.size.labes}>“https://github.com/Pavel-Retunskih”</ColorText></a>
                            </Text>
                        </FlexWrapper>
                        <SnakeGame>
                        <Screw top="12px" left="12px"></Screw>
                        <Screw top="12px" right="12px"></Screw>
                        <Screw bottom="12px" left="12px"></Screw>
                        <Screw bottom="12px" right="12px"></Screw>
                        </SnakeGame>
                </FlexWrapper>
                
            </Container>
        </Section>
    )
}

const HeadlineText = styled.span`
    font-family:${Theme.font.family};
    font-size: ${Theme.font.size.headline};
    color: #E5E9F0;
    white-space: nowrap;
    margin-top: 20px;
    margin-bottom: 25px;
`
const MainTitle = styled.h1`
    font-family:${Theme.font.family};
    font-size: ${Theme.font.size.subHeadline};
    color: ${Theme.colors.secondary.blue};
    margin-bottom: 90px;
    white-space: nowrap;
`
const MainTextGreeting = styled.span`
    font-family:${Theme.font.family};
    font-size: ${Theme.font.size.body};
    color: #E5E9F0;
`
const MainComentsText = styled.span`
    font-family:${Theme.font.family};
    font-size: ${Theme.font.size.labes};
    color: ${Theme.colors.secondary.grey};
    margin-bottom: 15px;
`
type TextPropsType = {
    color: string
    size: string
}
const ColorText = styled.span<TextPropsType>`
    display: inline-block;
    color:${props=>props.color};
    font-size:${props=>props.size};
`
const Text = styled.p<TextPropsType>`
    color:${props=>props.color};
    font-size:${props=>props.size};
    line-height: 1.2;
`

const SnakeGame = styled.div`
    width: 510px;
    height: 475px;
    padding: 30px;
    border: 1px solid rgb(12, 22, 22);
    border-radius: 8px;
    box-shadow: inset 0px 2px 0px 0px rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(64px);
    background: linear-gradient(153.43deg, rgba(23, 85, 83, 0.7) 1.705%,rgba(67, 217, 173, 0.09) 81.819%);
`

type ScrewPositionProps = {
    top?: string
    left?: string
    right?: string
    bottom?: string
}
const Screw = styled.span<ScrewPositionProps>`
    position: absolute;
    width: 13px;
    height: 13px;
    top: ${props=>props.top};
    right: ${props=>props.right};
    left: ${props=>props.left};
    bottom: ${props=>props.bottom};
    border-radius: 50%;
    box-shadow: inset 0px 1px 2px 0px rgb(26, 130, 119),2px 2px 4px 0px rgb(13, 67, 65);
    background: radial-gradient(73.00% 73.00% at 50% 27%,rgb(25, 108, 106) 15.104%,rgb(17, 75, 74) 100%);
    &::before,
    &::after{
        position: absolute;
        content: '';
        height: 8px;
        border: 1px solid rgb(17, 73, 68);
        background: rgb(5, 44, 32);
    }
    &::after{
        top: 28%;
        left: 42%;
        transform: rotate(45deg);
    }
    &::before{
        top: 28%;
        left: 42%;
        transform: rotate(-45deg);
    }
`
