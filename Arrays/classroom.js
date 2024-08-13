const student = ['Fernando', 'Antonio', 'Emma'];


//Add item to Array
student.push('Antonio');
//or
student[4] = 'Anna';


//Remove first item to indice
student.shift();

//Remove last item to indice
student.pop();

console.log(student);

/*----Student average-----*/
const name = 'Murilo Ferreira';
const notes = [];

notes.push(8);
notes.push(5);
notes.push(6);
notes.push(7);
notes.push(8);

//Read list size 
notes.length;

let summ = 0;
for(let i=0;i<notes.length;i++) {
    const note = notes[i];
    summ = summ+note;
}

const studentAverage = summ / notes.length;

console.log(`Your average is ${studentAverage}`)
/*---------*/
