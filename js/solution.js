(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;
    var cursorWay = [];
    var matrix = [];
    var islandNumber = 1;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        //делаем дубликат карты
        for (var i=0; i<map.length; i++){
            matrix[i] = map[i].slice();
            for (var j=0; j<map[i].length; j++){
                 matrix[i][j] = map[i][j];
            }
        }
        //обплываем все по порядку, если нашли землю, шаримся, пока не изучам весь остров и плывем дальше
        for (let i=0; i< matrix.length ; i++){
          for (let j=0; j< matrix[i].length; j++){
            cursorWay.push([i,j]); //документируем
            if(matrix[i][j] === 1 ){ // обнаружена неизвестная суша (если известная - то [1, номер острова], если неизвестная - то просто 1
              matrix[i][j] = [1,islandNumber];//устанавливаем флаг с номером острова и, ниже, исследуем весь остров (рекурсивно) и расставляем флажки
              goodNeighbourArea (matrix, i, j);// шаримся по острову, расставляем флажки
              islandNumber++; // выходя из этой ветки можно брать следующий номер, тк текущий остров весь нашелся в полном объёме
            }
            else{
              continue;
            }
          } 
        }
        root.SHRI_ISLANDS.NEW_MAP = matrix;//сохраняем карту с флагами
        root.SHRI_ISLANDS.WAY = cursorWay;//сохраняем пройденный путь
        // todo: подсчитать кол-во островов на карте
        //выводим количество островов на карте, islandNumber- номер флага для следующего острова (который не нашли), а (islandNumber-1) - номер последнего острова и количество островов, соответственно
        return islandNumber-1;
    }


    function goodNeighbourArea (arr, m, n){ 
        if((m!==0) && (arr[m-1][n] === 1)){
            arr[m-1][n] = [1,islandNumber];
            cursorWay.push([m-1,n]);
            goodNeighbourArea(arr,m-1,n);
        }
        if((m!==arr.length-1) && (arr[m+1][n] === 1)){
            arr[m+1][n] = [1,islandNumber];
            cursorWay.push([m+1,n]);
            goodNeighbourArea(arr,m+1,n);
        }
        if((n!==0) && (arr[m][n-1] === 1)){
            arr[m][n-1] = [1,islandNumber];
            cursorWay.push([m,n-1]);
            goodNeighbourArea(arr,m,n-1);
        }
        if((n!==arr[m].length-1) && (arr[m][n+1] === 1)){
            arr[m][n+1] = [1,islandNumber];
            cursorWay.push([m,n+1]);
            goodNeighbourArea(arr,m,n+1);
        }
    };


    root.SHRI_ISLANDS.solution = solution;
})(this);
