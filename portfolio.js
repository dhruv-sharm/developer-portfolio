import emoji from "react-easy-emoji";

export const greetings = {
	name: "Dhruv  Sharma",
	title: "Hi all, I'm Dhruv..",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with MongoDB, Express, React, Node, Bootstrap and Tailwind CSS-Framework",
	resumeLink:
	"https://drive.google.com/file/d/1F0wGhj8N37g351tvy9rf2fYGO239U4bf/view?usp=sharing",
};

export const openSource = {
	githubUserName: "dhruv-sharm",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/dhruv.sharmx",
	instagram: "https://www.instagram.com/dhruvv095",
	twitter: "https://twitter.com/dhruvv095",
	linkedin: "https://www.linkedin.com/in/dhruv-sharma170",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Html, CSS & JavaScript"),
				emoji(
					"⚡ Building RESTful APIs using Scratch"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Database",
			lottieAnimationFile: "/lottie/skills/S67eoQh5Id.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ using both database SQL and Non-SQL as per requirment"),
				emoji("⚡ using My-sql for SQL database"),
				emoji("⚡ using MongoDB for Non-SQL database"),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb-icon",
				},
				{
					skillName: "SQL",
					fontAwesomeClassname: "bi:filetype-sql",
				},


			],
		},
		
		{
			title: "Hosting & Management",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),emoji("⚡ other TECH skill"),
			],
			softwareSkills: [
				
					
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
					
			]		
		},
	]
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "80",
	},
];

export const educationInfo = [
	{
		schoolName: "Govt. AKIT, Uttarakhand ",
		subHeader: "B.Tech Degree in Computer Science",
		duration: "September 2022 - June 2025",
		desc: "Currently focusing on Learning  :",
		descBullets: [
			"ready  to take INTERSHIP",
			"learning tech like AI etc",
			"enjoying college life",
			
		],
	},
{
schoolName: "Govt. Polytechnic ",
		subHeader: "3 Years Diploma in Computer Science",
		duration: "July 2019 - June 2022",
		desc: "Learned some Skill to write code in :",
		grade: "8.7 CGPA",
		descBullets: [
			"C & C++ ",
			"Full Stack Web Development",
			"Software Development & Debugging",
			
		],
	},
];

export const experience = [
	{
		role:"Full Stack Developer-(MERN)",
		companylogo: "/img/icons/common/fullstack-logo.png",
		desc: "I worked as Full Stack web developer to design web based admin dashboards for mulitple apps and create Fully responsive website using  Bootstrap/Tailwind, jQuery, React.js, Node, Express and some other libraries & framework, created REST APIs using scratch,  deployed it on Heroku server or other server's.",
		
	},
];

export const projects = [
	// {
	
	// 	name: "developer-portfolio",
	// 	desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
	// 	github: "https://github.com/1hanzla100/developer-portfolio",
	// 	link: "https://developer-portfolio-1hanzla100.vercel.app/",
	// },
	{
		name : "Working on it..",
		desc: "error",
	}
];

export const feedbacks = [
	{
		name: "Lorem-11",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "Lorem-12",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Dhruv Sharma",
	description:
		"A passionate Full Stack Web Developer.",
	author: "Dhruv Sharma",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://developer-portfolio-1hanzla100.vercel.app",
	keywords: [
		"Dhruv",
		"Dhruv Sharma",
		"@dhruv.sharmx",
		"dhruv.sharmx",
		"Portfolio",
		"Dhruv Portfolio ",
		"Dhruv Sharma Portfolio",
		"dhruv_sharmx",
		"web developer"
	],
}
