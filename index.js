
var animals = []
var animal;
var animalName;
var animalImage;

function randomizeAnimals() {
  animals = getAnimals();
  if(animals) {
    animalId = parseInt(Math.random() * animals.length, 10);
console.log(animalId)
    animal = animals[animalId];
    if(animal) {
      showAnimal(animal);
    }
  }
}

// function create animal
function create(){
  $("#create-animal").css({'display':'none'});
  animalName = $("#animal-name").val();
  animalImage= $("#animal-image").val();
  var animal = {
    name: animalName,
    image: animalImage
  }
  saveAnimal(animal);
  showAnimalList();
  return animal;
}

function getAnimals() {
  var animals = localStorage.getItem('animals');
  return animals ? JSON.parse(animals) : [];
}

function saveAnimal(animal) {
  var animals = getAnimals();
  animals.push(animal);
  return localStorage.setItem('animals', JSON.stringify(animals));
}

function showAnimal(animal) {
  // show animal
  if(animal){  
    $("#animal h1").text(animal.name);
    $("#animal img").attr('src', animal.image);
    $("#animal").css({'display': 'block'});
  }
}

function showAnimalList() {
  $("#animal-list").empty();
  var animals = getAnimals();
  for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    $("#animal-list").append('<li>'+animal.name+'</li>');
  }
}

$( document ).ready(function() {

  randomizeAnimals();

  showAnimalList();

  $("#randomize-animal").on('click', function(){
    randomizeAnimals();
  })

  $("#create-button").on('click', function(){
    $("#animal").css({'display':'none'});
    $("#create-animal").css({'display':'block'});
  })

  $("#create").on('click', function(e){
    e.preventDefault();
    var animal = create();
    showAnimal(animal);
  })


})
