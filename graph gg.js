/*google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Language', 'Speakers (in millions)'],
          ['Basic Tees',  4.345],
          ['Custom Short pants',  2.607],
          ['Super Hoodies', 1.106],
          
        ]);

      var options = {
       legend: 'none',
        pieSliceText: 'label',
        
        pieStartAngle: 100,
      };

       var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);
      }*/



      
	  // Import the functions you need from the SDKs you need
	  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
	  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
	  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
	  
	  const firebaseConfig = {
        apiKey: "AIzaSyBlQEL7YL2EcIIsOiLFoVosRG1WgtW3PV0",
        authDomain: "openina-cdb08.firebaseapp.com",
        projectId: "openina-cdb08",
        storageBucket: "openina-cdb08.appspot.com",
        messagingSenderId: "961843308522",
        appId: "1:961843308522:web:bec6f12f2388b23ea53493",
        measurementId: "G-V9328S2723"
	  };

	  // Initialize Firebase
	  const app = initializeApp(firebaseConfig);
	  const analytics = getAnalytics(app);
	  const auth = getAuth();
	  console.log(app);

	  

	  //----- New Registration code start	  
	  document.getElementById("register").addEventListener("click", function() {
		  var email =  document.getElementById("email").value;
		  var password = document.getElementById("password").value;
		  //For new registration
		  createUserWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    console.log(user);
		    alert("Registration successfully!!");
		    // ...
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    // ..
		    console.log(errorMessage);
		    alert(error);
		  });		  		  
	  });
	  //----- End

	  //----- Login code start	  
	  document.getElementById("login").addEventListener("click", function() {
		  var email =  document.getElementById("email").value;
		  var password = document.getElementById("password").value;

		  signInWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    console.log(user);
		    alert(user.email+" Login successfully!!!");
		    document.getElementById('logout').style.display = 'block';
		    // ...
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    console.log(errorMessage);
		    alert(errorMessage);
		  });		  		  
	  });
	  //----- End

	  //----- Logout code start	  
	  document.getElementById("logout").addEventListener("click", function() {
		  signOut(auth).then(() => {
			  // Sign-out successful.
			  console.log('Sign-out successful.');
			  alert('Sign-out successful.');
			  document.getElementById('logout').style.display = 'none';
			}).catch((error) => {
			  // An error happened.
			  console.log('An error happened.');
			});		  		  
	  });
	  //----- End

