var ChessBoard =
[
	[5,4,3,2,1,2,3,4,5],
	[0,0,0,0,0,0,0,0,0],
	[0,6,0,0,0,0,0,6,0],
	[7,0,7,0,7,0,7,0,7],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[8,0,8,0,8,0,8,0,8],
	[0,9,0,0,0,0,0,9,0],
	[0,0,0,0,0,0,0,0,0],
	[10,11,12,13,14,13,12,11,10]
];

//1~7為黑方    8~14為紅方  
var Black_KING = 1;	//將
var Black_GUARD= 2;	//士
var Black_ELEPHANT = 3;	//相
var Black_KNIGHT = 4;	//馬
var Black_CAR = 5;	//車
var Black_FORT= 6;	//砲
var Black_Soldier = 7;	//兵

var Red_KING = 14;	//將
var Red_GUARD= 13;	//士
var Red_ELEPHANT = 12;	//相
var Red_KNIGHT = 11;	//馬
var Red_CAR = 10;	//車
var Red_FORT= 9;	//砲
var Red_Soldier = 8;	//兵

var NOCHESS = 0; 

//玩者1 : 1  (Red) 玩者2 : -1 (Black)
var Player = 1;
var Last_play = -1;	
function switch_Player(){
	if(Player==1) Player=-1;
	else if(Player==-1) Player=1;
}

function isBlack(chess){
	if(chess>=1&&chess<=7) return true;
}

function isRed(chess){
	if(chess>=8&&chess<=14) return true;
}

function chess_Place(x,y){
	this.x = x;
	this.y = y;
}