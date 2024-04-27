'use strict';

const course = ['Chemistry', 'Botany', 'Zoology', 'Biology', 'French'];
console.log(course);
console.log(course.length);
console.log(course[0]);
console.log(course[1]);
console.log(course[2]);
console.log(course[3]);
console.log(course[4]);
// Slice and Splice

console.log(course.slice(2, 4));
console.log(course);
/*Slice removes elements into a new array  without changing the original array*/

console.log(course.splice(2, 4));
console.log(course);
/*Splice extracts elements into a new array while changing the original array*/
