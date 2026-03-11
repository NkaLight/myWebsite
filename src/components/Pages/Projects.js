import SwipeStack from "../SwipeStack";
import projectList from "../../data";
import PCards from "../PCards";
function Projects(props){

    return(
        <div className="main-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h1>My projects and interests</h1>
            <div className="project-stack-container">
            <SwipeStack
                cards={projectList}
                renderCard={(projectList, isTop) => (
                    <PCards
                        name={projectList.name}
                        image={projectList.image}
                        technologies={projectList.technologies}
                    />
                )}
            />
            </div>
        </div>
    )
}

export default Projects;