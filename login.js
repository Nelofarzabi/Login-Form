<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login </title>
    <style>
         html {
  height: 100%;
}
        div{
            width: 45%;
            height: 60%;
            background-color: white;
            margin-left: 27%;
            margin-top: 11%;
            border-radius: 7px;
            box-shadow: 0px 0px 5px 2px black;
        }
        .input{
            margin-top: 15%;
            margin-left: 34%;
            border-left: none;
            border-top: none;
            border-right: none;
            outline: none;
        }
        .inpu{
            margin-top: -1%;
            margin-left: 34%;
            border-left: none;
            border-top: none;
            border-right: none;
        }
        button{
            margin-top: -1%;
            margin-left: 34%;
            width: 29%;
            height: 7%;
            border-radius: 5px;
            box-shadow: 0px 0px 5px 2px black;
            background-color: #3a3a3a ;
            color: white;
            
        }
        .diva{
            width: 30%;
            height: 8%;
            margin-top: 10%;
            margin-left: 34%;

        }
    </style>
</head>
<body style="background-color: #3a3a3a;">
    <div>

        <h3 style="margin-left: 42%; font-family: Arial, Helvetica, sans-serif; padding-top: 30px;font-size: 30px;">Login</h3>
       
        <div class="diva">
             <h5 id="tr" style="color: black; text-align: center; font-family: Arial, Helvetica, sans-serif;" ></h5>
        <h5 id="fa" style="color:black;   text-align: center; font-family: Arial, Helvetica, sans-serif;"></h5>

        </div>
      
            <input type="text" id="uname" class="input" placeholder="Username"> <br><br>
            <input type="password " id="pass" class="inpu" placeholder="Password"><br><br>
            <button onclick="login()" >Login</button>
   

    </div>
    <script>
        function login (){
            var username = document.getElementById("uname").value;
            var password = document.getElementById("pass").value;
            if(username =="nilofar" && password =="nilofar123"){
                document.getElementById("tr").innerHTML = "welcome to the system";
                document.getElementById("fa").innerHTML = "";
                document.getElementById("uname").value="";
                document.getElementById("pass").value="";
                document.getElementById("uname").focus();
            }
            else if (username!= "nilofar" && password == "nilofar123"){
                document.getElementById("fa").innerHTML = "your username is incorrct" ;
                document.getElementById("uname").value="";
                document.getElementById("tr").innerHTML="";
                document.getElementById("uname").focus();
            }
            else if ( username == "nilofar" && password != "nilofar123"){
                document.getElementById("fa").innerHTML = "your password is incorrct";
                document.getElementById("tr").innerHTML="";
                document.getElementById("pass").value="";
                document.getElementById("pass").focus();
            }
            else{
                document.getElementById("fa").innerHTML= "your username and password is incorrect";
                document.getElementById("tr").innerHTML="";
                document.getElementById("uname").value ="";
                document.getElementById("pass").value ="";
            }
            
               
            
        }
        
    </script>
    
    
</body>
</html>
