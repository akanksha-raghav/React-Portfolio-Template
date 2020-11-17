import React from 'react';
import Footer from './Footer';
import CardContent from './CardContent';
function Home() {

    const projects = [
        {
            title: "Student Code-in",
            summary: "Build the official website of Student Code-in. SCI is an open-source program for students to getting started with their Open-source journey.",
            tags: [
                "https://img.shields.io/badge/-Frontend%20-yellow",
                "https://img.shields.io/badge/-Web%20Development-yellow",
                "https://img.shields.io/badge/-Javascript%20-yellow",
                "https://img.shields.io/badge/-Database%20-yellow"
            ],
            github: "https://github.com/akanksha-raghav/StudentCode-in.github.io",
            live: "https://scodein.tech"
        },
        {
            title: "Student Mantras",
            summary: "A web based platform to find different listed opportunites, which includes job opportunites,internships, open-source programs and many more.",
            tags: [
                "https://img.shields.io/badge/-ReactJs-yellow",
                "https://img.shields.io/badge/-JavaScript-yellow",
            ],
            github: "https://github.com/akanksha-raghav/Minor_Project",
            live: "https://mantras.vercel.app/"
        },
        {
            title: "IBM-Watson-COVID-19",
            summary: "An IBM watson chatbot for getting information regarding COVID-19 .Its gives basic information about COVID-19 including :Probability Detector,Requirements Need ,Help desk,Testing center in India",
            tags: [
                "https://img.shields.io/badge/-Chatbot%20-yellow",
                "https://img.shields.io/badge/-Watson%20-yellow",
                "https://img.shields.io/badge/-JSON-yellow",
            ],
            github: "https://github.com/akanksha-raghav/IBM-Watson-COVID-19",
            live: "#"
        },
        
    ]

    
    const cardCreated = projects.map(project => (
        <div key={project.title} className="col-sm-4">
            <CardContent project={project} />
        </div>
    ))

    return (
        <div className="page">
            <section>
                <div className="section-title">
                    <h1><u>Projects</u></h1>
                </div>
            </section>
            <div className="container">
                <div className="row" style={{ justifyContent: "center" }}>
                    {cardCreated}
                </div>
            </div>
            <div className="section-title">
                <h1>My Blogs</h1>
                <br />
                <br />
                </div>
                <div className="container">
                <div className="row" style={{ justifyContent: "center" }}>
                <div id="retainable-rss-embed" 
                    data-rss="https://medium.com/feed/@akanksharaghav,
                    https://medium.com/feed/vue-mastery"
                    data-maxcols="2" 
                    data-layout="grid" 
                    data-poststyle="inline" 
                    data-readmore="Read the rest" 
                    data-buttonclass="btn btn-primary" 
                    data-offset="-200"
                >
                    </div>
                    </div>
                    </div>
            <Footer />
        </div>
    )
}

export default Home
