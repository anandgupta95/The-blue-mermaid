Login

<?php

if(isset($_POST['signup'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Database connection
    $conn = mysqli_connect("localhost", "root", "", "db_name");
    
    // Check for connection error
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    // Insert user data into the database
    $query = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
    $result = mysqli_query($conn, $query);
    
    if($result) {
        echo "Signup successful!";
    } else {
        echo "Error: " . $query . "<br>" . mysqli_error($conn);
    }
    
    mysqli_close($conn);
}

?>

<html>
<head>
    <title>Signup</title>
</head>
<body>
    <form action="" method="post">
        <input type="text" name="username" placeholder="Username">
        <input type="email" name="email" placeholder="Email">
        <input type="password" name="password" placeholder="Password">
        <input type="submit" name="signup" value="Signup">
    </form>
</body>
</html>

<?php

if(isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Database connection
    $conn = mysqli_connect("localhost", "root", "", "db_name");
    
    // Check for connection error
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    // Retrieve user data from the database
    $query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($conn, $query);
    
    if (mysqli_num_rows($result) > 0) {
        echo "Login successful!";
    } else {
        echo "Login failed. Email or password is incorrect.";
    }
    
    mysqli_close($conn);
}

Signup
?>

<html>
<head>
    <title>Login</title>
</head>
<body>
    <form action="" method="post">
        <input type="email" name="email" placeholder="Email">
        <input type="password" name="password" placeholder="Password">
        <input type="submit" name="login" value="Login">
    </form>
</body>
</html>

