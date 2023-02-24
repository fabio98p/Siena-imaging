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
        <h1>Fabio Parisi</h1>
        <button class="add" onclick="add()">+</button>
        <button class="remove" onclick="newComponent()">-</button>
        <!-- <form id="form" method="post">
            <input type="submit" name="button1"
                    class="button" value="+" />
            
            <input type="submit" name="button2"
                    class="button" value="-" />
        </form> -->
    </nav>
    <main>
    <h1>html</h1>
    <div class="test"></div>
    <div id="components"></div>
    <?php
        include('script.php');
    ?>
    </main>

</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="./script.js"></script>
</html>