// questo file contiene le personalizzazioni dell'app

var shopping_center_id = 7;

// TODO usate da pulse api, da rimuovere
var applicationId = "yT21dy2n69cXnwb3clEDaBBeaHSBaed6N4JTwxU5";
var clientKey = "GufaaI5ttmTqHNgqkf3zv8y39htDojN6RsRE4Ipj";
var channel = 'lepiazze';

// TODO da inserire nelle api invece che qui
var scc_customizations = {
    nome: 'Le Piazze',
    show_logo_in_home: false,
    orario_default: '9:00-20:00',
    orario_messaggio: 'Alcuni negozi aprono prima! premi per dettagli',
    raggiungerci_titolo: 'Come raggiungerci',
    raggiungerci_sottotitolo: 'in auto o con i mezzi pubblici',
    ha_club: true,
    club_qr_code: true,
    ha_promozioni_esterne: false,
    orario_food: false,
    latitude: 44.5682008,
    longitude: 11.3553357,
    // orario_food:'<strong>Pranzo</strong> 11:00-15:00 <strong> Cena</strong> 19:00-22:30<br><strong> Bar e Take Away</strong> 9:00-22:30',
    privacy_policy: 'http://www.lepiazzecastelmaggiore.com/sito/pagine/privacy.php',
    servizi: {
        /*'categoria': [
            {
                sref: "negoziDetail", // si può omettere
                sref_params: {id:310}, // si può omettere
                img: "img/nf/Fmultisala@2x.png", // si può omettere
                nome: "Multisala"
            }
        ]*/
        "I servizi del centro": [{
                img: "img/nf/fagenzia@2x.png",
                nome: "Agenzia viaggi",
            }, {
                img: "img/nf/fareagiochibimbi@2x.png",
                nome: "Area Bimbi",
            }, {
                img: "img/nf/Fbancomat@2x.png",
                nome: "Bancomat",
            }, {
                img: "img/nf/fcaffetteria@2x.png",
                nome: "Bar e Caffetteria ",
            }, {
                img: "img/nf/fcalzolaio@2x.png",
                nome: "Calzolaio",
            }, {
                img: "img/nf/fclinicadentale@2x.png",
                nome: "Clinica dentale",
            }, {
                img: "img/nf/fdistributoreacqua@2x.png",
                nome: "Distributore d’acqua",
            }, {
                img: "img/nf/Fstazione_servizio@2x.png",
                nome: "Distributore di Carburanti ",
            }, {
                img: "img/nf/ffarmacia@2x.png",
                nome: "Farmacia",
            }, {
                img: "img/nf/ffioreria@2x.png",
                nome: "Fioreria",
            }, {
                img: "img/nf/flavanderia@2x.png",
                nome: "Lavanderia",
            }, {
                img: "img/nf/fnursery@2x.png",
                nome: "Nursery",
            }, {
                img: "img/nf/farticolidaregalo@2x.png",
                nome: "Oggetti da regalo",
            }, {
                img: "img/nf/forariocontinuato@2x.png",
                nome: "Orario Continuato ",
            }, {
                img: "img/nf/fottico@2x.png",
                nome: "Ottico",
            }, {
                img: "img/nf/Fparcheggio@2x.png",
                nome: "Parcheggio Coperto",
            }, {
                img: "img/nf/Fpdisabili@2x.png",
                nome: "Parcheggio per disabii",
            }, {
                img: "img/nf/fparrucchieri@2x.png",
                nome: "Parrucchiere",
            }, {
                img: "img/nf/FPizzeria@2x.png",
                nome: "Pizzeria e piadineria  ",
            }, {
                img: "img/nf/fristoranti@2x.png",
                nome: "Ristorazione",
            }, {
                img: "img/nf/fsolarium@2x.png",
                nome: "Solarium",
            }, {
                img: "img/nf/Ftabacchi@2x.png",
                nome: "Tabaccheria",
            }, {
                img: "img/nf/ftoilette@2x.png",
                nome: "Toilette",
            }, {
                img: "img/nf/fwifi@2x.png",
                nome: "Wifi Zone",
            },

        ],
    }
};

// TODO da inserire nelle api invece che qui
var posizioniNegozi = {
    "1": {
        left: 94,
        top: 189
    },
    "2": {
        left: 42,
        top: 124
    },
    "3": {
        left: 121,
        top: 144
    },
    "4": {
        left: 132,
        top: 132
    },
    "5": {
        left: 140,
        top: 125
    },
    "6": {
        left: 146,
        top: 119
    },
    "7": {
        left: 155,
        top: 109
    },
    "8": {
        left: 173,
        top: 99
    },
    "9": {
        left: 187,
        top: 95
    },
    "10": {
        left: 198,
        top: 99
    },
    "11": {
        left: 189,
        top: 107
    },
    "12": {
        left: 199,
        top: 112
    },
    "13": {
        left: 188,
        top: 54
    },
    "14": {
        left: 255,
        top: 34
    },
    "15": {
        left: 214,
        top: 99
    },
    "16": {
        left: 234,
        top: 99
    },
    "17": {
        left: 245,
        top: 99
    },
    "18": {
        left: 258,
        top: 101
    },
    "19": {
        left: 214,
        top: 113
    },
    "20": {
        left: 225,
        top: 112
    },
    "21": {
        left: 235,
        top: 112
    },
    "22": {
        left: 291,
        top: 95
    },
    "23": {
        left: 305,
        top: 103
    },
    "24": {
        left: 314,
        top: 114
    },
    "25": {
        left: 321,
        top: 122
    },
    "26": {
        left: 329,
        top: 128
    },
    "27": {
        left: 336,
        top: 135
    },
    "28": {
        left: 350,
        top: 156
    },
    "29": {
        left: 373,
        top: 176
    },
    "30": {
        left: 389,
        top: 190
    },
    "31": {
        left: 141,
        top: 170
    },
    "32": {
        left: 146,
        top: 163
    },
    "33": {
        left: 153,
        top: 156
    },
    "34": {
        left: 163,
        top: 147
    },
    "35": {
        left: 191,
        top: 144
    },
    "36": {
        left: 200,
        top: 144
    },
    "37": {
        left: 210,
        top: 144
    },
    "38": {
        left: 221,
        top: 145
    },
    "39": {
        left: 237,
        top: 145
    },
    "40": {
        left: 275,
        top: 149
    },
    "41": {
        left: 296,
        top: 148
    },
    "42": {
        left: 306,
        top: 147
    },
    "43": {
        left: 313,
        top: 156
    },
    "44": {
        left: 322,
        top: 167
    },
    "45": {
        left: 330,
        top: 175
    },
    "46": {
        left: 339,
        top: 183
    },
    "47": {
        left: 347,
        top: 190
    },
    "48": {
        left: 356,
        top: 198
    },
    "49": {
        left: 362,
        top: 206
    },
    "50": {
        left: 370,
        top: 212
    },
    "51": {
        left: 160,
        top: 169
    },
    "52": {
        left: 171,
        top: 159
    },
    "53": {
        left: 185,
        top: 159
    },
    "54": {
        left: 200,
        top: 154
    },
    "55": {
        left: 209,
        top: 155
    },
    "56": {
        left: 234,
        top: 153
    },
    "57": {
        left: 258,
        top: 164
    },
    "58": {
        left: 273,
        top: 164
    },
    "59": {
        left: 286,
        top: 163
    },
    "60": {
        left: 305,
        top: 164
    },
    "61": {
        left: 320,
        top: 181
    },
    "62": {
        left: 329,
        top: 189
    },
    "63": {
        left: 337,
        top: 198
    },
};
