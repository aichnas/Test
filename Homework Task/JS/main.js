function hello() {
    // assigning Value with the ID of firstName to the Let variable name.
    // value is the thing inside input html element (unseen)
    let name= document.getElementById("firstName").value;
    // console is taking the varriable and logging it
    console.log(`Hello ${name}`);
    alert(`Hello ${name}`);

}
document.getElementById("enter").addEventListener("click", hello); 