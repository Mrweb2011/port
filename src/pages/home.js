import React from '../css/home.css'
import Image from "../components/imgs/photo_2024-09-03_21-14-58.jpg";
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Home() {
  return (
    <div>
<div className="Jami">
    <div className="Yozuv">
      <div data-aos="fade-up" data-aos-duration="1000" className="text">
        <h1>Hi, I'm Muhammadrasul!</h1>
        <h3>
            13 y.o Frontend Developer, Frontend mentor, from <br />Uzbekistan,
            Welcome to my personal website
        </h3>
      </div>
        <Link to={"About"}><button className='btn_about'>About me</button></Link>
        <Link to={"Portfolio"}><button className='btn2'>Portfolio</button></Link>
        <div className="i_lar">
          <Link target="_blank" to={'https://www.linkedin.com/in/muhammadrasul-samaritdinov-95a10a327/'}><FaLinkedin className='icon' /></Link>
          <Link target="_blank" to={'https://github.com/Billionare-web'}><FaGithub className='icon' /></Link>
          <Link target="_blank" to={'https://www.instagram.com/Billionare_web'}><FaInstagram className='icon' /></Link>
          <Link target="_blank" to={'https://t.me/Billionare_web'}><FaTelegram className='icon' /></Link>
        </div>
      </div>
      <img src={Image} alt="" />
    </div>
    <hr className="hr_home" />
    <footer>
      <h3>Muhammadrasul.Dev 2023 - 2024 | Made with ❤️</h3>
    </footer>
    </div>
  )
}

export default Home
