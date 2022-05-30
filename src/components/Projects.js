// Import Assets
import dogotask from '../assets/dogotask.png';
import resort from '../assets/resort.png';
import portfoliosite from '../assets/portfolio-site.png';


const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Portfolio Site</h3>
                    <img src={portfoliosite} alt="PortFolio page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>
                    <a href="https://github.com/zeredogo" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Resort</h3>
                    <img src={resort} alt="Resort Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>
                    <a href="https://github.com/zeredogo/dogoempire-react-resort" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Dogo Task</h3>
                    <img src={dogotask} alt="Task Tracker Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>
                    <a href="https://github.com/zeredogo/reacttask2022" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;