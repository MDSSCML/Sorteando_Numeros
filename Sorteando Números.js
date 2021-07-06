<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Sorteando</title>

    <style>
        h1 {
            background: linear-gradient(black, white);
            color: white;
            text-align: center;
            padding-bottom: 5%;
            letter-spacing: 15px;
            box-shadow: 0px 0px 10px 2px darkgrey;
            font-weight: bold;
        }

        .btn:hover {
            color: white;

        }

        .btn {
            background-color: black;
            box-shadow: inset 0px 0px 4px white;
        }

        .botao {
            text-align: center;
            padding-top: 32%;

        }

        .container {
            background-color: black;

        }

        body {
            background-image: url(http://static1.squarespace.com/static/59bec9f67131a59f1c594194/t/5c9a1b02b208fcc61263c3ff/1553603336966/Sorteio+no+instagram.jpg?format=1500w);

        }

        @media screen and (max-width: 750px) {
            body {
                background-image: url(https://www.publicitarioscriativos.com/wp-content/uploads/2020/10/Untitled-6-2-5.png);
                background-repeat: no-repeat;
                background-size: auto;
            }
        }
    </style>

</head>

<body>

    <h1 class="py-4">Sorteio</h1>

    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="py-5" id="ler">0</h1>
            </div>
        </div>
    </div>


    <div class="botao">
        <button type="button" class="btn btn-outline-dark btn-lg " onclick="sorteio()">Sorteio</button>
        <button type="button" class="btn btn-outline-dark btn-lg " onclick="stop()">Stop</button>
    </div>






    <script>
        let sorteio = function () {

            let aleatorio = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
            for (let index = 0; index < aleatorio.length; index++) {
                element = Math.floor(Math.random() * aleatorio[index]);
                document.getElementById("ler").innerHTML = element;
            }
            para = setTimeout(sorteio, 100);
        }
        function stop() {
            clearTimeout(para);
        }
    </script>
</body>

</html>