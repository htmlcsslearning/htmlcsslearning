
var animals = [
  {
    name: 'queen',
    image: 'images/cat1.jpg'
  },
  {
    name: 'meow',
    image: 'images/cat2.jpg'
  },
  {
    name: 'fisher',
    image: 'images/cat3.jpg'
  },
  {
    name: 'moon',
    image: 'images/cat4.jpg'
  },
  {
    name: 'guay',
    image: 'images/dog1.jpg'
  },
  {
    name: 'melchor',
    image: 'images/dog2.jpg'
  },
  {
    name: 'gaspar',
    image: 'images/dog3.jpg'
  },
  {
    name: 'baltasar',
    image: 'images/dog4.jpg'
  }
]
var animal;
function randomizeCats() {
  animalId = Math.round(Math.random() * 3);
  animal = animals[animalId];
  $("#animal h1").text(animal.name);
  $("#animal img").attr('src', animal.image);
}
$( document ).ready(function() {
  randomizeCats();
  $('button').on('click',function(){
    randomizeCats();
  })
})
