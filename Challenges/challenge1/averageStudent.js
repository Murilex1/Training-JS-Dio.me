/*
    Create a program to receive the average of a student
    if the average is < 5 : fail
    if the average is >=5 and < 7 : recovery
    if the average is >= 7 : approved
 */
  
function averageStudent() {
    const name = 'Murilo Ferreira';
    const notes = [];
    
    notes.push(8);
    notes.push(5);
    notes.push(6);
    notes.push(7);
    notes.push(8);

    let summ = 0;
    for(let i=0;i<notes.length;i++) {
        const note = notes[i];
        summ = summ+note;
    }

    if(summ < 5) {
        console.log('Fail');
    }else if (summ >=5 && summ < 7) {
        console.log('Recovery');
    }else {
        console.log('Approved');
    }    
}


module.exports = {averageStudent};