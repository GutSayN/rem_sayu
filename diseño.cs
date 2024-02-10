 body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f2f2f2; /* Cambia el color de fondo del cuerpo según tus preferencias */
        }

        .estudiante-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px; /* Espacio entre contenedores */
            padding: 20px;
            background-color: #ffffff; /* Color de fondo del contenedor */
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
            max-width: 400px; /* Ancho máximo del contenedor */
            width: 100%;
        }

        .estudiante-info {
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: center;
        }

        .estudiante-info li {
            margin-bottom: 10px;
        }

        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px; /* Bordes redondeados para la imagen */
        }