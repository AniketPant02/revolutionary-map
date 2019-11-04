import React from 'react';
import DeckGL from '@deck.gl/react';
import { ScatterplotLayer, TextLayer, LineLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import "./Map.css";

// data to be used for Scatterplotlayer
import macias_data from './underdogs_locations.json';
import macias_path_data from './underdogs_paths.json';
import villa_path_data from './villa_paths.json';
import obregon_path_data from './obregon_paths.json';
import obregon_location_data from './obregon_locations.json';
import villa_location_data from './villa_locations.json';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoicGFudDIwMDIiLCJhIjoiY2prenlwb2ZtMHlnMjNxbW1ld3VxYWZ4cCJ9.rOb8DhCzsysBIw69MxyWKg";

// Initial viewport settings
const initialViewState = {
    longitude: -103.160792,
    latitude: 21.101122,
    zoom: 6.5,
    pitch: 0,
    bearing: 0
};


class Map extends React.Component {

    _renderTooltip() {
        const { path, hoveredObject, pointerX, pointerY, hoverType, human } = this.state || {};


        var message = [];
        try {
            if (human === "macias") {
                if (hoverType === "path") {
                    message.push("Location Order: " + hoveredObject.LOCATION_ORDER);
                    message.push(<br></br>);
                    message.push("On the path for: " + hoveredObject.LOCATION_NAME);
                    message.push(<br></br>);
                    message.push("Part, Chapter: " + hoveredObject.PART + ", " + hoveredObject.CHAPTER);
                    message.push(<br></br>);
                }
                else if (hoverType === "point") {
                    message.push("Location: " + hoveredObject.LOCATION_NAME);
                    message.push(<br></br>);
                    message.push("Location Order: " + hoveredObject.LOCATION_ORDER);
                    message.push(<br></br>);
                    message.push("Part, Chapter: " + hoveredObject.PART + ", " + hoveredObject.CHAPTER);
                    message.push(<br></br>);
                    message.push("Quote: " + hoveredObject.QUOTE);
                    message.push(<br></br>);
                    message.push("Commentary: " + hoveredObject.COMMENTARY);
                    message.push(<br></br>);
                }
            }
            else if (human === "obregon" || human === "villa") {
                if (hoverType === "path") {
                    message.push("On the path for: " + hoveredObject.LOCATION_NAME);
                    message.push(<br></br>);
                    message.push("Location Order: " + hoveredObject.LOCATION_ORDER);
                    message.push(<br></br>);
                }
                else {
                    message.push("Location Order: " + hoveredObject.LOCATION_ORDER);
                    message.push(<br></br>);
                    message.push("Location: " + hoveredObject.LOCATION_NAME);
                    message.push(<br></br>);
                }

            }

        }
        catch{

        }
        var toReturn = hoveredObject && (
            <div className="tooltip" style={{ position: 'absolute', zIndex: 1, pointerEvents: 'none', left: pointerX, top: pointerY }}>
                {message}
            </div>
        )

        return toReturn;
    }

    render() {
        const layers = [
            new LineLayer({
                id: 'villa-path',
                data: villa_path_data,
                opacity: 1.0,
                pickable: true,
                getSourcePosition: d => d.start,
                getTargetPosition: d => d.end,
                getColor: [8, 138, 3],
                getWidth: 5.5,
                onHover: info => this.setState({
                    hoveredObject: info.object,
                    pointerX: info.x,
                    pointerY: info.y,
                    hoverType: "path",
                    human: "villa"
                })
            }),
            new LineLayer({
                id: 'obregon-path',
                data: obregon_path_data,
                opacity: 1.0,
                pickable: true,
                getSourcePosition: d => d.start,
                getTargetPosition: d => d.end,
                getColor: [0, 0, 0],
                getWidth: 5.5,
                onHover: info => this.setState({
                    hoveredObject: info.object,
                    pointerX: info.x,
                    pointerY: info.y,
                    hoverType: "path",
                    human: "obregon"
                })
            }),
            new ScatterplotLayer({
                id: 'villa-locations',
                data: villa_location_data,
                pickable: true,
                opacity: 0.4,
                radiusScale: 15,
                radiusMinPixels: 10,
                radiusMaxPixels: 20,
                getPosition: d => d.coordinates,
                getFillColor: d => [8, 138, 3],
                onHover: info => this.setState({
                    hoveredObject: info.object,
                    pointerX: info.x,
                    pointerY: info.y,
                    hoverType: "point",
                    human: "villa"
                })
            }),
            new ScatterplotLayer({
                id: 'obregon-locations',
                data: obregon_location_data,
                pickable: true,
                opacity: 0.4,
                radiusScale: 15,
                radiusMinPixels: 10,
                radiusMaxPixels: 20,
                getPosition: d => d.coordinates,
                getFillColor: d => [0, 0, 0],
                onHover: info => this.setState({
                    hoveredObject: info.object,
                    pointerX: info.x,
                    pointerY: info.y,
                    hoverType: "point",
                    human: "obregon"
                })
            }),
            new ScatterplotLayer({
                id: 'macias-locations',
                data: macias_data,
                pickable: true,
                opacity: 0.4,
                radiusScale: 15,
                radiusMinPixels: 10,
                radiusMaxPixels: 20,
                getPosition: d => d.coordinates,
                getFillColor: d => [6, 30, 138],
                onHover: info => this.setState({
                    hoveredObject: info.object,
                    pointerX: info.x,
                    pointerY: info.y,
                    hoverType: "point",
                    human: "macias"
                })
            }),
            new LineLayer({
                id: 'macias-path',
                data: macias_path_data,
                opacity: 1.0,
                pickable: true,
                getSourcePosition: d => d.start,
                getTargetPosition: d => d.end,
                getColor: [6, 30, 138],
                getWidth: 5.5,
                onHover: info => this.setState({
                    hoveredObject: info.object,
                    pointerX: info.x,
                    pointerY: info.y,
                    hoverType: "path",
                    human: "macias"
                })
            }),
            new TextLayer({
                id: 'obregon-locations-order-text',
                data: obregon_location_data,
                getPosition: d => d.coordinates,
                getText: d => d.LOCATION_ORDER,
                getTextAnchor: 'middle',
                getAlignmentBaseline: 'center',
                getSize: 30,
                getColor: [255, 255, 255]
            }),
            new TextLayer({
                id: 'villa-locations-order-text',
                data: villa_location_data,
                getPosition: d => d.coordinates,
                getText: d => d.LOCATION_ORDER,
                getTextAnchor: 'middle',
                getAlignmentBaseline: 'center',
                getSize: 30,
                getColor: [255, 255, 255]
            }),
            new TextLayer({
                id: 'macias-locations-order-text',
                data: macias_data,
                getPosition: d => d.coordinates,
                getText: d => d.LOCATION_ORDER,
                getTextAnchor: 'middle',
                getAlignmentBaseline: 'center',
                getSize: 30,
                getColor: [255, 255, 255]
            })
        ];

        return (
            <div className="Map">
                {/* Mr. Clayton, your comment is over there. */}
                <DeckGL
                    initialViewState={initialViewState}
                    controller={true}
                    layers={layers}
                >
                    <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
                        mapStyle="mapbox://styles/pant2002/ck2dfxbwb1dnj1cqlyrw13l9l" />
                    {this._renderTooltip()}
                </DeckGL>

                <div className="controlPanel" style={{ width: 200, height: 150, alignContent: "left", display: "flex", flexDirection: 'column', fontFamily: 'serif', fontSize: 13 }}>
                    <div className="macias" style={{ display: "flex", flexDirection: "row", marginLeft: -55, marginTop: -15 }}>
                        <div className="maciasText">   <pre>Macías    </pre></div>
                        <div className="maciasLegend">
                            <div className="line blue">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="villa" style={{ display: "flex", flexDirection: "row", marginLeft: -55 }}>
                        <div className="villaText">    <pre>Villa     </pre></div>
                        <div className="villaLegend">
                            <div className="line green">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="obregon" style={{ display: "flex", flexDirection: "row", marginLeft: -55 }}>
                        <div className="obregonText">  <pre>Obregon   </pre></div>
                        <div className="obregonLegend">
                            <div className="line black">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Map