let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString(' Soy Licenciada en Ciencias políticas y Administración Pública. Desarrollo sitios web, elaboro y optimizo software informático, así como a adaptarlos para su uso en distintas plataformas y sistemas operativos.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
