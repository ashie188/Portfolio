import React from "react";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div class="header">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          </div>
        <div className="overlay">
          <div className="hero-content">
            <div className="text-section">
              <h1>Ashutosh Hamand</h1>
              <p>I'm a Full-Stack Developer passionate about building scalable web applications and solving problems with code.</p>
              <h2>Full-Stack Developer</h2>
            </div>
            <div className="image-section">
              <img src="/profile.jpg" alt="Profile" />
            </div>
          </div>
        </div>
      </section>
      <div className="techstackbackground">
      <div className="techstack">
        <h2>What i do?</h2>
        <h1 class="expertise-title">
  <span>A</span><span>r</span><span>e</span><span>a</span><span>s</span><span>&nbsp;</span>
  <span>o</span><span>f</span><span>&nbsp;</span>
  <span>E</span><span>x</span><span>p</span><span>e</span><span>r</span><span>t</span><span>i</span><span>s</span><span>e</span>
        </h1>

        <div className="techstackbuttons">
          <p className="stack">DSA</p>
          <p className="stack">Java</p>
          <p className="stack">Python</p>
          <p className="stack">Html</p>
          <p className="stack">CSS</p>
          <p className="stack">JavaScript</p>
          <p className="stack">React</p>  
          <p className="stack">Nodejs</p>
          <p className="stack">Express</p>
          <p className="stack">Ejs</p>
          <p className="stack">SQL</p>
          <p className="stack">Postgress</p>
        </div>
      </div>
      </div>
      <div className="projects">
        <div className="textsection-projects">
          <h1>Featured</h1>
          <h2>Projects</h2>
        </div>
        <div className="projectssection-projects"></div>
      </div>
    </div>
  );
}

/*<div>
      <div className="relative w-64 h-64">
        <img style={{marginLeft:150}} src="./main_background.png" alt="bg" className="absolute inset-0 w-full h-full object-cover animate-floating" height="650px" width="80%"/>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <img src="/profile.jpg" alt="profile" className="w-48 h-48 rounded-full mx-auto border-4 border-cyan-400 shadow-lg" />
          <h1 className="mt-6 text-3xl font-bold">Welcome to Ashutosh Hamand's Portfolio</h1>
          <p className="mt-2 text-lg text-gray-300">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        </div>
      </div>
    </div>*/
