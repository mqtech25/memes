import React from "react";
import { useState } from "react";
import image from "../assest/img/mqtech.jpeg"
import start from "../assest/img/star.png"
import favstart from "../assest/img/favStar.png"
export default function BsCard(){
    const [user,setUser]=useState({
        name:"Muhammad Qasim",
        web:"https://mqtech25.github.io/portfolio/",
        email:"mqtech25@gmail.com",
        linkdin:"https://www.linkedin.com/in/mqtech/",
        position:"Frontend Developer",
        img:image,
        about:"Iʼm always energetic and eager to learn new skills and flexible in my working hours, being able to work evenings and weekends. Committed to learning and self-development so that I can consistently achieve better results. Eventhough I take my work seriously,I do have a good sense of humor",
        interest:{
            0:"Traveling", 1: "Movies", 2:"Gaming", 3: "Photography"
        },
        isFav:false,
    })
    const favImg= user.isFav?favstart:start;
    const fav=()=>{
        // setUser({...user,isFav:!user.isFav}) //direct change value  
        setUser(prevState=>{return {...user,isFav:!prevState.isFav}}) //direct change value  
    }
    return (
            <div className="card">
                <div className="card-head text-center">
                    <img src={user.img} className="card-img" alt="mqtech"></img>
                    <div className="ratting" onClick={fav}>
                        <img src={favImg} alt="" />
                    </div>
                    <h2 className="card-owner-title">{user.name}</h2>
                    <h3 className="card-owner-position">{user.position}</h3>
                    <a href={user.web} className="card-ower-web-link"><p className="card-ower-web m-0 my-2">mqtech25.com</p></a>
                    <div className="card-contect-btns">
                        <a href={"mailto:"+user.email} className="btn btn-light"><i className="fa-solid fa-envelope"></i> Email</a>
                        <a href={user.linkdin} className="btn btn-primary"><i className="fa-brands fa-linkedin"></i> Linkedin</a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="about">
                        <h2>About</h2>
                        <p>{user.about}</p>      
                    </div>
                    <div className="interest">
                        <h2>Interests</h2>
                        <p>
                        {Object.keys(user.interest).map((item,i)=>(
                            <span key={"interest"+item}>{user.interest[i] +", "}</span>
                        ))}
                        </p>
                    </div> 
                </div>
                <div className="card-footer">
                    <ul className="social-media">
                        <li className="social-media-item">
                            <a href="https://www.facebook.com/mqtech25" className="btn btn-secondary social-media-item-link"><i className="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li className="social-media-item">
                            <a href="https://www.instagram.com/mqtech25/" className="btn btn-secondary social-media-item-link"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li className="social-media-item">
                            <a href="https://github.com/mqtech25" className="btn btn-secondary social-media-item-link"><i className="fa-brands fa-github"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
    )
}