(function (root) {
    var SHRI_ISLANDS = {};

    SHRI_ISLANDS.WATER = 0;
    SHRI_ISLANDS.ISLAND = 1;

    // SHRI_ISLANDS.MAP = [
    //     [0, 0, 1, 0],
    //     [1, 0, 1, 1],
    //     [0, 0, 0, 1],
    //     [1, 0, 0, 0],
    //     [0, 1, 0, 0]
    // ];



//--------------------------------------------------------ВНИМАНИЕ!----------------------------------------------------    
//для зрелищности визуализации, берем карту 10х10, которая каждый раз формируется рандомно и отношение суша/вода равно около 3/7
//чтобы вернуть, как было, закомментируйте, пожалуйста, строки 20-30 и раскомментируйте строки 7-13, спасибо за понимание.
    function matrixArray(rows,columns){
        var arr = new Array();
        for(let i=0; i<rows; i++){
          arr[i] = new Array();
          for(let j=0; j<columns; j++){
            arr[i][j] = Math.random() > 0.7 ? 1 : 0 ;// наполняем матрицу
          }
        }
        return arr;
    }
    SHRI_ISLANDS.MAP = matrixArray(10,10);

    SHRI_ISLANDS.NEW_MAP = [];
    SHRI_ISLANDS.WAY = [];

    root.SHRI_ISLANDS = SHRI_ISLANDS;
})(this);
