<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Siena</title>
    <link rel="stylesheet" href="./style.css">

</head>
<body>
    <nav>
        <div class="container">
            <h1>Parisi Fabio</h1>
            <p id="plus" onclick="newComponent()">+</p>
            <p id="minus" onclick="removeComponent()">-</p>
        </div>

    </nav>
    <main>
    <div id="components"></div>
    </main>

</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="./script.js"></script>
</html>