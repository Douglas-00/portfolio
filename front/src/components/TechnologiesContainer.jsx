import{
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiMongodb,
    DiJava
}from "react-icons/di"

import "../styles/components/Technologies.sass"

const Technologies = [
    {
        id: 1,
        icon: <DiHtml5 />,
        title: "HTML5",
        description: "HTML5 is the standard markup language for web pages."
    },
    {
        id: 2,
        icon: <DiCss3 />,
        title: "CSS3",
        description: "CSS3 is a popular style sheet language for web pages."
    },
    {
        id: 3,
        icon: <DiJsBadge />,
        title: "JavaScript",
        description: "JavaScript is a scripting language for web pages."
    },
    {
        id: 4,
        icon: <DiNodejsSmall />,
        title: "Node.js",
        description: "Node.js is a server-side JavaScript runtime for web pages."
    },

    {
        id: 6,
        icon: <DiReact />,
        title: "React",
        description: "React is a JavaScript library for building user interfaces."
    },
    {
        id: 5,
        icon: <DiMysql />,
        title: "MySQL",
        description: "MySQL is a relational database system for web pages."
    },
    
    {
        id: 7,
        icon: <DiMongodb />,
        title: "Mongodb",
        description: "mongodb is a relationa database system for web pages."
    },
    {
        id: 8,
        icon: <DiJava />,
        title: "Java",
        description: "Java é uma linguagem."
    },
]
const TechnologiesContainer = () =>{
    return <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {Technologies.map(tech => (
                <div id ={tech.id} key={tech.id} className="technology-card">
                        {tech.icon}
                        <div className="tecnology-info">
                            <h3>{tech.title}</h3>
                            <p>{tech.description}</p>
                        </div>
                </div>
            ))}
        </div>  
    </section>
    
}

export default TechnologiesContainer;