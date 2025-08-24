var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_NawanKilli_1 = new ol.format.GeoJSON();
var features_NawanKilli_1 = format_NawanKilli_1.readFeatures(json_NawanKilli_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NawanKilli_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NawanKilli_1.addFeatures(features_NawanKilli_1);
var lyr_NawanKilli_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NawanKilli_1, 
                style: style_NawanKilli_1,
                popuplayertitle: 'Nawan Killi',
                interactive: true,
                title: '<img src="styles/legend/NawanKilli_1.png" /> Nawan Killi'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_NawanKilli_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_NawanKilli_1];
lyr_NawanKilli_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'STATUS': 'STATUS', 'Length': 'Length', 'Dia': 'Dia', 'Type': 'Type', 'Year_': 'Year_', 'Condition': 'Condition', 'Sub_Divion': 'Sub_Divion', 'Shape_Leng': 'Shape_Leng', 'cond': 'cond', });
lyr_NawanKilli_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'STATUS': 'TextEdit', 'Length': 'TextEdit', 'Dia': 'TextEdit', 'Type': 'TextEdit', 'Year_': 'TextEdit', 'Condition': 'TextEdit', 'Sub_Divion': 'TextEdit', 'Shape_Leng': 'TextEdit', 'cond': 'TextEdit', });
lyr_NawanKilli_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'STATUS': 'no label', 'Length': 'no label', 'Dia': 'no label', 'Type': 'no label', 'Year_': 'no label', 'Condition': 'no label', 'Sub_Divion': 'no label', 'Shape_Leng': 'no label', 'cond': 'no label', });
lyr_NawanKilli_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});