//Math.abs()    //回傳絕對值
//所有棋子走法是否正確             //＊＊注意x y軸＊＊＊
function isValidMove(ChessBoard, now_Place, after_Place){
	if(now_Place.x==after_Place.x && now_Place.y==after_Place.y) return false;

	console.log(ChessBoard[now_Place.x][now_Place.y]);
	
	switch (ChessBoard[now_Place.x][now_Place.y]){
		case Black_KING:
			if(after_Place == Red_KING){
				if(now_Place.x != after_Place.x) return false;
				for(var i = now_Place.x+1; i < after_Place.x; ++i)
					if(ChessBoard[i][now_Place.y] != 0) return false;
			}else{
				if(after_Place.x>2||after_Place.y>5||after_Place.y<3)
					return false;
				// 斜走	
				if (Math.abs(now_Place.y - after_Place.y) + Math.abs(now_Place.x - after_Place.x) > 1) {
					return false
				}
			}
			break;

		case Red_KING:
			if(after_Place == Red_KING){
				if(now_Place.y != after_Place.y) return false;
				for(var i = now_Place.x-1; i > after_Place.x; --i)
					if(ChessBoard[i][now_Place.y] != 0) return false;
			}else{
				if(after_Place.x<2||after_Place.y>5||after_Place.y<3)
					return false;
				// 斜走	
				if (Math.abs(now_Place.y - after_Place.y) + Math.abs(now_Place.x - after_Place.x) > 1) {
					return false
				}
			}
			break;

		case Black_GUARD:
			if (after_Place.x > 2 || after_Place.y < 3 || after_Place.y > 5) {
				return false
			}
			if (Math.abs(now_Place.x - after_Place.x) != 1 || Math.abs(now_Place.y - after_Place.y) != 1) {
				return false
			}
			break;

		case Red_GUARD:
			if (after_Place.x < 7 || after_Place.y < 3 || after_Place.y > 5) {
				return false
			}
			//士只能斜走  A && B = ~(A || B)
			if (Math.abs(now_Place.x - after_Place.x) != 1 || Math.abs(now_Place.y - after_Place.y) != 1) {
				return false
			}
			break;

		case Black_ELEPHANT:
			//不能過河
			if (after_Place.x > 4) {
				return false
			}
			//斜2格
			if (Math.abs(now_Place.y - after_Place.y) != 2 || Math.abs(now_Place.x - after_Place.x) != 2) {
				return false
			}
			//卡象眼
			if (ChessBoard[(now_Place.x + after_Place.x) / 2][(now_Place.y + after_Place.y) / 2] != 0) {
				return false
			}
			break;

		case Red_ELEPHANT:
			if (after_Place.x < 5) {
				return false
			}
			if (Math.abs(now_Place.y - after_Place.y) != 2 || Math.abs(now_Place.x - after_Place.x) != 2) {
				return false
			}
			if (ChessBoard[(now_Place.x + after_Place.x) / 2][(now_Place.y + after_Place.y) / 2] != 0) {
				return false
			}
			break;
		//馬走閃電
		case Black_KNIGHT:
		case Red_KNIGHT:
			if (!(Math.abs(now_Place.y - after_Place.y) == 1 && Math.abs(now_Place.x - after_Place.x) == 2 || Math.abs(now_Place.y - after_Place.y) == 2 && Math.abs(now_Place.x - after_Place.x) == 1)) {
				return false
			}
			//卡馬前方
			var i = 0 , j = 0;
			if (after_Place.y - now_Place.y == 2) {
				i = now_Place.y + 1;
				j = now_Place.x
			} else if (now_Place.y - after_Place.y == 2) {
				i = now_Place.y - 1;
				j = now_Place.x
			} else if (after_Place.x - now_Place.x == 2) {
				i = now_Place.y;
				j = now_Place.x + 1
			} else if (now_Place.x - after_Place.x == 2) {
				i = now_Place.y;
				j = now_Place.x - 1
			}
			if (ChessBoard[i][j] != 0) {
				return false
			}
			break;

		case Black_CAR:
		case Red_CAR:
			//只走直線
			if (now_Place.x != after_Place.x && now_Place.y != after_Place.y) {
				return false
			}
			//不能跨越
			if (now_Place.x == after_Place.x) {
				if (now_Place.y < after_Place.y) {
					for (var i = now_Place.y + 1; i < after_Place.y; i++) {
						if (ChessBoard[now_Place.x][i] != 0) {
							return false
						}
					}
				} else {
					for (var i = after_Place.y + 1; i < now_Place.y; i++) {
						if (ChessBoard[now_Place.x][i] != 0) {
							return false
						}
					}
				}
			} else {
				if (now_Place.x < after_Place.x) {
					for (var i = now_Place.x + 1; i < after_Place.x; i++) {
						if (ChessBoard[i][now_Place.y] != 0) {
							return false
						}
					}
				} else {
					for (var i = after_Place.x + 1; i < now_Place.x; i++) {
						if (ChessBoard[i][now_Place.y] != 0) {
							return false
						}
					}
				}
			}
			break;
		//砲 直線飛
		case Black_FORT:
		case Red_FORT:
			if (now_Place.x != after_Place.x && now_Place.y != after_Place.y) {
				return false
			}
			//中間沒棋子 直接移動
			if (after_Place == 0) {
				if (now_Place.x == after_Place.x) {
					if (now_Place.y < after_Place.y) {
						for (var i = now_Place.y + 1; i < after_Place.y; i++) {
							if (ChessBoard[now_Place.x][i] != 0) {
								return false
							}
						}
					} else {
						for (var i = after_Place.y + 1; i < now_Place.y; i++) {
							if (ChessBoard[now_Place.x][i] != 0) {
								return false
							}
						}
					}
				} else {
					if (now_Place.x < after_Place.x) {
						for (var i = now_Place.x + 1; i < after_Place.x; i++) {
							if (ChessBoard[i][now_Place.y] != 0) {
								return false
							}
						}
					} else {
						for (var i = after_Place.x + 1; i < now_Place.x; i++) {
							if (ChessBoard[i][now_Place.y] != 0) {
								return false
							}
						}
					}
				}
			} else {	//砲飛山 //只能飛一個
				var count = 0;
				if (now_Place.x == after_Place.x) {
					if (now_Place.y < after_Place.y) {
						for (var i = now_Place.y + 1; i < after_Place.y; i++) {
							if (ChessBoard[now_Place.x][i] != 0) {
								count++
							}
						}
						if (count != 1) {
							return false
						}
					} else {
						for (var i = after_Place.y + 1; i < now_Place.y; i++) {
							if (ChessBoard[now_Place.x][i] != 0) {
								count++
							}
						}
						if (count != 1) {
							return false
						}
					}
				} else {
					if (now_Place.x < after_Place.x) {
						for (var i = now_Place.x + 1; i < after_Place.x; i++) {
							if (ChessBoard[i][now_Place.y] != 0) {
								count++
							}
						}
						if (count != 1) {
							return false
						}
					} else {
						for (var i = after_Place.x + 1; i < now_Place.x; i++) {
							if (ChessBoard[i][now_Place.y] != 0) {
								count++
							}
						}
						if (count != 1) {
							return false
						}
					}
				}
			}
		case Black_Soldier:
			if (after_Place.x < now_Place.x) {
				return false
			}
			if (now_Place.x < 5 && now_Place.x == after_Place.x) {
				return false
			}
			if (after_Place.x - now_Place.x + Math.abs(after_Place.y - now_Place.y) > 1) {
				return false
			}
			break;

		case Red_Soldier:
			if (after_Place.x > now_Place.x) {
				return false
			}
			if (now_Place.x > 4 && now_Place.x == after_Place.x) {
				return false
			}
			if (now_Place.x - after_Place.x + Math.abs(now_Place.y - after_Place.y) > 1) {
				return false
			}
			break;
	}
	return true;
}

/*
function Move(ChessBoard, now_Place, after_Place){
	if(isVaildMove(now_Place))	{
		now_Place = 0;
		after_Place = now_Place;
	}
	else{
		alert("請選擇有效的走法");
	}
}
*/