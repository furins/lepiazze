app.controller('clubController', ['$scope', '$http', '$state', 'sc',
    '$rootScope',
    function($scope, $http, $state, sc, $rootScope) {
        prepare_interface($rootScope);

        $rootScope.titolo = "Club Le Piazze";
        $scope.iscritto = localStorage.getItem('iscritto');
        $scope.proprietario = localStorage.getItem('iscritto_nome');


        if ((localStorage.getItem('iscritto') !== null) && (
                scc_customizations.club_qr_code === true)) {
            new QRCode(document.getElementById("qrcode"), {
                text: localStorage.getItem(
                    'iscritto'),
                width: 100,
                height: 100
            });
        }


        $('.ui.modal')
            .modal({
                closable: true,
                onDeny: function() {
                    return true;
                },
                onApprove: function() {
                    localStorage.removeItem('iscritto');
                    localStorage.removeItem('iscritto_nome');
                    $scope.$apply(function() {
                        $scope.iscritto = null;
                        $scope.proprietario = null;
                        if (scc_customizations.club_qr_code ===
                            true) {
                            $('#qrcode').replaceWith(
                                '<div id="qrcode"></div>'
                            );
                        }
                    });
                }
            });
        $scope.annullaIscrizione = function() {
            $('.ui.modal')
                .modal('show');
        };

        //
        // var negozi_interni = sc.negozi.filter(dentroAlCentro);
        // var negozi_esterni = sc.negozi.filter(fuoriCentro);
        // $scope.promozioni_interne = determina_promozioni(sc,
        //     negozi_interni).filter(soloCard);
        // $scope.promozioni_esterne = determina_promozioni(sc,
        //     negozi_esterni).filter(soloCard);

        // $('.ui.checkbox').checkbox();
        $('.iscrizione form')
            .form({
                on: 'blur',
                fields: {
                    numero: {
                        identifier: 'numero',
                        rules: [{
                            type: 'regExp[/^[0-9]{12}$/]',
                            prompt: 'Inserisci un codice di 12 cifre'
                        }]
                    },
                    pin: {
                        identifier: 'pin',
                        rules: [{
                            type: 'regExp[/^[0-9]{5}$/]',
                            prompt: 'Inserisci un codice di 5 cifre'
                        }]
                    }
                    // nome: {
                    //     identifier: 'nome',
                    //     rules: [{
                    //         type: 'empty',
                    //         prompt: 'Inserisci il tuo nome'
                    //     }]
                    // },
                    // cognome: {
                    //     identifier: 'cognome',
                    //     rules: [{
                    //         type: 'empty',
                    //         prompt: 'Inserisci il tuo cognome'
                    //     }]
                    // },
                    // telefono: {
                    //     identifier: 'telefono',
                    //     optional: true,
                    //     rules: [{
                    //         type: 'regExp[/^[0]{1}[0-9]{5,10}$/]',
                    //         prompt: 'Inserisci il numero di telefono'
                    //     }]
                    // },
                    // email: {
                    //     identifier: 'email',
                    //     optional: true,
                    //     rules: [{
                    //         type: 'email',
                    //         prompt: 'Per favore inserisci un\'email valida'
                    //     }]
                    // },
                    // indirizzo: {
                    //     identifier: 'indirizzo',
                    //     rules: [{
                    //         type: 'empty',
                    //         prompt: 'Inserisci un indirizzo'
                    //     }]
                    // },
                    // citta: {
                    //     identifier: 'citta',
                    //     rules: [{
                    //         type: 'empty',
                    //         prompt: 'Inserisci un citta'
                    //     }]
                    // },
                    // provincia: {
                    //     identifier: 'provincia',
                    //     rules: [{
                    //         type: 'regExp[/^[a-zA-Z]{2}$/]',
                    //         prompt: 'Inserisci la sigla della provincia (2 lettere)'
                    //     }]
                    // },
                    // cap: {
                    //     identifier: 'cap',
                    //     rules: [{
                    //         type: 'regExp[/^[0-9]{5}$/]',
                    //         prompt: 'Inserisci un CAP valido'
                    //     }]
                    // },
                    // privacy: {
                    //     identifier: 'privacy',
                    //     rules: [{
                    //         type: 'checked',
                    //         prompt: 'è necessario fornire il proprio consenso al trattamento dei dati personali'
                    //     }]
                    // }
                }
            });

        $scope.iscriviti = function() {
            $scope.error = false;
            $scope.validazione = 'validazione in corso';

            if ($('.iscrizione form').form('is valid') === true) {
                $scope.iscrizione.privacy = $(
                    'input[name="privacy"]').is(':checked');


                // console.log($scope.iscrizione);

                // tutto ok, procedo
                var url =
                    "http://http://www.grupromo.it/totem/?cc=2&num_card=" +
                    $scope.iscrizione.numero + "&pin=" + $scope.iscrizione
                    .pin;
                // var params = {
                //     "nome": $scope.iscrizione.nome,
                //     "cognome": $scope.iscrizione.cognome,
                //     "telefono": $scope.iscrizione.telefono,
                //     "email": $scope.iscrizione.email,
                //     "indirizzo": $scope.iscrizione.indirizzo,
                //     "cap": $scope.iscrizione.cap,
                //     "citta": $scope.iscrizione.citta,
                //     "provincia": $scope.iscrizione.provincia,
                //     "shopping_center": "/api/v1/shoppingcenters/" +
                //         shopping_center_id + "/"
                // };


                $.get("http://www.grupromo.it/totem/", {
                    cc: 2,
                    num_card: $scope.iscrizione.numero,
                    pin: $scope.iscrizione.pin
                }, function(response) {
                    $scope.validazione = null;
                    var obj = JSON && JSON.parse(response.replace(
                            'retvar', '')) ||
                        $.parseJSON(response.replace(
                            'retvar', ''));
                    if (obj.errore === "OK") {
                        localStorage.setItem('iscritto',
                            $scope.iscrizione.numero);
                        localStorage.setItem(
                            'iscritto_nome',
                            obj.nome + ' ' +
                            obj.cognome);
                        location.reload();
                    } else {
                        alert(
                            'I dati non corrispondono ad una card valida.'
                        );
                    }

                }, 'text');
            }
        }

        show_interface();
    }
]);


// app.controller('clubController', ['$scope', '$http', '$state', 'sc', '$rootScope',
//     function($scope, $http, $state, sc, $rootScope) {
//
//
//
//         $('.ui.checkbox').checkbox();
//         $('.ui.dropdown').dropdown();
//
//
//         $scope.iscriviti = function() {
//
//             $scope.error = false;
//             $scope.validazione = 'validazione in corso';
//             if ($('.iscrizione form').form('is valid') === true) {
//                 $scope.iscrizione.privacy = $('input[name="privacy"]').is(':checked');
//                 var sesso = $('select[name="sesso"]').val();
//                 if (sesso === '') {
//                     sesso = 'N';
//                 }
//                 $scope.iscrizione.sesso = sesso;
//                 var eta = $('select[name="eta"]').val();
//                 if (eta === '') {
//                     eta = 'N';
//                 }
//                 $scope.iscrizione.eta = eta;
//                 console.log($scope.iscrizione);
//
//
//                 var request = {
//                     "nome": $scope.iscrizione.nome,
//                     "cognome": $scope.iscrizione.cognome,
//                     "telefono": $scope.iscrizione.telefono,
//                     "cellulare": $scope.iscrizione.cellulare,
//                     "email": $scope.iscrizione.email,
//                     "indirizzo": $scope.iscrizione.indirizzo,
//                     "cap": $scope.iscrizione.cap,
//                     "citta": $scope.iscrizione.citta,
//                     "provincia": $scope.iscrizione.provincia,
//                     "sesso": $scope.iscrizione.sesso,
//                     "eta": $scope.iscrizione.eta
//                 };
//
//                 var jstring = json_encode(request);
//                 console.log(jstring);
//                 console.log(base64_encode(jstring));
//                 console.log(strtr(base64_encode(jstring), '+/=', '-_,'));
//
//                 var valore1 = strtr(base64_encode(json_encode(request)), '+/=', '-_,');
//
//                 var d = new Date();
//                 var f = new Date(d.getTime());
//                 f.setSeconds(f.getSeconds() + 5732);
//                 console.log(date_format(d) + 'lafavorita' + date_format(f));
//                 console.log(base64_encode(date_format(d) + 'lafavorita' + date_format(f)));
//                 var valore2 = base64_encode(date_format(d) + 'lafavorita' + date_format(f));
//
//                 console.log("http://188.10.100.169:8085/varie/anagrafica.php?campi=" + valore1 + "&user=sito&password=" + valore2);
//
//                 $http.get("http://188.10.100.169:8085/varie/anagrafica.php?campi=" + valore1 + "&user=sito&password=" + valore2)
//                     .then(function successCallback(response) {
//                         console.log("creato!");
//                         console.log(response.data);
//                         var elementiStr = response.data.split('|');
//                         var codice = null;
//                         if (elementiStr[0] === 'OK') {
//                             codice = elementiStr[1];
//                         } else if ((elementiStr[0] === 'KO') && (elementiStr[1] === "Record esistente")) {
//                             var myvalues = JSON.parse(base64_decode(strtr(elementiStr[2], '-_,', '+/=')));
//                             codice = myvalues.id;
//                         }
//
//                         if (codice !== null) {
//                             localStorage.setItem('iscritto', codice);
//                             localStorage.setItem('iscritto_nome', $scope.iscrizione.nome + ' ' + $scope.iscrizione.cognome);
//                             $scope.iscritto = codice;
//                             $scope.proprietario = $scope.iscrizione.nome + ' ' + $scope.iscrizione.cognome;
//                             $scope.validazione = null;
//                             new QRCode(document.getElementById("qrcode"), localStorage.getItem('iscritto'));
//                         } else {
//                             $scope.validazione = "si è verificato un problema con il recupero del codice. Siete pregati di riprovare più tardi.";
//                         }
//                     }, function errorCallback(response) {
//                         // called asynchronously if an error occurs
//                         // or server returns response with an error status.
//                         console.log("errore!");
//                         console.log(response.data);
//                         $scope.error = true;
//                         $scope.validazione = "si è verificato un errore, riprova più tardi";
//                     });
//             } else {
//                 console.log("validazione fallita");
//                 $scope.error = true;
//                 $scope.validazione = "si è verificato un errore";
//             }
//         }
//
//     }
// ]);
