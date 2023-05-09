//import React from 'react';
function add()
{
    let a=parseInt(prompt("Enter a values"));
    let b=parseInt(prompt("Enter b values"));
    let c=a+b;
    alert('Additions of numbers is :'+c);
}
function subs()
{
    let a=parseInt(prompt("Enter a values"));
    let b=parseInt(prompt("Enter b values"));
    let c=a-b;
    alert('Substractions of numbers is :'+c);
}

function mult()
{
    let a=parseInt(prompt("Enter a values"));
    let b=parseInt(prompt("Enter b values"));
    let c=a*b;
    alert('Multiplications of numbers is :'+c);
}
// export default add;
export {add,subs,mult}