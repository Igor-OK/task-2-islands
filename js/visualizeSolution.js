(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    var container = document.querySelector('.outer');
    var counter = document.querySelector('.counter');
    counter.innerText = 'Найдено островов: 0';
    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */
    function visualizeSolution(way, newMap) {
        // todo: визуализировать работу алгоритма

        var i = 0;//счётчик
        var steps = way.length;
        var islands;

        function adventure(){
            i++;
            if( i <= steps*20 ){

                var coordinates;
                var string;
                var cell;
                
                if( i % 20 === 0){

                    coordinates = way[i/20-1];//достаем текущие координаты
                    string = coordinates[0];
                    cell = coordinates[1];

                    var cursor = document.createElement('div');
                    cursor.className = 'cursor ' + 'cell_' + steps;
                    cursor.style.left = 10 + cell*22 + cell + 'px';
                    cursor.style.top = 46 + string*22 + string + 'px';
                    if (newMap[string][cell] === 0){
                        cursor.innerText = '0';
                    } else {
                        cursor.innerText = newMap[string][cell][1];

                        islands = islands>=newMap[string][cell][1]? islands : newMap[string][cell][1];
                        counter.innerText = 'Найдено островов: ' + islands;
                    }
                    container.appendChild(cursor);
                }
                requestAnimationFrame(adventure);
            }
        };
        requestAnimationFrame(adventure);
        //cancelAnimationFrame(timer WTF)
    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
