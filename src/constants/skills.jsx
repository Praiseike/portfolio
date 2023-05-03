import {

	FaReact,
	FaCss3,
	FaHtml5,
	FaNodeJs,
	FaLaravel,
	FaPhp,

} from 'react-icons/fa';

import {

	SiMongodb,
	SiJavascript,
	SiMysql,
	SiTailwindcss,

} from 'react-icons/si';


const skills = {
	backend: [
		{
			name: "NodeJS",icon: <FaNodeJs className="text-3xl mr-2"/>,
			text: "Node.js is an open-source, server-side JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side and build scalable network applications quickly."
		},
		{
			name: "MongoDB", icon: <SiMongodb className="text-3xl mr-2"/>,
			text: "MongoDB is a NoSQL document-oriented database that allows for flexible and scalable data storage. It uses JSON-like documents with dynamic schemas, making it easy to store and retrieve data."
		},
		{
			name: "PHP", icon: <FaPhp className="text-3xl mr-2"/>,
			text: "PHP is a server-side scripting language that is widely used for web development. It's a powerful language that can be used to create dynamic web pages and web applications."
		},
		{
			name: "Laravel", icon: <FaLaravel className="text-3xl mr-2"/>,
			text: "Laravel is a PHP web application framework that provides elegant syntax and tools needed for building modern, robust, and maintainable web applications. It uses the Model-View-Controller (MVC) architecture pattern and offers features such as routing, middleware, and authentication."
		},
		{
			name: "MySQL", icon: <SiMysql className="text-3xl mr-2"/>,
			text: "MySQL is an open-source relational database management system that uses SQL to manage and manipulate data. It's widely used in web development and is known for its scalability, reliability, and security."
		},
	],

	frontend:[
		{
			name: "HTML",  icon: <FaHtml5 className="text-3xl mr-2"/>,
			text: "HTML (Hypertext Markup Language) is a standard markup language used to create web pages. It defines the structure and content of web pages and is essential for building any website."
		},
		{
			name: "CSS",  icon: <FaCss3 className="text-3xl mr-2"/>,
			text: "CSS (Cascading Style Sheets) is a style sheet language used to define the visual appearance of HTML elements on a web page. It allows developers to customize the look and feel of a website and create visually appealing designs."
		},
		{
			name: "React",  icon: <FaReact className="text-3xl mr-2"/>,
			text: "React is a popular JavaScript library used for building user interfaces. It provides a way to create reusable components and makes it easy to manage the state of a web application."
		},
		{
			name: "Javascript",  icon: <SiJavascript className="text-3xl mr-2"/>,
			text: "JavaScript is a high-level programming language used to create dynamic and interactive web pages. It's one of the core technologies used in web development and is supported by all modern web browsers."
		},
		{
			name: "TailwindCSS",  icon: <SiTailwindcss className="text-3xl mr-2"/>,
			text: "Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes for styling web pages. It allows developers to build custom designs quickly and efficiently, without having to write CSS from scratch."
		},
	]
}

export default skills;