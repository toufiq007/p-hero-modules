
// syntactic sugar

class Instructor{
    constructor(name,location){
        this.name = name;
        this.location = location
    }
    designation = "instructor";
    team = "web team";
    
    startSupportSession(time){
        console.log(`start the support session ${time}`)
    }
    createQuiz(moduleName){
        console.log(`please create for quiz module ${moduleName}`)
    }
    
}

// first instance
const amir = new Instructor('Amir Hamza','Mumbai')
console.log(amir)
amir.startSupportSession('10am')



// second instance
const golamBhai = new Instructor()
// golamBhai.createQuiz("module 60")




