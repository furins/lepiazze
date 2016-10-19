app.controller('promozioniCentroDetailController', ['$scope', '$http', '$state', 'sc', '$stateParams', '$timeout', '$rootScope',
    function($scope, $http, $state, sc, $stateParams, $timeout, $rootScope) {
        prepare_interface($rootScope);

        var id = parseInt($stateParams.id);
        $rootScope.titolo = "Promozioni";

        var promozione;
        var negozi = sc.negozi;
        for (var i = 0, iLen = negozi.length; i < iLen; i++) {
            for (var j = 0, jLen = negozi[i].promozioni.length; j < jLen; j++) {
                var promo = negozi[i].promozioni[j];
                if (promo.id === id) {
                    promozione = {
                        'data_inizio': promo.data_inizio,
                        'data_fine': promo.data_fine,
                        'data_completa': 'Promozione valida fino al ' + formattaData(promo.data_fine),
                        'descrizione': promo.descrizione,
                        'allegato': promo.allegato,
                        'id': promo.id,
                        'nome': promo.nome,
                        'cat_promo': promo.cat_promo,
                        'immagine': promo.immagine,
                        'immagineThumb': promo.immagineThumb,
                        'solo_per_possessori_card': promo.solo_per_possessori_card,
                        'negozio': {
                            'id': negozi[i].id,
                            'nome': negozi[i].nome,
                            'indirizzo': negozi[i].indirizzo,
                            'email': negozi[i].email,
                            'telefono': negozi[i].telefono,
                            'web': negozi[i].web,
                            'preferito': isPreferito(negozi[i].id)
                        }
                    }
                }
            }
        }
        $scope.promozione = promozione;
        if (promozione.cat_promo === 'Solo per totem') {
            $rootScope.titolo = "Promozioni Card";
        }

        $timeout(function() {
            $('a[target="_blank"]').click(function() {
                var url = $(this).attr('href');
                window.open(encodeURI(url), '_system', 'location=yes');
                return false;
            })
        });
        show_interface();
    }
]);


app.controller('promozioniController', ['$scope', '$http', '$state', 'sc', '$rootScope',
    function($scope, $http, $state, sc, $rootScope) {
        prepare_interface($rootScope);
        $rootScope.titolo = "promozioni";
        if ((typeof(sc) !== 'undefined') && (typeof(sc) !== 'negozi')) {
            var negozi = sc.negozi.filter(dentroAlCentro);
            $scope.promozioni = determina_promozioni(sc, negozi);
            $scope.volantini = sc.volantini;
            $('.item img')
                .visibility({
                    type: 'image',
                    transition: 'fade in',
                    duration: 1000
                });
        }
        show_interface();
    }
]);



function determina_promozioni(sc, negozi) {
    var promozioni = [];
    var oggi = new Date();
    for (var i = 0, iLen = negozi.length; i < iLen; i++) {
        for (var j = 0, jLen = negozi[i].promozioni.length; j < jLen; j++) {
            var promo = negozi[i].promozioni[j];
            var inizio = new Date(promo.inizio_visualizzazione);
            var fine = new Date(promo.data_fine);
            var data_completa = '';
            fine.setDate(fine.getDate() + 1);
            if ((fine > oggi) && (inizio <= oggi)) {
                // if (promo.data_inizio > oggi) {
                    data_completa = 'dal ' + formattaData(promo.data_inizio) + ' ';
                // }
                //data_completa += 'fino al ' + formattaData(promo.data_fine);
                var newpromo = {
                    'data_inizio': promo.data_inizio,
                    'data_fine': promo.data_fine,
                    'data_completa': data_completa,
                    'descrizione': promo.descrizione,
                    'allegato': promo.allegato,
                    'id': promo.id,
                    'immagine': promo.immagine,
                    'immagineThumb': promo.immagineThumb,
                    'solo_per_possessori_card': promo.solo_per_possessori_card,
                    'nome': promo.nome,
                    'cat_promo': promo.cat_promo,
                    'negozio': {
                        'id': negozi[i].id,
                        'nome': negozi[i].nome,
                        'indirizzo': negozi[i].indirizzo,
                        'email': negozi[i].email,
                        'telefono': negozi[i].telefono,
                        'web': negozi[i].web,
                        'preferito': isPreferito(negozi[i].id)
                    }
                }
                promozioni.push(newpromo);
            }
        }
    }
    return promozioni;
}
