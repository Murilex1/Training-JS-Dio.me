/*Multiplication table */
// let number = 0;
// for(let i=0;i<11;i++){
//     number = i * 5;
//     console.log(`5 x ${i} = ${number}`);
// }
/*---------------*/

/*Number pair*/
let numb = [0,1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<numb.length;i++) {
    const num = numb[i];
    if(num % 2 === 0){
        console.log(`${num}`)
    }
}
