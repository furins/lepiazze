// questo file contiene le personalizzazioni dell'app

var shopping_center_id = 2;

// TODO usate da pulse api, da rimuovere
var applicationId = "yT21dy2n69cXnwb3clEDaBBeaHSBaed6N4JTwxU5";
var clientKey = "GufaaI5ttmTqHNgqkf3zv8y39htDojN6RsRE4Ipj";
var channel = 'lecupole';

// TODO da inserire nelle api invece che qui
var scc_customizations = {
    show_logo_in_home: false,
    orario_default: '8:30-21:00',
    orario_messaggio: 'Alcuni negozi aprono prima! premi per dettagli',
    raggiungerci_titolo: 'Come raggiungerci',
    raggiungerci_sottotitolo: 'in auto o con i mezzi pubblici',
    ha_club: false,
    club_qr_code: false,
    ha_promozioni_esterne: false,
    orario_food: false,
    latitude: 45.37965,
    longitude: 9.305506,
    // orario_food:'<strong>Pranzo</strong> 11:00-15:00 <strong> Cena</strong> 19:00-22:30<br><strong> Bar e Take Away</strong> 9:00-22:30',
    privacy_policy: 'http://www.centrolafavorita.com/pagine/dynamic.php?table_name=favorita_privacy',
    servizi : {
        'categoria': [
            {
                sref: "negoziDetail", // si può omettere
                sref_params: {id:310}, // si può omettere
                img: "img/nf/Fmultisala@2x.png", // si può omettere
                nome: "Multisala"
            }
        ]
    }
};

// TODO da inserire nelle api invece che qui
var posizioniNegozi = {
    '0'  : {left:-100, top:-100},
};
