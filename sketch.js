//Create variables here
var dog,happyDog,database;
var foodS,foodStock;



function preload()
{
	//load images here
  dog =loadImage("images/dogImg.png") ;
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,300,150,150);
  dog.addImage("dog",dog);
  
foodStock=database.ref("Food");
foodStock.on("value",readStock);

}


function draw() {  
  background (46, 139, 87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage("happyDog",happyDog);

}
drawSprites();
}
// function to read values 
function readStock(data){
foodS=data.val();
}
// function to write values 

function writeStock(x){

if(x<=0){
x=0;
}else{
  x=x-1;
}
database.ref("/").update({
Food:x
})
}



































