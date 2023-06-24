/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos:
id de la película en IMDB, titulo, director, año de estreno, país o países de origen,
géneros y calificación en IMBD.


- Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, 
Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror,
Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show,
Thriller, War, Western.*/

class Pelicula {
    constructor(id, titulo, director, anoEstreno, paisesOrigen, generos, calificacion) {
      this.id = id;
      this.titulo = titulo;
      this.director = director;
      this.anoEstreno = anoEstreno;
      this.paisesOrigen = paisesOrigen;
      this.generos = generos;
      this.calificacion = calificacion;
    }
  
    validarIdIMDB() {
      if (this.id.length !== 9 || !/^[A-Za-z]{2}\d{7}$/.test(this.id)) {
        throw new Error('El ID de IMDB no es válido.');
      }
    }
  
    validarTitulo() {
      if (this.titulo.length > 100) {
        throw new Error('El título excede los 100 caracteres.');
      }
    }
  
    validarDirector() {
      if (this.director.length > 50) {
        throw new Error('El nombre del director excede los 50 caracteres.');
      }
    }
  
    validarAnoEstreno() {
      if (!Number.isInteger(this.anoEstreno) || this.anoEstreno.toString().length !== 4) {
        throw new Error('El año de estreno debe ser un número entero de 4 dígitos.');
      }
    }
  
    validarPaisesOrigen() {
      if (!Array.isArray(this.paisesOrigen) || this.paisesOrigen.length === 0) {
        throw new Error('El país o países de origen deben ser proporcionados en forma de arreglo.');
      }
    }
  
    validarGeneros() {
      const generosAceptados = [
        'Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary',
        'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical',
        'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show',
        'Thriller', 'War', 'Western'
      ];
  
      if (!Array.isArray(this.generos) || this.generos.length === 0) {
        throw new Error('Los géneros deben ser proporcionados en forma de arreglo.');
      }
  
      for (const genero of this.generos) {
        if (!generosAceptados.includes(genero)) {
          throw new Error(`El género "${genero}" no es válido.`);
        }
      }
    }
  
    validarCalificacion() {
      if (typeof this.calificacion !== 'number' || this.calificacion < 0 || this.calificacion > 10) {
        throw new Error('La calificación debe ser un número entre 0 y 10.');
      }
    }
  
    obtenerFichaTecnica() {
      this.validarIdIMDB();
      this.validarTitulo();
      this.validarDirector();
      this.validarAnoEstreno();
      this.validarPaisesOrigen();
      this.validarGeneros();
      this.validarCalificacion();
    }
  
    obtenerFichaTecnica() {
        return `ID: ${this.id}\nTítulo: ${this.titulo}\nDirector: ${this.director}\nAño de Estreno: ${this.anoEstreno}\nPaíses de Origen: ${this.paisesOrigen.join(', ')}\nGéneros: ${this.generos.join(', ')}\nCalificación: ${this.calificacion}`;
      }
    }