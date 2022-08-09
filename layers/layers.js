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
var format_MunicipiosActualizadosLL_3 = new ol.format.GeoJSON();
var features_MunicipiosActualizadosLL_3 = format_MunicipiosActualizadosLL_3.readFeatures(json_MunicipiosActualizadosLL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosActualizadosLL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosActualizadosLL_3.addFeatures(features_MunicipiosActualizadosLL_3);
var lyr_MunicipiosActualizadosLL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosActualizadosLL_3, 
                style: style_MunicipiosActualizadosLL_3,
                interactive: true,
                title: '<img src="styles/legend/MunicipiosActualizadosLL_3.png" /> MunicipiosActualizadosLL'
            });
var format_Poblacion_LL_4 = new ol.format.GeoJSON();
var features_Poblacion_LL_4 = format_Poblacion_LL_4.readFeatures(json_Poblacion_LL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacion_LL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacion_LL_4.addFeatures(features_Poblacion_LL_4);
var lyr_Poblacion_LL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poblacion_LL_4, 
                style: style_Poblacion_LL_4,
                interactive: true,
                title: '<img src="styles/legend/Poblacion_LL_4.png" /> Poblacion_LL'
            });
var format_Departamentos_GTM_5 = new ol.format.GeoJSON();
var features_Departamentos_GTM_5 = format_Departamentos_GTM_5.readFeatures(json_Departamentos_GTM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_GTM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_GTM_5.addFeatures(features_Departamentos_GTM_5);
var lyr_Departamentos_GTM_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_GTM_5, 
                style: style_Departamentos_GTM_5,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_GTM_5.png" /> Departamentos_GTM'
            });
var format_Alcantarilla2013_6 = new ol.format.GeoJSON();
var features_Alcantarilla2013_6 = format_Alcantarilla2013_6.readFeatures(json_Alcantarilla2013_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alcantarilla2013_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alcantarilla2013_6.addFeatures(features_Alcantarilla2013_6);
var lyr_Alcantarilla2013_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Alcantarilla2013_6, 
                style: style_Alcantarilla2013_6,
                interactive: true,
                title: '<img src="styles/legend/Alcantarilla2013_6.png" /> Alcantarilla2013'
            });
var format_Pavimentada2022_7 = new ol.format.GeoJSON();
var features_Pavimentada2022_7 = format_Pavimentada2022_7.readFeatures(json_Pavimentada2022_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pavimentada2022_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pavimentada2022_7.addFeatures(features_Pavimentada2022_7);
var lyr_Pavimentada2022_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pavimentada2022_7, 
                style: style_Pavimentada2022_7,
                interactive: true,
                title: '<img src="styles/legend/Pavimentada2022_7.png" /> Pavimentada2022'
            });
var format_Terraceria2022_8 = new ol.format.GeoJSON();
var features_Terraceria2022_8 = format_Terraceria2022_8.readFeatures(json_Terraceria2022_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terraceria2022_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terraceria2022_8.addFeatures(features_Terraceria2022_8);
var lyr_Terraceria2022_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Terraceria2022_8, 
                style: style_Terraceria2022_8,
                interactive: true,
                title: '<img src="styles/legend/Terraceria2022_8.png" /> Terraceria2022'
            });
var format_DGC2022_9 = new ol.format.GeoJSON();
var features_DGC2022_9 = format_DGC2022_9.readFeatures(json_DGC2022_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGC2022_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGC2022_9.addFeatures(features_DGC2022_9);
var lyr_DGC2022_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DGC2022_9, 
                style: style_DGC2022_9,
                interactive: true,
                title: '<img src="styles/legend/DGC2022_9.png" /> DGC2022'
            });
var format_FSS2022_10 = new ol.format.GeoJSON();
var features_FSS2022_10 = format_FSS2022_10.readFeatures(json_FSS2022_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FSS2022_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FSS2022_10.addFeatures(features_FSS2022_10);
var lyr_FSS2022_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FSS2022_10, 
                style: style_FSS2022_10,
                interactive: true,
                title: '<img src="styles/legend/FSS2022_10.png" /> FSS2022'
            });
var format_Kilometraje_11 = new ol.format.GeoJSON();
var features_Kilometraje_11 = format_Kilometraje_11.readFeatures(json_Kilometraje_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kilometraje_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kilometraje_11.addFeatures(features_Kilometraje_11);
var lyr_Kilometraje_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kilometraje_11, 
                style: style_Kilometraje_11,
                interactive: true,
                title: '<img src="styles/legend/Kilometraje_11.png" /> Kilometraje'
            });
var format_CPe2022_12 = new ol.format.GeoJSON();
var features_CPe2022_12 = format_CPe2022_12.readFeatures(json_CPe2022_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPe2022_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPe2022_12.addFeatures(features_CPe2022_12);
var lyr_CPe2022_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CPe2022_12, 
                style: style_CPe2022_12,
                interactive: true,
                title: '<img src="styles/legend/CPe2022_12.png" /> CPe-2022'
            });
var format_OCe2022_13 = new ol.format.GeoJSON();
var features_OCe2022_13 = format_OCe2022_13.readFeatures(json_OCe2022_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OCe2022_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCe2022_13.addFeatures(features_OCe2022_13);
var lyr_OCe2022_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OCe2022_13, 
                style: style_OCe2022_13,
                interactive: true,
                title: '<img src="styles/legend/OCe2022_13.png" /> OCe-2022'
            });
var format_Pe2022_14 = new ol.format.GeoJSON();
var features_Pe2022_14 = format_Pe2022_14.readFeatures(json_Pe2022_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pe2022_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pe2022_14.addFeatures(features_Pe2022_14);
var lyr_Pe2022_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pe2022_14, 
                style: style_Pe2022_14,
                interactive: true,
                title: '<img src="styles/legend/Pe2022_14.png" /> Pe-2022'
            });
var format_CP2022_15 = new ol.format.GeoJSON();
var features_CP2022_15 = format_CP2022_15.readFeatures(json_CP2022_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CP2022_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CP2022_15.addFeatures(features_CP2022_15);
var lyr_CP2022_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CP2022_15, 
                style: style_CP2022_15,
                interactive: true,
                title: '<img src="styles/legend/CP2022_15.png" /> CP-2022'
            });
var format_Be2022_16 = new ol.format.GeoJSON();
var features_Be2022_16 = format_Be2022_16.readFeatures(json_Be2022_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Be2022_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Be2022_16.addFeatures(features_Be2022_16);
var lyr_Be2022_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Be2022_16, 
                style: style_Be2022_16,
                interactive: true,
                title: '<img src="styles/legend/Be2022_16.png" /> Be-2022'
            });
var format_Em2022_17 = new ol.format.GeoJSON();
var features_Em2022_17 = format_Em2022_17.readFeatures(json_Em2022_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Em2022_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Em2022_17.addFeatures(features_Em2022_17);
var lyr_Em2022_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Em2022_17, 
                style: style_Em2022_17,
                interactive: true,
                title: '<img src="styles/legend/Em2022_17.png" /> Em-2022'
            });
var format_Aforo2018GiSystems_18 = new ol.format.GeoJSON();
var features_Aforo2018GiSystems_18 = format_Aforo2018GiSystems_18.readFeatures(json_Aforo2018GiSystems_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aforo2018GiSystems_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aforo2018GiSystems_18.addFeatures(features_Aforo2018GiSystems_18);
var lyr_Aforo2018GiSystems_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aforo2018GiSystems_18, 
                style: style_Aforo2018GiSystems_18,
                interactive: true,
                title: '<img src="styles/legend/Aforo2018GiSystems_18.png" /> Aforo2018GiSystems'
            });
var format_Tumulos2013_19 = new ol.format.GeoJSON();
var features_Tumulos2013_19 = format_Tumulos2013_19.readFeatures(json_Tumulos2013_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tumulos2013_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tumulos2013_19.addFeatures(features_Tumulos2013_19);
var lyr_Tumulos2013_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tumulos2013_19, 
                style: style_Tumulos2013_19,
                interactive: true,
                title: '<img src="styles/legend/Tumulos2013_19.png" /> Tumulos2013'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoad_2.setVisible(true);lyr_MunicipiosActualizadosLL_3.setVisible(false);lyr_Poblacion_LL_4.setVisible(false);lyr_Departamentos_GTM_5.setVisible(true);lyr_Alcantarilla2013_6.setVisible(false);lyr_Pavimentada2022_7.setVisible(true);lyr_Terraceria2022_8.setVisible(true);lyr_DGC2022_9.setVisible(true);lyr_FSS2022_10.setVisible(true);lyr_Kilometraje_11.setVisible(false);lyr_CPe2022_12.setVisible(true);lyr_OCe2022_13.setVisible(true);lyr_Pe2022_14.setVisible(true);lyr_CP2022_15.setVisible(true);lyr_Be2022_16.setVisible(true);lyr_Em2022_17.setVisible(true);lyr_Aforo2018GiSystems_18.setVisible(false);lyr_Tumulos2013_19.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_GoogleRoad_2,lyr_MunicipiosActualizadosLL_3,lyr_Poblacion_LL_4,lyr_Departamentos_GTM_5,lyr_Alcantarilla2013_6,lyr_Pavimentada2022_7,lyr_Terraceria2022_8,lyr_DGC2022_9,lyr_FSS2022_10,lyr_Kilometraje_11,lyr_CPe2022_12,lyr_OCe2022_13,lyr_Pe2022_14,lyr_CP2022_15,lyr_Be2022_16,lyr_Em2022_17,lyr_Aforo2018GiSystems_18,lyr_Tumulos2013_19];
lyr_MunicipiosActualizadosLL_3.set('fieldAliases', {'COD_DEPT_1': 'COD_DEPT_1', 'COD_MUNI_1': 'COD_MUNI_1', 'NOMBRE_1': 'NOMBRE_1', 'DEPTO_1': 'DEPTO_1', 'AREA_KMÂ²_': 'AREA_KMÂ²_', 'PERIMETR_1': 'PERIMETR_1', });
lyr_Poblacion_LL_4.set('fieldAliases', {'codigo': 'codigo', 'cod_censo': 'cod_censo', 'departamen': 'departamen', 'municipio': 'municipio', 'lugar_pobl': 'lugar_pobl', 'categoria': 'categoria', });
lyr_Departamentos_GTM_5.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Cod_Depto': 'Cod_Depto', 'CODIGO': 'CODIGO', });
lyr_Alcantarilla2013_6.set('fieldAliases', {'RUTA': 'RUTA', 'TRAMO': 'TRAMO', 'ESTADO_ENT': 'ESTADO_ENT', 'ENTRADA_CA': 'ENTRADA_CA', 'LONGITUD_T': 'LONGITUD_T', 'ESTACIONAM': 'ESTACIONAM', 'TIPO_MATER': 'TIPO_MATER', 'ESTADO_CAB': 'ESTADO_CAB', 'SALIDA_CAB': 'SALIDA_CAB', 'ESTADO_TUB': 'ESTADO_TUB', 'PORCENTAJE': 'PORCENTAJE', });
lyr_Pavimentada2022_7.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'BACHEO2022': 'BACHEO2022', 'NOGBACHEO2': 'NOGBACHEO2', 'EMPRESABAC': 'EMPRESABAC', 'LIMPIEZA20': 'LIMPIEZA20', 'NOGLIMPIEZ': 'NOGLIMPIEZ', 'EMPRESALIM': 'EMPRESALIM', 'SUPER2022': 'SUPER2022', 'REPRESENTA': 'REPRESENTA', 'NOGSUPER20': 'NOGSUPER20', 'GUATECOMBA': 'GUATECOMBA', 'GUATECOMLI': 'GUATECOMLI', 'GUATECOMSU': 'GUATECOMSU', 'DRIVE': 'DRIVE', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', });
lyr_Terraceria2022_8.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'TERRA2022': 'TERRA2022', 'NOGTERRA': 'NOGTERRA', 'SUPER2022': 'SUPER2022', 'NOGSUPER': 'NOGSUPER', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', 'GUATECOMPT': 'GUATECOMPT', 'GUATECOMPR': 'GUATECOMPR', 'DRIVE': 'DRIVE', });
lyr_DGC2022_9.set('fieldAliases', {'RUTA': 'RUTA', 'PROYECTO_D': 'PROYECTO_D', 'EMPRESA_DG': 'EMPRESA_DG', 'CONTRATO_D': 'CONTRATO_D', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'NOG_DGC': 'NOG_DGC', 'GUATECOMPR': 'GUATECOMPR', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', });
lyr_FSS2022_10.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'LIMPIEZA': 'LIMPIEZA', 'SUPERVISIO': 'SUPERVISIO', 'TELEFONO_S': 'TELEFONO_S', 'NOG_LIMPIE': 'NOG_LIMPIE', 'NOG_SUPER': 'NOG_SUPER', 'SNIP_FSS': 'SNIP_FSS', 'COMUNIDAD': 'COMUNIDAD', 'DOCUMENTO': 'DOCUMENTO', 'NOG_FSS': 'NOG_FSS', 'MUNICIPIO': 'MUNICIPIO', 'EMPRESA_LI': 'EMPRESA_LI', 'NOMBRE_SUP': 'NOMBRE_SUP', 'TELEFONO_1': 'TELEFONO_1', 'NOG_LIMPI1': 'NOG_LIMPI1', 'GUATECOM_L': 'GUATECOM_L', 'GUATECOM_S': 'GUATECOM_S', 'PROYECTO_F': 'PROYECTO_F', 'EMPRESA_FS': 'EMPRESA_FS', 'DEPARTAMEN': 'DEPARTAMEN', });
lyr_Kilometraje_11.set('fieldAliases', {'Altitude': 'Altitude', 'Descriptio': 'Descriptio', 'Name1': 'Name1', 'Position': 'Position', 'Position X': 'Position X', 'Position Y': 'Position Y', 'Visible': 'Visible', 'field_8': 'field_8', });
lyr_CPe2022_12.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', '_DECRETO21': '_DECRETO21', });
lyr_OCe2022_13.set('fieldAliases', {});
lyr_Pe2022_14.set('fieldAliases', {});
lyr_CP2022_15.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'CP_2022': 'CP_2022', 'NOG': 'NOG', 'DEPARTAMEN': 'DEPARTAMEN', 'LONGITUD': 'LONGITUD', 'SUPER': 'SUPER', });
lyr_Be2022_16.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'PROYECTO': 'PROYECTO', 'NOG': 'NOG', 'DEPARTAMEN': 'DEPARTAMEN', });
lyr_Em2022_17.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'PROYECTO': 'PROYECTO', 'NOG': 'NOG', 'DEPARTAMEN': 'DEPARTAMEN', });
lyr_Aforo2018GiSystems_18.set('fieldAliases', {'Proyecto': 'Proyecto', 'Est': 'Est', 'Tipo': 'Tipo', 'Ubicación': 'Ubicación', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Ruta': 'Ruta', 'Departamen': 'Departamen', 'Descripci': 'Descripci', 'TPD': 'TPD', });
lyr_Tumulos2013_19.set('fieldAliases', {'Ruta': 'Ruta', 'descripcio': 'descripcio', 'Ancho': 'Ancho', 'Largo': 'Largo', 'estacion': 'estacion', 'Tipo': 'Tipo', 'Material': 'Material', 'longitud': 'longitud', 'latitud': 'latitud', });
lyr_MunicipiosActualizadosLL_3.set('fieldImages', {'COD_DEPT_1': 'TextEdit', 'COD_MUNI_1': 'TextEdit', 'NOMBRE_1': 'TextEdit', 'DEPTO_1': 'TextEdit', 'AREA_KMÂ²_': 'TextEdit', 'PERIMETR_1': 'TextEdit', });
lyr_Poblacion_LL_4.set('fieldImages', {'codigo': 'TextEdit', 'cod_censo': 'TextEdit', 'departamen': 'TextEdit', 'municipio': 'TextEdit', 'lugar_pobl': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Departamentos_GTM_5.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Cod_Depto': 'Range', 'CODIGO': 'Range', });
lyr_Alcantarilla2013_6.set('fieldImages', {'RUTA': 'TextEdit', 'TRAMO': 'TextEdit', 'ESTADO_ENT': 'TextEdit', 'ENTRADA_CA': 'TextEdit', 'LONGITUD_T': 'TextEdit', 'ESTACIONAM': 'TextEdit', 'TIPO_MATER': 'TextEdit', 'ESTADO_CAB': 'TextEdit', 'SALIDA_CAB': 'TextEdit', 'ESTADO_TUB': 'TextEdit', 'PORCENTAJE': 'TextEdit', });
lyr_Pavimentada2022_7.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'BACHEO2022': 'TextEdit', 'NOGBACHEO2': 'TextEdit', 'EMPRESABAC': 'TextEdit', 'LIMPIEZA20': 'TextEdit', 'NOGLIMPIEZ': 'TextEdit', 'EMPRESALIM': 'TextEdit', 'SUPER2022': 'TextEdit', 'REPRESENTA': 'TextEdit', 'NOGSUPER20': 'TextEdit', 'GUATECOMBA': 'TextEdit', 'GUATECOMLI': 'TextEdit', 'GUATECOMSU': 'TextEdit', 'DRIVE': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', });
lyr_Terraceria2022_8.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'TERRA2022': 'TextEdit', 'NOGTERRA': 'TextEdit', 'SUPER2022': 'TextEdit', 'NOGSUPER': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', 'GUATECOMPT': 'TextEdit', 'GUATECOMPR': 'TextEdit', 'DRIVE': 'TextEdit', });
lyr_DGC2022_9.set('fieldImages', {'RUTA': 'TextEdit', 'PROYECTO_D': 'TextEdit', 'EMPRESA_DG': 'TextEdit', 'CONTRATO_D': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'NOG_DGC': 'TextEdit', 'GUATECOMPR': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_FSS2022_10.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'LIMPIEZA': 'TextEdit', 'SUPERVISIO': 'TextEdit', 'TELEFONO_S': 'TextEdit', 'NOG_LIMPIE': 'TextEdit', 'NOG_SUPER': 'TextEdit', 'SNIP_FSS': 'TextEdit', 'COMUNIDAD': 'TextEdit', 'DOCUMENTO': 'TextEdit', 'NOG_FSS': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'EMPRESA_LI': 'TextEdit', 'NOMBRE_SUP': 'TextEdit', 'TELEFONO_1': 'TextEdit', 'NOG_LIMPI1': 'TextEdit', 'GUATECOM_L': 'TextEdit', 'GUATECOM_S': 'TextEdit', 'PROYECTO_F': 'TextEdit', 'EMPRESA_FS': 'TextEdit', 'DEPARTAMEN': 'TextEdit', });
lyr_Kilometraje_11.set('fieldImages', {'Altitude': 'TextEdit', 'Descriptio': 'TextEdit', 'Name1': 'TextEdit', 'Position': 'TextEdit', 'Position X': 'TextEdit', 'Position Y': 'TextEdit', 'Visible': 'TextEdit', 'field_8': 'TextEdit', });
lyr_CPe2022_12.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', '_DECRETO21': 'TextEdit', });
lyr_OCe2022_13.set('fieldImages', {});
lyr_Pe2022_14.set('fieldImages', {});
lyr_CP2022_15.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'CP_2022': 'TextEdit', 'NOG': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'LONGITUD': 'TextEdit', 'SUPER': 'TextEdit', });
lyr_Be2022_16.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'PROYECTO': 'TextEdit', 'NOG': 'TextEdit', 'DEPARTAMEN': 'TextEdit', });
lyr_Em2022_17.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'PROYECTO': 'TextEdit', 'NOG': 'TextEdit', 'DEPARTAMEN': 'TextEdit', });
lyr_Aforo2018GiSystems_18.set('fieldImages', {'Proyecto': 'TextEdit', 'Est': 'TextEdit', 'Tipo': 'TextEdit', 'Ubicación': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Ruta': 'TextEdit', 'Departamen': 'TextEdit', 'Descripci': 'TextEdit', 'TPD': 'TextEdit', });
lyr_Tumulos2013_19.set('fieldImages', {'Ruta': 'TextEdit', 'descripcio': 'TextEdit', 'Ancho': 'TextEdit', 'Largo': 'TextEdit', 'estacion': 'TextEdit', 'Tipo': 'TextEdit', 'Material': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', });
lyr_MunicipiosActualizadosLL_3.set('fieldLabels', {'COD_DEPT_1': 'inline label', 'COD_MUNI_1': 'inline label', 'NOMBRE_1': 'inline label', 'DEPTO_1': 'inline label', 'AREA_KMÂ²_': 'inline label', 'PERIMETR_1': 'inline label', });
lyr_Poblacion_LL_4.set('fieldLabels', {'codigo': 'no label', 'cod_censo': 'no label', 'departamen': 'no label', 'municipio': 'no label', 'lugar_pobl': 'no label', 'categoria': 'no label', });
lyr_Departamentos_GTM_5.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'Cod_Depto': 'inline label', 'CODIGO': 'inline label', });
lyr_Alcantarilla2013_6.set('fieldLabels', {'RUTA': 'no label', 'TRAMO': 'no label', 'ESTADO_ENT': 'no label', 'ENTRADA_CA': 'no label', 'LONGITUD_T': 'no label', 'ESTACIONAM': 'no label', 'TIPO_MATER': 'no label', 'ESTADO_CAB': 'no label', 'SALIDA_CAB': 'no label', 'ESTADO_TUB': 'no label', 'PORCENTAJE': 'no label', });
lyr_Pavimentada2022_7.set('fieldLabels', {'RUTA': 'inline label', 'DESCRIPCIO': 'inline label', 'LONGITUD': 'inline label', 'BACHEO2022': 'inline label', 'NOGBACHEO2': 'inline label', 'EMPRESABAC': 'inline label', 'LIMPIEZA20': 'inline label', 'NOGLIMPIEZ': 'inline label', 'EMPRESALIM': 'inline label', 'SUPER2022': 'inline label', 'REPRESENTA': 'inline label', 'NOGSUPER20': 'inline label', 'GUATECOMBA': 'inline label', 'GUATECOMLI': 'inline label', 'GUATECOMSU': 'inline label', 'DRIVE': 'inline label', 'DEPARTAMEN': 'inline label', 'MUNICIPIO': 'inline label', 'UBG': 'inline label', });
lyr_Terraceria2022_8.set('fieldLabels', {'RUTA': 'inline label', 'DESCRIPCIO': 'inline label', 'LONGITUD': 'inline label', 'TERRA2022': 'inline label', 'NOGTERRA': 'inline label', 'SUPER2022': 'inline label', 'NOGSUPER': 'inline label', 'DEPARTAMEN': 'inline label', 'MUNICIPIO': 'inline label', 'UBG': 'inline label', 'GUATECOMPT': 'inline label', 'GUATECOMPR': 'inline label', 'DRIVE': 'inline label', });
lyr_DGC2022_9.set('fieldLabels', {'RUTA': 'inline label', 'PROYECTO_D': 'inline label', 'EMPRESA_DG': 'inline label', 'CONTRATO_D': 'inline label', 'DESCRIPCIO': 'inline label', 'LONGITUD': 'inline label', 'NOG_DGC': 'inline label', 'GUATECOMPR': 'inline label', 'DEPARTAMEN': 'inline label', 'MUNICIPIO': 'inline label', });
lyr_FSS2022_10.set('fieldLabels', {'RUTA': 'inline label', 'DESCRIPCIO': 'inline label', 'LONGITUD': 'inline label', 'LIMPIEZA': 'inline label', 'SUPERVISIO': 'inline label', 'TELEFONO_S': 'inline label', 'NOG_LIMPIE': 'inline label', 'NOG_SUPER': 'inline label', 'SNIP_FSS': 'inline label', 'COMUNIDAD': 'inline label', 'DOCUMENTO': 'inline label', 'NOG_FSS': 'inline label', 'MUNICIPIO': 'inline label', 'EMPRESA_LI': 'inline label', 'NOMBRE_SUP': 'inline label', 'TELEFONO_1': 'inline label', 'NOG_LIMPI1': 'inline label', 'GUATECOM_L': 'inline label', 'GUATECOM_S': 'inline label', 'PROYECTO_F': 'inline label', 'EMPRESA_FS': 'inline label', 'DEPARTAMEN': 'inline label', });
lyr_Kilometraje_11.set('fieldLabels', {'Altitude': 'no label', 'Descriptio': 'no label', 'Name1': 'no label', 'Position': 'no label', 'Position X': 'no label', 'Position Y': 'no label', 'Visible': 'no label', 'field_8': 'no label', });
lyr_CPe2022_12.set('fieldLabels', {'RUTA': 'inline label', 'DESCRIPCIO': 'inline label', 'LONGITUD': 'inline label', '_DECRETO21': 'inline label', });
lyr_OCe2022_13.set('fieldLabels', {});
lyr_Pe2022_14.set('fieldLabels', {});
lyr_CP2022_15.set('fieldLabels', {'RUTA': 'inline label', 'DESCRIPCIO': 'inline label', 'CP_2022': 'inline label', 'NOG': 'inline label', 'DEPARTAMEN': 'inline label', 'LONGITUD': 'inline label', 'SUPER': 'inline label', });
lyr_Be2022_16.set('fieldLabels', {'RUTA': 'inline label', 'DESCRIPCIO': 'inline label', 'PROYECTO': 'inline label', 'NOG': 'inline label', 'DEPARTAMEN': 'inline label', });
lyr_Em2022_17.set('fieldLabels', {'RUTA': 'inline label', 'DESCRIPCIO': 'inline label', 'PROYECTO': 'inline label', 'NOG': 'inline label', 'DEPARTAMEN': 'inline label', });
lyr_Aforo2018GiSystems_18.set('fieldLabels', {'Proyecto': 'inline label', 'Est': 'inline label', 'Tipo': 'inline label', 'Ubicación': 'inline label', 'Longitud': 'inline label', 'Latitud': 'inline label', 'Ruta': 'inline label', 'Departamen': 'inline label', 'Descripci': 'inline label', 'TPD': 'inline label', });
lyr_Tumulos2013_19.set('fieldLabels', {'Ruta': 'inline label', 'descripcio': 'inline label', 'Ancho': 'inline label', 'Largo': 'inline label', 'estacion': 'inline label', 'Tipo': 'inline label', 'Material': 'inline label', 'longitud': 'inline label', 'latitud': 'inline label', });
lyr_Tumulos2013_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});