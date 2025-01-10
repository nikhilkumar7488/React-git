import React from 'react';
import project1 from "../assets/images/proj5.png";
import project2 from "../assets/images/proj6.png";

export const About = () => {
    return(
      <section id="about" className="text-white p-8">
        <h2 className="text-6xl font-bold mb-8" >
            About <span className="text-emerald-300">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="border border-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">01. Background</h3>
            <p className="text-white/50 mb-6">
            I'm a passionate full-stack developer with a strong foundation in computer science and a love for creating inovative web solutios. My journey in tech started with a curiosity about how things work, which led me to pursue a carrer in web development </p>

            <div className="rounded-lg p-4 mb-4 border border-white/20">
            <code className="text-emerald-200/50">
            const skills = [<br />
                &nbsp; &nbsp; 'JavaScript',
                <br />
                &nbsp; &nbsp; 'React',
                <br />
                &nbsp;&nbsp; 'Node.js',
                <br />
                &nbsp;&nbsp; 'Python',
                <br />
                &nbsp;&nbsp; 'SQL',
                <br />
                &nbsp; &nbsp; 'Git & Github'
                <br />
            ];
            </code>
            </div>
            </div>

            <div className="border border-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">02. Expertise </h3>
            <p className="text-white/50">
            I specialize in building robust and scalable web application using modern technolgies. My expertise spans both front-end and back-end development, allowing me to create seamless, end-to-end solutions.</p>
            <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
            <img 
            src={project1} 
            alt="project1"
            className="absolute inset-0 w-full h-full object-cover"
            />
            </div>
            </div>
            <div className="border border-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
            <p className="text-white/50 mb-4">
            I'm proficient in a wide range of technologies and constantly expanding my skills set to stay at the forefront of web devlopment</p>
            <div className="grid grid-cols-1 text-center gap-4">
                <div className="border border-white/20 rounded-lg p-3">
                    <h4 className="text-emerald-300 font-medium mb-2">Frontend</h4>
                    <ul className="text-white/50 space-y-1 text-sm">
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Tailwind Css</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>

                <div className="border border-white/20 rounded-lg p-3">
                <h4 className="text-emerald-300 font-medium mb-2">Backend</h4>
                    <ul className="text-white/50 space-y-1 text-sm">
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>PostgreSQL</li>
                        <li>MongoDb</li>
                    </ul>
                </div>
              </div>
           </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="border border-white/20 rounded-lg p-6">
            <div className="space-y-4">
                <div>
                    <label className="block tect-sm font-medium mb-1" >
                        Front-end
                    </label>
                    <div className="w-full bg-white/10 rounded-full h-2"> 
                    <div className="bg-emerald-300 h-2 rounded-full"
                    style={{width: "90%"}}
                    ></div>
                    </div>
                </div>
                <div>
                    <label className="block tect-sm font-medium mb-1" >
                        Back-end
                    </label>
                    <div className="w-full bg-white/10 rounded-full h-2"> 
                    <div className="bg-emerald-300 h-2 rounded-full"
                    style={{width: "85%"}}
                    ></div>
                    </div>
                </div>
                <div>
                    <label className="block tect-sm font-medium mb-1" >
                        DevOps
                    </label>
                    <div className="w-full bg-white/10 rounded-full h-2"> 
                    <div className="bg-emerald-300 h-2 rounded-full"
                    style={{width: "75%"}}
                    ></div>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl font-bold mt-4 mb-2">04. Approach</h3>
            <p className="text-white/50">
            I believe in writing clean, maintable code and following best practices. My approach involves understanding client needs, planning thoroughly, and delivering high-quality solutions on time.</p>
            </div>
            <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between">
            <div className="relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">

            <img 
            src={project2} 
            alt="project2"
            className="absolute inset-0 w-full h-full object-cover" />
            
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-2">05. Goals</h3>
                <p className="text-white/50">
                My goal is to continue growing as a developer, tackilng challenging projects, and contributing to the tech community. I'm always excited to learns technologies and push the boundaries of what's possible in web development.
                </p>
            </div>
            </div>
        </div>
      </section>
    );
};