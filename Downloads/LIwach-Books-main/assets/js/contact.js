{/* <form onsubmit="return false">
</form>  */}

var elms = document.getElementsByTagName('input');
for(var i = 0; i < elms.length; i++) {
    var sb = elms[i];
    if(submit.type == "submit" && submit.value == "YOUR_VALUE" ) {
        submit.click();
        break;
    }
}
const form = document.getElementById('signup');

form.elements[0]; // by index
form.elements['name']; // by name
form.elements['name']; // by id (name & id are the same in this case)

form.elements[1]; // by index
form.elements['email']; //  by name
form.elements['email']; // by id

const form = document.getElementById('signup');
const name = form.elements['name'];
const email = form.elements['email'];

// getting the element's value
let fullName = name.value;
let emailAddress = email.value;