// function to change the parent of radio button style
function back (val){
    // if the general radio is selected
    if (val == 1){
        document.getElementById("Maingeneral").style.backgroundColor="#e0f1e7"
        document.getElementById("Maingeneral").style.borderColor="#0c7d69"
        document.getElementById("Mainsupport").style.borderColor="#474747"
        document.getElementById("Mainsupport").style.backgroundColor="white"
    }
    // if the support radio is selected
    if (val == 2){
        document.getElementById("Mainsupport").style.backgroundColor="#e0f1e7"
        document.getElementById("Maingeneral").style.backgroundColor="white"
        document.getElementById("Mainsupport").style.borderColor="#0c7d69"
        document.getElementById("Maingeneral").style.borderColor="#474747"
    }
}
// function for to check if the input is validation
function validation(){
    // set the variables 
    // set first name variable
    let firstName =document.getElementById("firstName").value
    // set last name varaible
    let lastName =document.getElementById("lastName").value
    // set the message variable
    let Message =document.getElementById("message").value
    // set the consent variable
    let consent =document.getElementById("consent")
    // to check the radio input value
    let a=0;
    // to select all radio input
    const radio=document.querySelectorAll("input[name='Query']")
    // to check the email validation
    let test =0;
    // to check the checkbox value
    let ch =0
    // to check the first name validation
    if(firstName == "" || firstName == null){
        document.getElementById("FirstNameErr").classList.remove("hide")
        document.getElementById("firstName").style.borderColor="#d73c3c"
    }else{
        document.getElementById("FirstNameErr").classList.add("hide")
        document.getElementById("firstName").style.borderColor="#474747"
    }
    // to check the last name validation
    if (lastName == "" || lastName == null){
        document.getElementById("LastNameErr").classList.remove("hide")
        document.getElementById("lastName").style.borderColor="#d73c3c"
    }else{
        document.getElementById("LastNameErr").classList.add("hide")
        document.getElementById("lastName").style.borderColor="#474747"
    }
    // to check the message validation
    if (Message == "" || Message == null){
        document.getElementById("MessageErr").classList.remove("hide")
        document.getElementById("message").style.borderColor="#d73c3c"
    }else{
        document.getElementById("MessageErr").classList.add("hide")
        document.getElementById("message").style.borderColor="#474747"
    }
    // function for radio input check
    function checkRadio(){
        for(let i=0 ; i < radio.length ; i++){
            // to check if any radio input is checked 
            if(radio[i].checked){
                document.getElementById("QueryErr").classList.add("hide")
                a=1; 
                break;
            }
        }
        // the situation if there is no one is selected
        if (a==0){
            document.getElementById("QueryErr").classList.remove("hide")
        }
    }
    checkRadio()
    // function to check the email validation
    function regix(){
        // set the email variable
        var Email =document.getElementById("email").value;
        // set the pattern for the correct email
        var pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
        // to check if the user input is weitten correctly
        if (pattern.test(Email)) {
            document.getElementById("EmailErr").classList.add("hide")
            document.getElementById("email").style.borderColor="#474747"
            test=1;
            
        }
        // the situation if the email isn't written coorectly
        else{
            document.getElementById("EmailErr").classList.remove("hide")
            document.getElementById("email").style.borderColor="#d73c3c"
            test=0;
        }
    }
    regix()
    // to check if the checkbox is checked
    if (consent.checked){
        document.getElementById("ConsentErr").classList.add("hide")
        ch = 1
    }
    // the situation if the checkbox isn't checked
    else{
        document.getElementById("ConsentErr").classList.remove("hide")
        ch=0
    }
    // the situation if the all input is validation
    if(firstName !== "" && lastName !== ""  &&  Message !== "" && ch==1 && a==1 && test ==1){
        document.querySelector(".succsses").style.marginTop="50px"
        // to show the message fo 2 sec
        setTimeout(()=>{
            document.querySelector(".succsses").style.marginTop="-250px"
        },2000)
        // to refresh the page after 2.5sec
        setTimeout(()=>{
            location.reload()
        },2500)
    }
}