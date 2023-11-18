

import { useState ,react} from "react";
import auth from "../firebaseConfig";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
// import "../public/assets/css/style.css";

const AdminLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in:", user);
      // Redirect or perform other actions upon successful login
      router.push("/about");
    } catch (error) {
      // Handle authentication errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("wrong password or id ");
      console.error("Authentication error:", errorCode, errorMessage);
    }
  };

  return (
    <div className="login">
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Admin Login</h1>
          <p>
            Fortune Education Services
          </p>
        </div>
      </div>

      <div className="right">
        <h5>Login</h5>
        
        <div className="inputs">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
    </div>
  );
};

export default AdminLogin;

// -------------------------admin page---------------------------------

// pages/admin.js

// import { useEffect } from 'react';
// import { auth } from '../lib/firebase';
// import { useRouter } from 'next/router';

// const AdminPage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuthentication = () => {
//       // Check if the user is authenticated
//       const user = auth.currentUser;

//       if (!user) {
//         // Redirect to the login page if not authenticated
//         router.push('/login');
//       }
//     };

//     // Call the function to check authentication on component mount
//     checkAuthentication();

//     // You might also want to set up a listener for auth state changes
//     // and call checkAuthentication when the auth state changes.

//     // For example:
//     // const unsubscribe = auth.onAuthStateChanged(() => {
//     //   checkAuthentication();
//     // });

//     // Clean up the listener on component unmount
//     // return () => unsubscribe();
//   }, [router]);

//   // Render the admin page content
//   return (
//     <div>
//       <h1>Admin Page</h1>
//       {/* ... (admin page content) */}
//     </div>
//   );
// };

// export default AdminPage;

// ------------------------------------------------------------------
