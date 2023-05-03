import {
	SiGmail,
	SiGithub,
	SiTwitter,
	SiLinkedin,
	SiWhatsapp,
	SiTelegram,
} from "react-icons/si";

import { FaPhone } from "react-icons/fa";



const contacts = [
	{icon: <SiGmail />, value: <a href="mailto://praiseike123@gmail.com">praiseike123@gmail.com</a>},
	{icon: <SiGithub/>, value: <a href="https://github.com/praiseike">github.com/praiseike </a>},
	{icon: <SiTwitter/>, value: <a href="https://twitter.com/Praise89897380">@Praise89897380</a>},
	{icon: <SiLinkedin />, value: <a href="https://www.linkedin.com/in/ibangha-ike-803ab5195">Ibangha Ike</a>},
	{icon: <SiTelegram/>, value: "@praise_ike"},
	{icon: <SiWhatsapp/>, value: "+234 9066853578"},
	{icon: <FaPhone/>, value: "+234 8032334874"},
]

export default contacts;