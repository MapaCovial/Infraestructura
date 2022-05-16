var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_2 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Poblacion_LL_3 = new ol.format.GeoJSON();
var features_Poblacion_LL_3 = format_Poblacion_LL_3.readFeatures(json_Poblacion_LL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacion_LL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacion_LL_3.addFeatures(features_Poblacion_LL_3);
var lyr_Poblacion_LL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poblacion_LL_3, 
                style: style_Poblacion_LL_3,
                interactive: true,
                title: '<img src="styles/legend/Poblacion_LL_3.png" /> Poblacion_LL'
            });
var format_Departamentos_GTM_4 = new ol.format.GeoJSON();
var features_Departamentos_GTM_4 = format_Departamentos_GTM_4.readFeatures(json_Departamentos_GTM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_GTM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_GTM_4.addFeatures(features_Departamentos_GTM_4);
var lyr_Departamentos_GTM_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_GTM_4, 
                style: style_Departamentos_GTM_4,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_GTM_4.png" /> Departamentos_GTM'
            });
var format_Puente2008_5 = new ol.format.GeoJSON();
var features_Puente2008_5 = format_Puente2008_5.readFeatures(json_Puente2008_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puente2008_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puente2008_5.addFeatures(features_Puente2008_5);
var lyr_Puente2008_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puente2008_5, 
                style: style_Puente2008_5,
                interactive: true,
                title: '<img src="styles/legend/Puente2008_5.png" /> Puente2008'
            });
var format_DGC2022_6 = new ol.format.GeoJSON();
var features_DGC2022_6 = format_DGC2022_6.readFeatures(json_DGC2022_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGC2022_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGC2022_6.addFeatures(features_DGC2022_6);
var lyr_DGC2022_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DGC2022_6, 
                style: style_DGC2022_6,
                interactive: true,
                title: '<img src="styles/legend/DGC2022_6.png" /> DGC2022'
            });
var format_Terraceria2022_7 = new ol.format.GeoJSON();
var features_Terraceria2022_7 = format_Terraceria2022_7.readFeatures(json_Terraceria2022_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terraceria2022_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terraceria2022_7.addFeatures(features_Terraceria2022_7);
var lyr_Terraceria2022_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Terraceria2022_7, 
                style: style_Terraceria2022_7,
                interactive: true,
                title: '<img src="styles/legend/Terraceria2022_7.png" /> Terraceria2022'
            });
var format_Pavimentada2022_8 = new ol.format.GeoJSON();
var features_Pavimentada2022_8 = format_Pavimentada2022_8.readFeatures(json_Pavimentada2022_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pavimentada2022_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pavimentada2022_8.addFeatures(features_Pavimentada2022_8);
var lyr_Pavimentada2022_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pavimentada2022_8, 
                style: style_Pavimentada2022_8,
                interactive: true,
                title: '<img src="styles/legend/Pavimentada2022_8.png" /> Pavimentada2022'
            });
var format_FSS2022_9 = new ol.format.GeoJSON();
var features_FSS2022_9 = format_FSS2022_9.readFeatures(json_FSS2022_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FSS2022_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FSS2022_9.addFeatures(features_FSS2022_9);
var lyr_FSS2022_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FSS2022_9, 
                style: style_FSS2022_9,
                interactive: true,
                title: '<img src="styles/legend/FSS2022_9.png" /> FSS2022'
            });
var format_Kilometraje_10 = new ol.format.GeoJSON();
var features_Kilometraje_10 = format_Kilometraje_10.readFeatures(json_Kilometraje_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kilometraje_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kilometraje_10.addFeatures(features_Kilometraje_10);
var lyr_Kilometraje_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kilometraje_10, 
                style: style_Kilometraje_10,
                interactive: true,
                title: '<img src="styles/legend/Kilometraje_10.png" /> Kilometraje'
            });
var format_RiosLL_11 = new ol.format.GeoJSON();
var features_RiosLL_11 = format_RiosLL_11.readFeatures(json_RiosLL_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosLL_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosLL_11.addFeatures(features_RiosLL_11);
var lyr_RiosLL_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RiosLL_11, 
                style: style_RiosLL_11,
                interactive: true,
                title: '<img src="styles/legend/RiosLL_11.png" /> Rios LL'
            });
var format_MunicipiosActualizadosLL_12 = new ol.format.GeoJSON();
var features_MunicipiosActualizadosLL_12 = format_MunicipiosActualizadosLL_12.readFeatures(json_MunicipiosActualizadosLL_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosActualizadosLL_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosActualizadosLL_12.addFeatures(features_MunicipiosActualizadosLL_12);
var lyr_MunicipiosActualizadosLL_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosActualizadosLL_12, 
                style: style_MunicipiosActualizadosLL_12,
                interactive: true,
                title: '<img src="styles/legend/MunicipiosActualizadosLL_12.png" /> MunicipiosActualizadosLL'
            });
var format_CP2022_13 = new ol.format.GeoJSON();
var features_CP2022_13 = format_CP2022_13.readFeatures(json_CP2022_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CP2022_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CP2022_13.addFeatures(features_CP2022_13);
var lyr_CP2022_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CP2022_13, 
                style: style_CP2022_13,
                interactive: true,
                title: '<img src="styles/legend/CP2022_13.png" /> CP-2022'
            });
var format_Be2022_14 = new ol.format.GeoJSON();
var features_Be2022_14 = format_Be2022_14.readFeatures(json_Be2022_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Be2022_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Be2022_14.addFeatures(features_Be2022_14);
var lyr_Be2022_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Be2022_14, 
                style: style_Be2022_14,
                interactive: true,
                title: '<img src="styles/legend/Be2022_14.png" /> Be-2022'
            });
var format_Em2022_15 = new ol.format.GeoJSON();
var features_Em2022_15 = format_Em2022_15.readFeatures(json_Em2022_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Em2022_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Em2022_15.addFeatures(features_Em2022_15);
var lyr_Em2022_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Em2022_15, 
                style: style_Em2022_15,
                interactive: true,
                title: '<img src="styles/legend/Em2022_15.png" /> Em-2022'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoad_2.setVisible(true);lyr_Poblacion_LL_3.setVisible(false);lyr_Departamentos_GTM_4.setVisible(false);lyr_Puente2008_5.setVisible(false);lyr_DGC2022_6.setVisible(true);lyr_Terraceria2022_7.setVisible(true);lyr_Pavimentada2022_8.setVisible(true);lyr_FSS2022_9.setVisible(true);lyr_Kilometraje_10.setVisible(false);lyr_RiosLL_11.setVisible(false);lyr_MunicipiosActualizadosLL_12.setVisible(false);lyr_CP2022_13.setVisible(true);lyr_Be2022_14.setVisible(true);lyr_Em2022_15.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_GoogleRoad_2,lyr_Poblacion_LL_3,lyr_Departamentos_GTM_4,lyr_Puente2008_5,lyr_DGC2022_6,lyr_Terraceria2022_7,lyr_Pavimentada2022_8,lyr_FSS2022_9,lyr_Kilometraje_10,lyr_RiosLL_11,lyr_MunicipiosActualizadosLL_12,lyr_CP2022_13,lyr_Be2022_14,lyr_Em2022_15];
lyr_Poblacion_LL_3.set('fieldAliases', {'codigo': 'codigo', 'cod_censo': 'cod_censo', 'departamen': 'departamen', 'municipio': 'municipio', 'lugar_pobl': 'lugar_pobl', 'categoria': 'categoria', });
lyr_Departamentos_GTM_4.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Cod_Depto': 'Cod_Depto', 'CODIGO': 'CODIGO', });
lyr_Puente2008_5.set('fieldAliases', {'TIPO_PUENT': 'TIPO_PUENT', 'CODIGO_RUT': 'CODIGO_RUT', 'DESCRICPIO': 'DESCRICPIO', 'ESTACION': 'ESTACION', 'NOMBRE_PUE': 'NOMBRE_PUE', 'TIPO_DE_VI': 'TIPO_DE_VI', 'LONGITUD': 'LONGITUD', });
lyr_DGC2022_6.set('fieldAliases', {'RUTA': 'RUTA', 'PROYECTO_D': 'PROYECTO_D', 'EMPRESA_DG': 'EMPRESA_DG', 'CONTRATO_D': 'CONTRATO_D', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'NOG_DGC': 'NOG_DGC', 'GUATECOMPR': 'GUATECOMPR', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', });
lyr_Terraceria2022_7.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'DRIVE': 'DRIVE', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', });
lyr_Pavimentada2022_8.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'BACHEO2022': 'BACHEO2022', 'NOGBACHEO2': 'NOGBACHEO2', 'LIMPIEZA20': 'LIMPIEZA20', 'NOGLIMPIEZ': 'NOGLIMPIEZ', 'SUPER2022': 'SUPER2022', 'NOGSUPER20': 'NOGSUPER20', 'GUATECOMBA': 'GUATECOMBA', 'GUATECOMLI': 'GUATECOMLI', 'GUATECOMSU': 'GUATECOMSU', 'DRIVE': 'DRIVE', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', });
lyr_FSS2022_9.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'LIMPIEZA': 'LIMPIEZA', 'EMPRESA_LI': 'EMPRESA_LI', 'SUPERVISIO': 'SUPERVISIO', 'NOMBRE_SUP': 'NOMBRE_SUP', 'TELEFONO_S': 'TELEFONO_S', 'NOG_LIMPIE': 'NOG_LIMPIE', 'NOG_SUPER': 'NOG_SUPER', 'GUATECOM_L': 'GUATECOM_L', 'GUATECOM_S': 'GUATECOM_S', 'SNIP_FSS': 'SNIP_FSS', 'COMUNIDAD': 'COMUNIDAD', 'PROYECTO_F': 'PROYECTO_F', 'DOCUMENTO': 'DOCUMENTO', 'EMPRESA_FS': 'EMPRESA_FS', 'NOG_FSS': 'NOG_FSS', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', });
lyr_Kilometraje_10.set('fieldAliases', {'Altitude': 'Altitude', 'Descriptio': 'Descriptio', 'Name1': 'Name1', 'Position': 'Position', 'Position X': 'Position X', 'Position Y': 'Position Y', 'Visible': 'Visible', 'field_8': 'field_8', });
lyr_RiosLL_11.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_MunicipiosActualizadosLL_12.set('fieldAliases', {'COD_DEPT_1': 'COD_DEPT_1', 'COD_MUNI_1': 'COD_MUNI_1', 'NOMBRE_1': 'NOMBRE_1', 'DEPTO_1': 'DEPTO_1', 'AREA_KMÂ²_': 'AREA_KMÂ²_', 'PERIMETR_1': 'PERIMETR_1', });
lyr_CP2022_13.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'CP_2022': 'CP_2022', 'NOG': 'NOG', 'DEPARTAMEN': 'DEPARTAMEN', 'LONGITUD': 'LONGITUD', 'SUPER': 'SUPER', });
lyr_Be2022_14.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'PROYECTO': 'PROYECTO', 'NOG': 'NOG', 'DEPARTAMEN': 'DEPARTAMEN', });
lyr_Em2022_15.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'PROYECTO': 'PROYECTO', 'NOG': 'NOG', 'DEPARTAMEN': 'DEPARTAMEN', });
lyr_Poblacion_LL_3.set('fieldImages', {'codigo': 'TextEdit', 'cod_censo': 'TextEdit', 'departamen': 'TextEdit', 'municipio': 'TextEdit', 'lugar_pobl': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Departamentos_GTM_4.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Cod_Depto': 'Range', 'CODIGO': 'Range', });
lyr_Puente2008_5.set('fieldImages', {'TIPO_PUENT': 'TextEdit', 'CODIGO_RUT': 'TextEdit', 'DESCRICPIO': 'TextEdit', 'ESTACION': 'TextEdit', 'NOMBRE_PUE': 'TextEdit', 'TIPO_DE_VI': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_DGC2022_6.set('fieldImages', {'RUTA': 'TextEdit', 'PROYECTO_D': 'TextEdit', 'EMPRESA_DG': 'TextEdit', 'CONTRATO_D': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'NOG_DGC': 'TextEdit', 'GUATECOMPR': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_Terraceria2022_7.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'DRIVE': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', });
lyr_Pavimentada2022_8.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'BACHEO2022': 'TextEdit', 'NOGBACHEO2': 'TextEdit', 'LIMPIEZA20': 'TextEdit', 'NOGLIMPIEZ': 'TextEdit', 'SUPER2022': 'TextEdit', 'NOGSUPER20': 'TextEdit', 'GUATECOMBA': 'TextEdit', 'GUATECOMLI': 'TextEdit', 'GUATECOMSU': 'TextEdit', 'DRIVE': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', });
lyr_FSS2022_9.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'LIMPIEZA': 'TextEdit', 'EMPRESA_LI': 'TextEdit', 'SUPERVISIO': 'TextEdit', 'NOMBRE_SUP': 'TextEdit', 'TELEFONO_S': 'TextEdit', 'NOG_LIMPIE': 'TextEdit', 'NOG_SUPER': 'TextEdit', 'GUATECOM_L': 'TextEdit', 'GUATECOM_S': 'TextEdit', 'SNIP_FSS': 'TextEdit', 'COMUNIDAD': 'TextEdit', 'PROYECTO_F': 'TextEdit', 'DOCUMENTO': 'TextEdit', 'EMPRESA_FS': 'TextEdit', 'NOG_FSS': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_Kilometraje_10.set('fieldImages', {'Altitude': 'TextEdit', 'Descriptio': 'TextEdit', 'Name1': 'TextEdit', 'Position': 'TextEdit', 'Position X': 'TextEdit', 'Position Y': 'TextEdit', 'Visible': 'TextEdit', 'field_8': 'TextEdit', });
lyr_RiosLL_11.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_MunicipiosActualizadosLL_12.set('fieldImages', {'COD_DEPT_1': 'TextEdit', 'COD_MUNI_1': 'TextEdit', 'NOMBRE_1': 'TextEdit', 'DEPTO_1': 'TextEdit', 'AREA_KMÂ²_': 'TextEdit', 'PERIMETR_1': 'TextEdit', });
lyr_CP2022_13.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'CP_2022': 'TextEdit', 'NOG': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'LONGITUD': 'TextEdit', 'SUPER': 'TextEdit', });
lyr_Be2022_14.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'PROYECTO': 'TextEdit', 'NOG': 'TextEdit', 'DEPARTAMEN': 'TextEdit', });
lyr_Em2022_15.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'PROYECTO': 'TextEdit', 'NOG': 'TextEdit', 'DEPARTAMEN': 'TextEdit', });
lyr_Poblacion_LL_3.set('fieldLabels', {'codigo': 'header label', 'cod_censo': 'header label', 'departamen': 'header label', 'municipio': 'header label', 'lugar_pobl': 'header label', 'categoria': 'header label', });
lyr_Departamentos_GTM_4.set('fieldLabels', {'DEPARTAMEN': 'header label', 'Cod_Depto': 'header label', 'CODIGO': 'header label', });
lyr_Puente2008_5.set('fieldLabels', {'TIPO_PUENT': 'header label', 'CODIGO_RUT': 'header label', 'DESCRICPIO': 'header label', 'ESTACION': 'header label', 'NOMBRE_PUE': 'header label', 'TIPO_DE_VI': 'header label', 'LONGITUD': 'header label', });
lyr_DGC2022_6.set('fieldLabels', {'RUTA': 'header label', 'PROYECTO_D': 'header label', 'EMPRESA_DG': 'header label', 'CONTRATO_D': 'header label', 'DESCRIPCIO': 'header label', 'LONGITUD': 'header label', 'NOG_DGC': 'header label', 'GUATECOMPR': 'header label', 'DEPARTAMEN': 'header label', 'MUNICIPIO': 'header label', });
lyr_Terraceria2022_7.set('fieldLabels', {'RUTA': 'header label', 'DESCRIPCIO': 'header label', 'LONGITUD': 'header label', 'DRIVE': 'header label', 'DEPARTAMEN': 'header label', 'MUNICIPIO': 'header label', 'UBG': 'header label', });
lyr_Pavimentada2022_8.set('fieldLabels', {'RUTA': 'header label', 'DESCRIPCIO': 'header label', 'LONGITUD': 'header label', 'BACHEO2022': 'header label', 'NOGBACHEO2': 'header label', 'LIMPIEZA20': 'header label', 'NOGLIMPIEZ': 'header label', 'SUPER2022': 'header label', 'NOGSUPER20': 'header label', 'GUATECOMBA': 'header label', 'GUATECOMLI': 'header label', 'GUATECOMSU': 'header label', 'DRIVE': 'header label', 'DEPARTAMEN': 'header label', 'MUNICIPIO': 'header label', 'UBG': 'header label', });
lyr_FSS2022_9.set('fieldLabels', {'RUTA': 'header label', 'DESCRIPCIO': 'header label', 'LONGITUD': 'header label', 'LIMPIEZA': 'header label', 'EMPRESA_LI': 'header label', 'SUPERVISIO': 'header label', 'NOMBRE_SUP': 'header label', 'TELEFONO_S': 'header label', 'NOG_LIMPIE': 'header label', 'NOG_SUPER': 'header label', 'GUATECOM_L': 'header label', 'GUATECOM_S': 'header label', 'SNIP_FSS': 'header label', 'COMUNIDAD': 'header label', 'PROYECTO_F': 'header label', 'DOCUMENTO': 'header label', 'EMPRESA_FS': 'header label', 'NOG_FSS': 'header label', 'DEPARTAMEN': 'header label', 'MUNICIPIO': 'header label', });
lyr_Kilometraje_10.set('fieldLabels', {'Altitude': 'no label', 'Descriptio': 'no label', 'Name1': 'no label', 'Position': 'no label', 'Position X': 'no label', 'Position Y': 'no label', 'Visible': 'no label', 'field_8': 'no label', });
lyr_RiosLL_11.set('fieldLabels', {'NOMBRE': 'header label', });
lyr_MunicipiosActualizadosLL_12.set('fieldLabels', {'COD_DEPT_1': 'header label', 'COD_MUNI_1': 'header label', 'NOMBRE_1': 'header label', 'DEPTO_1': 'header label', 'AREA_KMÂ²_': 'header label', 'PERIMETR_1': 'header label', });
lyr_CP2022_13.set('fieldLabels', {'RUTA': 'header label', 'DESCRIPCIO': 'header label', 'CP_2022': 'header label', 'NOG': 'header label', 'DEPARTAMEN': 'header label', 'LONGITUD': 'header label', 'SUPER': 'header label', });
lyr_Be2022_14.set('fieldLabels', {'RUTA': 'header label', 'DESCRIPCIO': 'header label', 'PROYECTO': 'header label', 'NOG': 'header label', 'DEPARTAMEN': 'header label', });
lyr_Em2022_15.set('fieldLabels', {'RUTA': 'header label', 'DESCRIPCIO': 'header label', 'PROYECTO': 'header label', 'NOG': 'header label', 'DEPARTAMEN': 'header label', });
lyr_Em2022_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});