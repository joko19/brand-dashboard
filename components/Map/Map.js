import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
// import './Map.css';
import 'leaflet/dist/leaflet.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { features } from './../../data/indonesia.json'


const Map = () => {
    const [onselect, setOnselect] = useState({});
    /* function determining what should happen onmouseover, this function updates our state*/
    const highlightFeature = (e => {
        var layer = e.target;
        const { County, Total, Male, Female, Intersex, Desnity } = e.target.feature.properties;
        setOnselect({
            county: County,
            total: Total,
            male: Male,
            female: Female,
            intersex: Intersex,
            density: Desnity
        });
        layer.setStyle({
            weight: 1,
            color: "black",
            fillOpacity: 1
        });
    });
    /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
    const resetHighlight = (e => {
        setOnselect({});
        e.target.setStyle(style(e.target.feature));
    })
    /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
     highlightFeature and resetHighlight*/
    const onEachFeature = (feature, layer) => {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
        });
    }

    const mapPolygonColorToDensity = (density => {
        return density > 3023
            ? '#a50f15'
            : density > 676
                ? '#de2d26'
                : density > 428
                    ? '#fb6a4a'
                    : density > 236
                        ? '#fc9272'
                        : density > 23
                            ? '#fcbba1'
                            : '#fee5d9';
    })
    const style = (feature => {
        return ({
            fillColor: mapPolygonColorToDensity(feature.properties.Desnity),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '2',
            fillOpacity: 0.5
        });
    });
    const mapStyle = {
        height: '56vh',
        width: '100%',
        margin: '0 auto',
    }
    const feature = features.map(feature => {
        return (feature);
    });
    return (
        <div className='container'>
            <div className="">
                <div className="">
                    <MapContainer center={[-2.548926, 118.0148634]}
                        zoom={4} scrollWheelZoom={true} style={mapStyle}>
                        <TileLayer
                            attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                        />
                        {features && (
                            <GeoJSON data={features}
                            />)}
                    </MapContainer>
                </div>
            </div>
        </div>

    )
}
export default Map;