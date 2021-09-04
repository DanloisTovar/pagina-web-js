let post = [
  {
    titulo: `prueba titulo 1`,
    fecha: `Publicado el dia ${moment().format('Do MMM YY')}`,
    contenido: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
  fugiat aperiam temporibus necessitatibus tenetur exercitationem,
  qui veritatis eligendi laborum voluptatem non illo aliquam nihil
  reiciendis ea? Ea voluptatem laboriosam asperiores. Impedit earum
  molestiae recusandae soluta nihil voluptatem, nostrum voluptas
  eaque unde corporis, enim perspiciatis modi repellat sed facilis
  itaque ullam dolorum repudiandae aspernatur. Natus nostrum non,
  earum aspernatur consequatur consectetur!`,
  },
  {
    titulo: `prueba titulo 2`,
    fecha: `Publicado el dia ${moment().format('Do MMM YY')}`,
    contenido: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
fugiat aperiam temporibus necessitatibus tenetur exercitationem,
qui veritatis eligendi laborum voluptatem non illo aliquam nihil
reiciendis ea? Ea voluptatem laboriosam asperiores. Impedit earum
molestiae recusandae soluta nihil voluptatem, nostrum voluptas
eaque unde corporis, enim perspiciatis modi repellat sed facilis
itaque ullam dolorum repudiandae aspernatur. Natus nostrum non,
earum aspernatur consequatur consectetur!`,
  },
  {
    titulo: `prueba titulo 3`,
    fecha: `Publicado el dia ${moment().format('Do MMM YY')}`,
    contenido: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
fugiat aperiam temporibus necessitatibus tenetur exercitationem,
qui veritatis eligendi laborum voluptatem non illo aliquam nihil
reiciendis ea? Ea voluptatem laboriosam asperiores. Impedit earum
molestiae recusandae soluta nihil voluptatem, nostrum voluptas
eaque unde corporis, enim perspiciatis modi repellat sed facilis
itaque ullam dolorum repudiandae aspernatur. Natus nostrum non,
earum aspernatur consequatur consectetur!`,
  },
  {
    titulo: `prueba titulo 4 `,
    fecha: `Publicado el dia ${moment().format('Do MMM YY')}`,
    contenido: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
fugiat aperiam temporibus necessitatibus tenetur exercitationem,
qui veritatis eligendi laborum voluptatem non illo aliquam nihil
reiciendis ea? Ea voluptatem laboriosam asperiores. Impedit earum
molestiae recusandae soluta nihil voluptatem, nostrum voluptas
eaque unde corporis, enim perspiciatis modi repellat sed facilis
itaque ullam dolorum repudiandae aspernatur. Natus nostrum non,
earum aspernatur consequatur consectetur!`,
  },
];

export const monstarPost = function () {
  post.forEach((articulo, valor) => {
    let post = `
    <div id="post">
    <article id="articulos">
      <h2>${articulo.titulo}</h2>
      <span class="fecha">${articulo.fecha}</span>
      <p>
      ${articulo.contenido}
      </p>
  
      <a href="#" class="btn">Leer mas</a>
    </article>`;

    $('#post').append(post);
  });
};
