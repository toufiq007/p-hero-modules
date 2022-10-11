const students = {
    name:'limon',
    age:16,
    class:'ten',
    marks:{
        math:76,
        physics:81,
        chemistry:87,
    }
}

// dot notation
/**
 * it means to access the values with "." notation
 */
const marks = students.marks;
const chemistry = marks.chemistry


// braket notation
/**
 * it means to access the values with [] notation
 */
const math = students["marks"]["math"]
console.log(math)

const subject = 'chemistry'
const subjectMarks = students.marks[subject]

const marks2 = students.marks[subject]

console.log(marks2)




