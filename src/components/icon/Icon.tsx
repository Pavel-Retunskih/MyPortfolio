import sprite from "../../assets/sprite.svg"


type IconPropsType = {
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    iconId: string

}

export function Icon (props:IconPropsType){
    return(
<svg width={`${props.width || "40" }`} height={`${props.height || "40" }`} viewBox={`${props.viewBox || "0 0 40 40" }`} fill={`${props.fill} || "none"`} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref = {`${sprite}#${props.iconId}`} />
        </svg>
    )
}