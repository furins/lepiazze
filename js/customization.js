// questo file contiene le personalizzazioni dell'app

var shopping_center_id = 7;

// TODO usate da pulse api, da rimuovere
var applicationId = "yT21dy2n69cXnwb3clEDaBBeaHSBaed6N4JTwxU5";
var clientKey = "GufaaI5ttmTqHNgqkf3zv8y39htDojN6RsRE4Ipj";
var channel = 'lecupole';

// TODO da inserire nelle api invece che qui
var scc_customizations = {
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
    '0': {
        left: -100,
        top: -100
    },
};
