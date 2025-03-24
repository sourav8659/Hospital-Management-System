const success=(flag) => {
   const successBox=document.getElementById('successBox');
   const requiredField=document.getElementsByClassName('requiredField');
   const confirmPassword=document.getElementById('confirmPassword');
   const password=document.getElementById('password');
   let flagPoint=0;
   for(let i=0;i<requiredField.length;i++) {
      if(requiredField[i].required==true && requiredField[i].value=="") {
         flagPoint=1;
         break;
      }
      else
         flagPoint=0;
      if(confirmPassword!=null) {
         if(confirmPassword.value!="" && password.value!="" && confirmPassword.value!==password.value) {
            flagPoint=2;
            break;
         }
      }
   }
   if(flagPoint==0) {
      if(flag == 0)
         successBox.style.display='inline';
      else
         successBox.style.display='none';
   }
   else if(flagPoint==2) 
      alert("Password and Confirm Password doesn't match");
   else
      alert('Please Fill the required Fields');
};