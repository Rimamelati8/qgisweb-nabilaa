var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sumaterabaratt_1 = new ol.format.GeoJSON();
var features_sumaterabaratt_1 = format_sumaterabaratt_1.readFeatures(json_sumaterabaratt_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sumaterabaratt_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sumaterabaratt_1.addFeatures(features_sumaterabaratt_1);
var lyr_sumaterabaratt_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sumaterabaratt_1, 
                style: style_sumaterabaratt_1,
                popuplayertitle: 'sumatera baratt',
                interactive: true,
    title: 'sumatera baratt<br />\
    <img src="styles/legend/sumaterabaratt_1_0.png" /> <br />\
    <img src="styles/legend/sumaterabaratt_1_1.png" /> Agam<br />\
    <img src="styles/legend/sumaterabaratt_1_2.png" /> Dharmasraya<br />\
    <img src="styles/legend/sumaterabaratt_1_3.png" /> Kepulauan Mentawai<br />\
    <img src="styles/legend/sumaterabaratt_1_4.png" /> Kota Bukittinggi<br />\
    <img src="styles/legend/sumaterabaratt_1_5.png" /> Kota Padang<br />\
    <img src="styles/legend/sumaterabaratt_1_6.png" /> Kota Padang Panjang<br />\
    <img src="styles/legend/sumaterabaratt_1_7.png" /> Kota Pariaman<br />\
    <img src="styles/legend/sumaterabaratt_1_8.png" /> Kota Payakumbuh<br />\
    <img src="styles/legend/sumaterabaratt_1_9.png" /> Kota Sawahlunto<br />\
    <img src="styles/legend/sumaterabaratt_1_10.png" /> Kota Solok<br />\
    <img src="styles/legend/sumaterabaratt_1_11.png" /> Lima Puluh Kota<br />\
    <img src="styles/legend/sumaterabaratt_1_12.png" /> Padang Pariaman<br />\
    <img src="styles/legend/sumaterabaratt_1_13.png" /> Pasaman<br />\
    <img src="styles/legend/sumaterabaratt_1_14.png" /> Pasaman Barat<br />\
    <img src="styles/legend/sumaterabaratt_1_15.png" /> Pesisir Selatan<br />\
    <img src="styles/legend/sumaterabaratt_1_16.png" /> Sijunjung<br />\
    <img src="styles/legend/sumaterabaratt_1_17.png" /> Solok<br />\
    <img src="styles/legend/sumaterabaratt_1_18.png" /> Solok Selatan<br />\
    <img src="styles/legend/sumaterabaratt_1_19.png" /> Tanah Datar<br />' });
var format_TitikCenteroidDepotPDAMsumbar_2 = new ol.format.GeoJSON();
var features_TitikCenteroidDepotPDAMsumbar_2 = format_TitikCenteroidDepotPDAMsumbar_2.readFeatures(json_TitikCenteroidDepotPDAMsumbar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikCenteroidDepotPDAMsumbar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikCenteroidDepotPDAMsumbar_2.addFeatures(features_TitikCenteroidDepotPDAMsumbar_2);
var lyr_TitikCenteroidDepotPDAMsumbar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikCenteroidDepotPDAMsumbar_2, 
                style: style_TitikCenteroidDepotPDAMsumbar_2,
                popuplayertitle: 'Titik Centeroid Depot PDAM sumbar',
                interactive: true,
                title: '<img src="styles/legend/TitikCenteroidDepotPDAMsumbar_2.png" /> Titik Centeroid Depot PDAM sumbar'
            });

lyr_OSMStandard_0.setVisible(true);lyr_sumaterabaratt_1.setVisible(true);lyr_TitikCenteroidDepotPDAMsumbar_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sumaterabaratt_1,lyr_TitikCenteroidDepotPDAMsumbar_2];
lyr_sumaterabaratt_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FCODE': 'FCODE', 'KDEPUM': 'KDEPUM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'ID': 'ID', 'Photo': 'Photo', 'NAMA ITEM': 'NAMA ITEM', 'ALAMAT': 'ALAMAT', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'KATERGOTY': 'KATERGOTY', 'EMAIL': 'EMAIL', 'NO HP': 'NO HP', 'RATING': 'RATING', 'JAM / MING': 'JAM / MING', 'PHOTO/GAMB': 'PHOTO/GAMB', 'LOGO': 'LOGO', });
lyr_TitikCenteroidDepotPDAMsumbar_2.set('fieldAliases', {'NO': 'NO', 'NAMA ITEM': 'NAMA ITEM', 'ALAMAT': 'ALAMAT', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'KATERGOTY': 'KATERGOTY', 'EMAIL': 'EMAIL', 'NO HP': 'NO HP', 'RATING': 'RATING', 'JAM / MING': 'JAM / MING', 'PHOTO/GAMB': 'PHOTO/GAMB', 'LOGO': 'LOGO', });
lyr_sumaterabaratt_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'KDEPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'ID': 'TextEdit', 'Photo': 'ExternalResource', 'NAMA ITEM': 'TextEdit', 'ALAMAT': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'KATERGOTY': 'TextEdit', 'EMAIL': 'TextEdit', 'NO HP': 'TextEdit', 'RATING': 'TextEdit', 'JAM / MING': 'TextEdit', 'PHOTO/GAMB': 'TextEdit', 'LOGO': 'TextEdit', });
lyr_TitikCenteroidDepotPDAMsumbar_2.set('fieldImages', {'NO': 'TextEdit', 'NAMA ITEM': 'TextEdit', 'ALAMAT': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'KATERGOTY': 'TextEdit', 'EMAIL': 'TextEdit', 'NO HP': 'TextEdit', 'RATING': 'TextEdit', 'JAM / MING': 'TextEdit', 'PHOTO/GAMB': 'TextEdit', 'LOGO': 'TextEdit', });
lyr_sumaterabaratt_1.set('fieldLabels', {'OBJECTID': 'no label', 'FCODE': 'no label', 'KDEPUM': 'no label', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'ID': 'no label', 'Photo': 'hidden field', 'NAMA ITEM': 'no label', 'ALAMAT': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'KATERGOTY': 'no label', 'EMAIL': 'no label', 'NO HP': 'no label', 'RATING': 'no label', 'JAM / MING': 'no label', 'PHOTO/GAMB': 'no label', 'LOGO': 'no label', });
lyr_TitikCenteroidDepotPDAMsumbar_2.set('fieldLabels', {'NO': 'no label', 'NAMA ITEM': 'no label', 'ALAMAT': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'KATERGOTY': 'no label', 'EMAIL': 'no label', 'NO HP': 'no label', 'RATING': 'no label', 'JAM / MING': 'no label', 'PHOTO/GAMB': 'no label', 'LOGO': 'no label', });
lyr_TitikCenteroidDepotPDAMsumbar_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});