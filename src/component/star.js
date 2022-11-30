import start from "../assest/img/star.png"
import favstart from "../assest/img/favStar.png"
export default function Star(props){
    const favImg= props.isLike?favstart:start;
    return(
        <img src={favImg} alt="" />
    )
}