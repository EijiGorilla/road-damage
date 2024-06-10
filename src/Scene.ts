import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Home from '@arcgis/core/widgets/Home';
import Expand from '@arcgis/core/widgets/Expand';
import Popup from '@arcgis/core/widgets/Popup';

import SceneLayer from '@arcgis/core/layers/SceneLayer';
import TileLayer from '@arcgis/core/layers/TileLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import {
  road_network_layer,
  express_road_layer,
  municipal_bdry_layer,
  damage_points_layer,
} from './layers';
import SolidEdges3D from '@arcgis/core/symbols/edges/SolidEdges3D';
import { FillSymbol3DLayer, MeshSymbol3D } from '@arcgis/core/symbols';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';

export const map = new Map({
  basemap: {
    baseLayers: [
      new TileLayer({
        portalItem: {
          id: '1b243539f4514b6ba35e7d995890db1d', // world hillshade
        },
      }),
      new VectorTileLayer({
        portalItem: {
          id: '0a0d74b5fbc0431fa0f6c938d0b04505', // community style vector tiles
        },
        blendMode: 'multiply',
      }),
    ],
  },
  ground: 'world-elevation',
  // optimizePanAnimation: false,
});
// map.ground?.surfaceColor = '#004C73';

export const view = new SceneView({
  container: undefined,
  map,
  center: [121.05, 14.4],
  zoom: 12,
  viewingMode: 'local',
  environment: {
    background: {
      type: 'color', // autocasts as new ColorBackground()
      color: [0, 0, 0, 1],
    },
    // disable stars
    starsEnabled: true,

    //disable atmosphere
    atmosphereEnabled: false,
  },
  camera: {
    position: {
      x: 120.9777186, //120.9777186,
      y: 14.5600295, //14.5600295,
      z: 2000,
    },
    tilt: 65,
    heading: 0,
  },
  popup: new Popup({
    defaultPopupTemplateEnabled: false,
    dockEnabled: true,
  }),
});

view.popup.set('dockOptions', {
  breakpoint: false,
  buttonEnabled: false,
  position: 'top-right',
});
// Basemap Toggle
const toggle = new BasemapToggle({
  view: view,
  nextBasemap: 'hybrid',
});
view.ui.add(toggle, 'top-right');

// Open Street Map 3D buildings
// OpenStreetMap 3D Buildings
let osmSymbol = new MeshSymbol3D({
  symbolLayers: [
    new FillSymbol3DLayer({
      material: {
        color: [74, 80, 87, 0.5],
        colorMixMode: 'replace',
      },
      edges: new SolidEdges3D({
        color: [225, 225, 225, 0.5],
      }),
    }),
  ],
});

const osm3d_renderer = new SimpleRenderer({
  symbol: osmSymbol,
});

var osm3D = new SceneLayer({
  portalItem: {
    id: 'ca0470dbbddb4db28bad74ed39949e25',
  },
  title: 'OpenStreetMap 3D Buildings',
  popupEnabled: false,
  renderer: osm3d_renderer,
});
map.add(osm3D);
osm3D.listMode = 'hide';

map.add(road_network_layer);
map.add(express_road_layer);
map.add(municipal_bdry_layer);
map.add(damage_points_layer);

const lookAround = () => {
  if (!view.interacting) {
    const camera = view.camera?.clone();
    camera.heading += 0.05;
    view.goTo(camera, { animate: false });
    requestAnimationFrame(lookAround);
  }
};
lookAround();

const sources = [
  {
    layer: damage_points_layer,
    searchFields: ['SECTION_ID'],
    displayField: 'SECTION_ID',
    exactMatch: false,
    outFields: ['SECTION_ID'],
    name: 'Section ID',
    placeholder: 'Section ID',
  },
];

const searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'Section ID',
  includeDefaultSources: false,
  container: undefined,
  sources: sources,
});

// export const searchExpand = new Expand({
//   view: view,
//   content: searchWidget,
//   expandIconClass: 'esri-icon-search',
//   group: 'top-right',
// });

view.ui.add(searchWidget, { position: 'top-left' });

const homeWidget = new Home({
  view,
});
view.ui.add(homeWidget, { position: 'top-left' });

export const layerList = new LayerList({
  view: view,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    item.title === 'Expressway' ? (item.visible = false) : (item.visible = true);
  },
});

export const layerListExpand = new Expand({
  view,
  content: layerList,
  expandIcon: 'map-contents',
  group: 'bottom-left',
});

view.ui.add(layerListExpand, { position: 'bottom-left' });
