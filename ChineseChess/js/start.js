var ChineseChess = function(placeholder) 
{
	var unique = 'ChinessChess';
	window[unique] = this;
	//var ChessBoard;
    var selectedPos;
    
    this._selectedmove = function(i,j){
        selectedPos= new chess_Place(i,j);
        selectGrid([selectedPos]);
        if(!selectGrid)
    }

    this._move = function(i, j) {
		if (!selectedPos) {
            //console.log(selectedPos);
			return;
        }
        var moveTo = new chess_Place(i,j);
        if (isValidMove(ChessBoard, selectedPos, moveTo)) {
			ChessBoard[moveTo.x][moveTo.y] = ChessBoard[selectedPos.x][selectedPos.y];
            ChessBoard[selectedPos.x][selectedPos.y] = NOCHESS;
            if(ChessBoard[moveTo.x][moveTo.y] == Red_KING){
                alert("黑方勝利");
            }
            else if(ChessBoard[moveTo.x][moveTo.y]== Black_KING){
                alert("紅方勝利");
            }
            selectedPos = null;
            draw(ChessBoard);
            //selectGrid(new chess_Place(i, j));
        }else{
            alert("不符合走法");
        }
    }

    //選取格子
	this._selected = function(i,j) {
        selectedPos = new chess_Place(i,j);
		selectGrid([selectedPos]);
    }

	var selectGrid = function(points) {
		var grids = document.getElementById(placeholder).getElementsByTagName('td');
		for (var k = 0; k < grids.length; k++) {
			grids[k].innerHTML = '';      //清空原始網格
		}
        for (var i = 0; i < points.length; i++) {   //加入新的
            //console.log(points.length);
			var p = points[i];
			document.getElementById('grid_' + p.x + '_' + p.y).innerHTML = '<div class="chess selected"></div>';
		}
    };
    
    //在棋盤上畫出棋子  //用css 跟圖片
    var draw = function(){
        var html = '';
        for (var i = 0; i < 10 ; i++) 
        {
            html += '<tr>';
            for (var j = 0; j < 9; j++) 
            {
            var chess = ChessBoard[i][j];
            //console.log(chess);
            var className = 'chess ';
            var handleName = '';
            

            //紅色 選棋子 移動
            /*if (Player==1 && isRed(chess)) {
                handleName = unique + '._selected(' + i + ',' + j + ')';
            } else if(Player==1 && chess == NOCHESS || Player==1 && chess == isBlack(chess)){
                handleName = unique + '._move(' + i + ',' + j + ')';    
                switch_Player();
                console.log("1");
            }
            //黑色 選棋子 移動
            else if (Player==-1 && isBlack(chess)) {
                handleName = unique + '._selected(' + i + ',' + j + ')';
            } else if(Player==-1 && chess == NOCHESS || Player==-1 && chess == isRed(chess)){
                handleName = unique + '._move(' + i + ',' + j + ')';
                switch_Player();
                console.log("-1");
            }*/

            handleName = unique + '._selectedmove(' + i + ',' + j + ')';

            switch (chess) 
                {
                case Black_KING:
                    className += 'black_king';
                    break;
                case Red_KING:
                    className += 'red_king';
                    break;
                case Black_GUARD:
                    className += 'black_guard';
                    break;
                case Red_GUARD:
                    className += 'red_guard';
                    break;
                case Black_ELEPHANT:
                    className += 'black_ele';
                    break;
                case Red_ELEPHANT:
                    className += 'red_ele';
                    break;
                case Black_KNIGHT:
                    className += 'black_knight';
                    break;
                case Red_KNIGHT:
                    className += 'red_knight';
                    break;
                case Black_CAR:
                    className += 'black_car';
                    break;
                case Red_CAR:
                    className += 'red_car';
                    break;
                case Black_FORT:
                    className += 'black_fort';
                    break;
                case Red_FORT:
                    className += 'red_fort';
                    break;
                case Black_Soldier:
                    className += 'black_soldier';
                    break;
                case Red_Soldier:
                    className += 'red_soldier';
                    break;
                default:
                    className = ''
                }
            html += '<td class="' + className + '" onclick="' + handleName + '" id="grid_' + i + '_' + j + '"></td>'
            }
        html += '</tr>'
        }
        html = '<table cellspacing="0" cellpadding="0" border="0">' + html + '</table>';
        document.getElementById(placeholder).innerHTML = html;
    }
    
	this.start = function() {
		draw();
    }
}