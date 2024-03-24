import styled from "styled-components"

export function SnakeGame(){
    return(
        <SnakeGameWrapp>
            <Screw top="12px" left="12px"></Screw>
            <Screw top="12px" right="12px"></Screw>
            <Screw bottom="12px" left="12px"></Screw>
            <Screw bottom="12px" right="12px"></Screw>
        </SnakeGameWrapp>
    )
}

const SnakeGameWrapp = styled.div`
    position: relative;
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
