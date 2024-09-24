// let myform = document.getElementById("myform1");
// myform.addEventListener("submit", function(event) {
//   event.preventDefault();
// });

// let nameE1 = document.getElementById("username");
// let nameErr1 = document.getElementById("error1");
// nameE1.addEventListener("blur", function(event){
//   if(event.target.value === ""){
//     nameErr1.textContent = "Please enter your name";
//     nameErr1.style.color = "red";
//   }
//   else{
//     nameErr1.textContent = "";
//   }

// });


let myform = document.getElementById("myform1");
myform.addEventListener("submit", function(event) {
  event.preventDefault();
});

let nameE1 = document.getElementById("username");
let nameErr1 = document.getElementById("error1");
nameE1.addEventListener("blur", function(event){
  if(event.target.value === ""){
    nameErr1.textContent = "*Please enter your name";
    nameErr1.style.color = "red";
  }
  else{
    nameErr1.textContent = "";
  }

});
let emailE1 = document.getElementById("email");
let emailErr1 = document.getElementById("error2");
emailE1.addEventListener("blur", function(event){
  if(event.target.value === ""){
    emailErr1.textContent = "*Please enter your Email";
    emailErr1.style.color = "red";
  }
  else{
    emailErr1.textContent = "";
  }

});
let password1 = document.getElementById("password");
let passwordErr1 = document.getElementById("error3");
password1.addEventListener("blur", function(event){
  if(event.target.value === ""){
    passwordErr1.textContent = "*Please enter your password";
    passwordErr1.style.color = "red";
  }
  else{
    passwordErr1.textContent = "";
  }

});

let cp = document.getElementById("confirmpassword");
let cpErr1 = document.getElementById("error4");
cp.addEventListener("blur", function(event){
  if(event.target.value === ""){
    cpErr1.textContent = "*Please enter your Confirmpassword";
    cpErr1.style.color = "red";
  }
  else{
    cpErr1.textContent = "";
  }

});




































// function register() {
//     // const form = document.getElementById('register-form');
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirmpassword').value;
  
//     // Check if all fields are filled
//     if (username === '' || email === '' || password === '' || confirmPassword === '') {
//       alert('Please fill all fields');
//       return;
//     }
  
//     // Check if email is valid
//     if (!validateEmail(email)) {
//       alert('Invalid email');
//       return;
//     }
  
//     // Check if passwords match
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
  
//     // If all validation passes, submit the form
//     form.submit();
//   }
  
//   function validateEmail(email) {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
//   }































// document.getElementById("btn1").addEventListener("click", show);
 


// function func1(){
//     let user;
//     user = document.getElementById("username").value;
//     if(user == ""){
//         alert("Please enter your username");
 
//      }else{
//         if(user == /.[a-z]&&[A-Z]/){
//             document.getElementById("username").innerHTML = "username";


//         }
//     }
// }

























































// function register() {
//     const forms =  document.getElementsByName('contact');

//         let username = document.contact.username.value;
//         let userStatus =   EmailStatus = PasswordExp = confirmExp = false;
//         const alphaExp = /^[a-z]+$/;  
       
//     //    let phonenumber = document.contact.phonenumber.value;
//     //    const numExp = /^[0-9]+$/;
     
//        let Email = document.contact.Email.value;
//        const EmailExp  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//        let Password = document.contact.Password.value;
//        const PasswordExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

//        let confirmpassword = document.contact.confirmpassword.value;
//        const confirmExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
      
     
     
     
//        if (username === "") {
//          document.getElementById("username").innerHTML = "please fill the Name";
//        } else{
//            if (username.match(alphaExp)) {
//              document.getElementById("username").innerHTML = ""
//              userStatus = true;
//            } else {
//              document.getElementById("username").innerHTML = "only characters"
//            }
//        }
        
//     //    if (phonenumber === "") {
//     //      document.getElementById("phoneNote").innerHTML = "please fill the Number";
//     //    } else {
//     //      if (phonenumber.match(numExp)) {
//     //          if (phonenumber.length === 10) {
//     //              document.getElementById("phoneNote").innerHTML = ""
//     //              phoneStatus = true;
//     //          }
//     //          else {
//     //              document.getElementById("phoneNote").innerHTML = "10 Digit Number";
//     //          }
//     //      } else {
//     //          document.getElementById("phoneNote").innerHTML = "only Digits";
//     //      }
//     //    }
//          if (Email === "") {
//              document.getElementById("email").innerHTML = "please fill the Email"; 
//          } else {
//               if (Email.match(EmailExp)) {
//                  document.getElementById("email").innerHTML = ""
//                  EmailStatus = true;  
//               } else {
//                  document.getElementById("email").innerHTML = "Invalid Email";
//               }
//          }


//         if(Password === ""){
//             document.getElementById("password").innerHTML = "please fill the Password";
//         }else{
//             if(Password.match(PasswordExp)){
//                 document.getElementById("password").innerHTML = ""
//                 PasswordStatus = true;
//             }else{
//                 document.getElementById("password").innerHTML = "Password must be 8-15 characters long and must";
//             }
//         }
        

//         if(confirmpassword === ""){
//             document.getElementById("confirmpassword").innerHTML = "please fill the Password";
//         }else{
//             if(confirmpassword.match(PasswordExp)){
//                 document.getElementById("confirmpassword").innerHTML = ""
//                 PasswordStatus = true;
//             }else{
//                 document.getElementById("confirmpassword").innerHTML = "Password must be 8-15 characters long and must";
//             }
//         }
           
//        if (userStatus === true  &&  EmailStatus === true && PasswordExp == true &&confirmExp == true ) {
//          return true;
//        } else  {
//          return false;
//        }
     
//      }