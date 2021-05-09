var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object="";
var block_object="";
function player_update()
function new_image()
{
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
if(addEventListener="myCanvas")
{
    my_keydown('block bigger');
    console.log("P");
}}
 if(keyPressed='70')
{
    new_image('ironman_face.png');
    console.log("f");
}
if(keyPressed='66')
{
    new_image('spiderman_body (1).png');
    console.log("b");
}
if(keyPressed='76')
{
    new_image('hulk_legs.png');
    console.log('l');
}
if(keyPressed='82')
{
    new_image('thor_right_hand.png');
    console.log("r");
}
if(keyPressd='72')
{
    new_image('captain_america_left_hand.png');
    console.log("h")
}
if(keyPressed='38')
{
    up();
    console.log("up")
}