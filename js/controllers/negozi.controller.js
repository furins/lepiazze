/* determino quali negozi vendono cibo */
function food(elemento) {
    return verifica_attributo(elemento, 'identificatore', 1);
}


/* determino quali negozi NON vendono cibo */
function nonFood(elemento) {
    return verifica_attributo(elemento, 'identificatore', 0);
}


/* determino quali negozi sono temporanei */
function temporary(elemento) {
    return verifica_attributo(elemento, 'identificatore', 10);
}

/*
 * Controller generico per i negozi (food, non food, temporary)
 */
var controller_negozi = function($scope, sc, $rootScope, titolo, filtro) {
    // imposto titolo pagina
    prepare_interface($rootScope);
    $rootScope.titolo = titolo;

    // imposto variabili per pagina
    $scope.negozi = sc.negozi.filter(dentroAlCentro).filter(filtro);
    $scope.query = '';
    $scope.search = function(negozio) {
        return ricerca_fulltext_negozi($scope, negozio)
    };

    // imposto funzioni pagina
    $scope.annulla_cerca = function() {
        $scope.query = '';
    };

    if (scc_customizations.orario_food !== false) {
        $scope.ha_orario_food = true;
        $scope.orario_food = scc_customizations.orario_food;
    } else {
        $scope.ha_orario_food = false;
        $scope.orario_food = '';
    }

    // visualizzo pagina
    show_interface();
}


app.controller('negoziController', ['$scope', 'sc', '$rootScope',
    function($scope, sc, $rootScope, titolo, filtro) {
        return controller_negozi($scope, sc, $rootScope,
            "Negozi del centro", nonFood);
    }
]);

app.controller('foodController', ['$scope', 'sc', '$rootScope',
    function($scope, sc, $rootScope, titolo, filtro) {
        return controller_negozi($scope, sc, $rootScope, "Food", food);
    }
]);

app.controller('temporaryController', ['$scope', 'sc', '$rootScope',
    function($scope, sc, $rootScope, titolo, filtro) {
        return controller_negozi($scope, sc, $rootScope,
            "Temporary Shops", temporary);
    }
]);


app.controller('negoziDetailController', ['$scope', '$http', '$state', 'sc',
    '$stateParams', '$timeout', '$rootScope',
    function($scope, $http, $state, sc, $stateParams, $timeout,
        $rootScope) {
        prepare_interface($rootScope);
        // recupero dati negozio
        var negozio = getByValue(sc.negozi, 'id', $stateParams.id);

        // intestazione pagina
        $rootScope.titolo = negozio.nome || '';
        $rootScope.negozio = negozio;

        var myScroll = new IScroll('.mappa', {
            zoom: true,
            scrollY: true,
            scrollX: true,
            freeScroll: true,
            click: true
        });


        // attivazione tab
        $('#sopra .tab').tab({
            'context': '#sopra'
        });
        $('#sotto .tab').tab({
            'context': '#sotto'
        });

        // gestione eventi tab
        $('#schede .descrizione').on('click', function() {
            $('#sopra .tab').tab('change tab', 'descrizione');
            $('#sotto .tab').tab('change tab', 'descrizione');
        });

        $('#schede .posizione').on('click', function() {
            $('#sopra .tab').tab('change tab', 'vuoto');
            $('#sotto .tab').tab('change tab', 'mappa');

            myScroll.refresh();

            var pos_mappa = $('.mappa').offset();
            $('.mappa').height($(window).height() - pos_mappa.top);

            console.log($('.mappa').height() + ' ' + $('.mappa')
                .width());
            console.log($('.mappa-zoomabile').height() + ' ' +
                $('.mappa-zoomabile')
                .width());
            var height = $('.mappa-zoomabile').height();
            var width = $('.mappa-zoomabile').width();
            var image_ratio = width / height;
            if (typeof(posizioniNegozi[negozio.numero]) !==
                'undefined') {
                var pos = posizioniNegozi[negozio.numero];
                pos.left = pos.left * width / 414;
                pos.top = pos.top * height / 237; //riferito alla dimensione dell'immagine, in proporzione alle dimensioni dell'immagine usata per calcolare le posizioni dei punti
                $('.punto-mappa').css(pos);
            } else {
                console.log("posizione non nota");
            }

            // conserva questo codice ti serev nelle mappe parcheggi
            // window.ysf = 125;
            // window.xsf = 5;
            // window.counter = 0;
            // $('.mappa').click(function(e) {
            //     pos = {
            //             left: ((myScroll.pointX -
            //                     myScroll.absStartX -
            //                     window.xsf) /
            //                 myScroll.scale),
            //             top: ((myScroll.pointY -
            //                     myScroll.absStartY -
            //                     window.ysf) /
            //                 myScroll.scale)
            //         }
            //     window.counter += 1;
            //     console.log('"' + window.counter +
            //         '" : {left:' + pos.left +
            //         ', top: ' + pos.top + '},');
            //     console.log(myScroll);
            //     $(".punto-mappa").css(pos);
            // });
            //


            // fine rileva dove clicchi

            // codice per mostrare i numeri sulla mappa

            // console.log("mostro punti mappa");
            // for (var variable in posizioniNegozi) {
            //     if (posizioniNegozi.hasOwnProperty(variable)) {
            //         console.log(variable);
            //         var pos = posizioniNegozi[variable];
            //         pos.left = myScroll.scrollerWidth * pos.left /
            //             320 + 5 * myScroll.scrollerWidth / 320 -
            //             5;
            //         pos.top = (myScroll.scrollerWidth /
            //                 image_ratio) * pos.top / 206 + 5 *
            //             (myScroll.scrollerWidth / 320) - 5; //riferito alla dimensione dell'immagine, in proporzione a 320
            //         $('.mappa>div').append(
            //             '<span style="display: block; position: absolute; left: ' +
            //             pos.left + 'px; top: ' + pos.top +
            //             'px;">' + variable + '</span>');
            //     }
            // }
            // console.log("fine punti mappa");



        });

        $('#schede .promozioni').on('click', function() {
            $('#sopra .tab').tab('change tab', 'vuoto');
            $('#sotto .tab').tab('change tab', 'promozioni');
            $('.checkbox.preferito').checkbox({
                'onChange': function() {
                    setPreferito(parseInt(negozio.id));
                    //$('.checkbox.preferito label').text(isPreferito(negozio.id)?'Disabilita notifiche promozioni':'Abilita notifiche promozioni');
                }
            });
            $('.checkbox.preferito input').prop("checked",
                isPreferito(negozio.id));
            console.log(isPreferito(negozio.id));
        });

        $('#schede .contatti').on('click', function() {
            $('#sopra .tab').tab('change tab', 'vuoto');
            $('#sotto .tab').tab('change tab', 'contatti');
        });

        $timeout(function() {
            $('a[target="_blank"]').click(function() {
                var url = $(this).attr('href');
                window.open(encodeURI(url), '_system',
                    'location=yes');
                return false;
            })
        });

        $scope.promozioni = negozio.promozioni; // TODO occorre ripulirle all'avvio, dopo aver scaricato gli aggiornamenti

        show_interface();


    }
]);
