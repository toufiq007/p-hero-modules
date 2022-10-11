
class TeamMember{
    constructor(name,location){
        this.name = name;
        this.location = location
    }
    name;
    location;
    provideFeedback(){
        console.log(`${this.name} for your feedback.`)
    }
}

class Instructor extends TeamMember{
    constructor(name,location){
        super(name,location)
    }
    designation = "instructor";
    team = "instructor team";
    
    startSupportSession(time){
        console.log(`start the support session ${time}`)
    }
    createQuiz(moduleName){
        console.log(`please create for quiz module ${moduleName}`)
    }
    provideFeedback(){
        console.log(`${this.name} for your feedback.`)
    }
    
}



class Developer extends TeamMember{
    constructor(name,location,tech){
        super(name,location);
        this.tech = tech
    }
    designation = "Web developer";
    team = "web team";
    
    developFeature(feature){
        console.log(`please develope the ${feature} feature`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
    
}

const alia = new Developer('alia','india','react')
alia.developFeature('website dark mode')
console.log(alia["tech"]) // bracket notation


class JobPlacement extends TeamMember{
    constructor(name,location,region){
        super(name,location)
        this.region = region
    }
    designation = "Job placement commandos";
    team = "job placement team";
    
    provideResume(feature){
        console.log(`please develope the feature ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
}
