import React, { useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useState } from 'react';


export const Login = () => {
    const auth = getAuth()
    const [cambiar, setCambiar] = useState(true)
    const [emailr,setemailr] = useState(false)

    async function register(e){
        e.preventDefault()
        console.log(e.target.email.value)
        const email = e.target.email.value
        const contra = e.target.contraseña.value


        /* manda el mail de verificación */
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                console.log("fijate le mail master")
                /* guarda el mail en localstorage asi no le preugnto el mail denuevo al usuario */
                window.localStorage.setItem('emailForSignIn', email);
                // ...

            })

                /* Puse useEffect para que si cambia la variable emailr vuelva a
                correr este codigo y registre el ususario  */
           
                createUserWithEmailAndPassword(auth, email,contra)
                .then((userCredential) =>{
                    //signed In
                    const user = userCredential.user
                    
                    console.log(user)
                })
                .catch((error) => {
                    console.log(error)
                    // ..
                })
            


            // Confirm the link is a sign-in with email link.
if (isSignInWithEmailLink(auth, window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch((error) => {
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}
            
        }

                
            

        
    const cambiarLogin = () =>{
        setCambiar(!cambiar)
    }

    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        /*  https://www.example.com/finishSignUp?cartId=1234 */
        url: 'https://bigandbonnie.netlify.app/',
        
        // This must be true.
            handleCodeInApp: true
     
        };

  return (
<>


    <button onClick={cambiarLogin} className='boton'>{cambiar? 'Ya estas registrado?' : 'No estas registrado?'}</button>

    {cambiar? 
        <form onSubmit={register}>
            <h3>Registro</h3>
        <input type="email" name="email" placeholder='Email' id="registerEmail" />
        <input type="password" name="contraseña" placeholder='Contraseña' id="registerContraseña" />
        <input className='boton' type="submit" name="send" id=""  value={'Registrarse'}/>
    </form>
    :
    <h3>login</h3>  
}

   
</>
  )
}
