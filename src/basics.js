

// 

//
/*
The testing ground for all the java stuff here 
*/

const data = {
    name: 'Shubham',
    designation: 'Software Engineer'
}

// ObjectName["propertyName"]

for (const obj in data) {
    console.log(`${obj}: ${data[obj]}`)
}