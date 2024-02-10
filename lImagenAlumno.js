var imagenes = [
    { Nombre: 'Natalia', Apelliod_Paterno: 'Gutierrez', Apellido_Materno: 'Ramirez', Matricula: '22300073', Programa_Educativo: 'Mecatronica', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3pr9xjxuggOIBgLnqPKER67MgTUjzcrFEiw&usqp=CAU' },
    { Nombre: 'Samantha', Apelliod_Paterno: 'Santiago', Apellido_Materno: 'Fuentes', Matricula: '22300030', Programa_Educativo: 'Logistica', url: 'https://media.infocielo.com/p/de5c066623b2beb029404d3b68163c65/adjuntos/299/imagenes/001/248/0001248477/887x0/smart/162378812360c90a5b71efc_1623788123_3x2_rtjpg.jpg' },
    { Nombre: 'Yosef Adamary', Apelliod_Paterno: 'Lazaro', Apellido_Materno: 'Guzman', Matricula: '22300076', Programa_Educativo: 'Contabilidad', url: 'https://s.yimg.com/ny/api/res/1.2/dYytZVDeoXogvkKZqfk38A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/lanacion.com.ar/cb5e1b9f861f97d1ff4aca11960f83b7' },
    { Nombre: 'Fernada ', Apelliod_Paterno: 'Hernandez', Apellido_Materno: 'Paez', Matricula: '22300063', Programa_Educativo: 'Medicina', url: 'https://i.pinimg.com/736x/b9/0b/64/b90b642305a14e1db5eb2a9b9b1b1e33.jpg' },
    { Nombre: 'Cecilia', Apelliod_Paterno: 'Lopez', Apellido_Materno: 'Fuentes ', Matricula: '22300098', Programa_Educativo: 'Comercio', url: ' https://www.random.news/__export/1667410595926/sites/debate/img/2022/11/02/elite-netflix_1.jpg_423682103.jpg' },
    { Nombre: 'Leonardo', Apelliod_Paterno: 'Zaldivar', Apellido_Materno: 'Micete', Matricula: '22300087', Programa_Educativo: 'Veterinaria', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdXeGuS2AoF4ZHG4GlFI8B2APJH_3Pt_kOpzsTdysCsf4YDhjxPGk0FkTA5oke8xijls&usqp=CAU' },
    { Nombre: 'Kenia ', Apelliod_Paterno: 'Tlaxcao', Apellido_Materno: 'Velazquez', Matricula: '22300053', Programa_Educativo: 'Enfermeria', url: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/04/07/16493347713470.jpg' },
    { Nombre: 'Elizabet ', Apelliod_Paterno: 'Solorio', Apellido_Materno: 'Torres', Matricula: '22300021', Programa_Educativo: 'Odontologia', url: 'https://www.clara.es/medio/2018/10/08/maria-pedraza-elite-series-netflix-pull-and-bear_1d67608a_1000x1500.jpg' },
    { Nombre: 'Carolina', Apelliod_Paterno: 'America', Apellido_Materno: 'Vega', Matricula: '22300008', Programa_Educativo: 'Gastronomia', url: ' https://static1.purebreak.com.br/articles/4/10/37/64/@/438438--elite-ana-bokesa-sera-uma-das-novas-a-700x700-2.jpg' },
    { Nombre: 'Monserat ', Apelliod_Paterno: 'Ballesteros', Apellido_Materno: 'Zarza', Matricula: '22300015', Programa_Educativo: 'Imformatica', url: 'https://as01.epimg.net/epik/imagenes/2019/07/28/portada/1564313376_941339_1564314373_noticia_normal.jpg' },

];

var listaImagenes = document.getElementById('MostrarListaImagenes');

function mostrarListaImagenes(imagenesMostrar) {
    listaImagenes.innerHTML = '';

    imagenesMostrar.forEach(indiceImagen => {
        // Contenedor del estudiante
        var contenedorEstudiante = document.createElement('div');
        contenedorEstudiante.setAttribute('class', 'estudiante-container');

        // Imagen
        var imagen = document.createElement('img');
        imagen.setAttribute('src', indiceImagen.url);
        imagen.setAttribute('width', '400px');
        imagen.setAttribute('height', '300px');
        contenedorEstudiante.appendChild(imagen);

        // Información del estudiante
        var lista = document.createElement('ul');
        lista.setAttribute('class', 'estudiante-info');

        // Nombre
        var liNombre = document.createElement('li');
        liNombre.textContent = `Nombre: ${indiceImagen.Nombre}`;
        lista.appendChild(liNombre);

        // Apellido Paterno
        var liApellidoPaterno = document.createElement('li');
        liApellidoPaterno.textContent = `Apellido Paterno: ${indiceImagen.Apelliod_Paterno}`;
        lista.appendChild(liApellidoPaterno);

        // Apellido Materno
        var liApellidoMaterno = document.createElement('li');
        liApellidoMaterno.textContent = `Apellido Materno: ${indiceImagen.Apellido_Materno}`;
        lista.appendChild(liApellidoMaterno);

        // Matrícula
        var liMatricula = document.createElement('li');
        liMatricula.textContent = `Matrícula: ${indiceImagen.Matricula}`;
        lista.appendChild(liMatricula);

        // Programa Educativo
        var liProgramaEducativo = document.createElement('li');
        liProgramaEducativo.textContent = `Programa Educativo: ${indiceImagen.Programa_Educativo}`;
        lista.appendChild(liProgramaEducativo);

        // Añadir lista al contenedor
        contenedorEstudiante.appendChild(lista);

        // Añadir contenedor al área de imágenes
        listaImagenes.appendChild(contenedorEstudiante);
    });
}

function buscarImagenes() {
    var textoBusqueda = document.getElementById('txtBuscar').value.toLowerCase();
    var imagenesBuscadas = imagenes.filter(function (imagen) {
        return (
            imagen.Nombre.toLowerCase().includes(textoBusqueda) ||
            imagen.Matricula.toLowerCase().includes(textoBusqueda)
        );
    });
    mostrarListaImagenes(imagenesBuscadas);
}
