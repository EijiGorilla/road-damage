import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import './App.css';
import {
  TextSymbol3DLayer,
  LabelSymbol3D,
  SimpleLineSymbol,
  PointSymbol3D,
  IconSymbol3DLayer,
} from '@arcgis/core/symbols';
import CustomContent from '@arcgis/core/popup/content/CustomContent';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import {
  damage_points_rating,
  damage_points_symbol_ref,
  repaired_status,
  road_class,
  road_colors,
  thousands_separators,
} from './Query';

/* Major Road Network Layer */
const uniqueValueInfos_road = road_class.map((road: any, index: any) => {
  return Object.assign({
    value: road,
    symbol: {
      type: 'simple-line',
      color: road_colors[index],
      width: '3px',
      sytle: 'solid',
    },
  });
});

const road_network_renderer = new UniqueValueRenderer({
  field: 'ROAD_SEC_CLASS',
  uniqueValueInfos: uniqueValueInfos_road,
});

export const road_network_layer = new FeatureLayer({
  portalItem: {
    id: '24b524e951ac478ca42571ce7558dbb3',
  },
  title: 'Major Road',
  popupEnabled: false,
  layerId: 2,
  elevationInfo: {
    mode: 'on-the-ground',
  },
  renderer: road_network_renderer,
  minScale: 1200000,
  maxScale: 0,
});

/* Expressway */
const express_renderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: road_colors[3],
    width: '3px',
    style: 'solid',
  }),
});

export const express_road_layer = new FeatureLayer({
  portalItem: {
    id: '24b524e951ac478ca42571ce7558dbb3',
  },
  title: 'Expressway',
  layerId: 3,
  elevationInfo: {
    mode: 'on-the-ground',
  },
  renderer: express_renderer,
  popupEnabled: false,
  minScale: 1200000,
  maxScale: 0,
});

/* Municipality Boundary */
const municipal_bdry_label = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: 'white',
        },
        size: 10,
        halo: {
          color: 'black',
          size: 1,
        },
        font: {
          family: 'Ubuntu Mono',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 100,
      maxWorldLength: 600,
      minWorldLength: 300,
    },
    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: 'white',
      size: 0.7,
      border: {
        color: 'grey',
      },
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.MUNICIPALITY',
    //value: "{TEXTSTRING}"
  },
});

const municipal_bdry_renderer = new SimpleRenderer({
  symbol: new SimpleFillSymbol({
    color: [0, 0, 0, 0],
    style: 'solid',
  }),
});

export const municipal_bdry_layer = new FeatureLayer({
  portalItem: {
    id: '24b524e951ac478ca42571ce7558dbb3',
  },
  title: 'Municipal Boundary',
  layerId: 4,
  renderer: municipal_bdry_renderer,
  labelingInfo: [municipal_bdry_label],
  definitionExpression: 'Filter = 1',
  popupEnabled: false,
});

const damage_points_voffset = {
  screenLength: 100,
  maxWorldLength: 700,
  minWorldLength: 100,
};

const damage_points_uniqueValueInfos = damage_points_rating.map((rating: any, index: any) => {
  return Object.assign({
    value: index + 1,
    label: rating,
    symbol: new PointSymbol3D({
      symbolLayers: [
        new IconSymbol3DLayer({
          resource: {
            href: damage_points_symbol_ref[index],
          },
          size: 30,
          outline: {
            color: 'white',
            size: 2,
          },
        }),
      ],
      verticalOffset: damage_points_voffset,
      callout: {
        type: 'line', // autocasts as new LineCallout3D()
        color:
          rating === 'Major'
            ? '#FF0000'
            : rating === 'Moderate'
              ? '#FFAA00'
              : rating === 'Minor'
                ? '#FFFF00'
                : rating === 'Basic'
                  ? '#00B050'
                  : '#ffffff',
        size: 1.5,
        border: {
          color:
            rating === 'Major'
              ? '#FF0000'
              : rating === 'Moderate'
                ? '#FFAA00'
                : rating === 'Minor'
                  ? '#FFFF00'
                  : rating === 'Basic'
                    ? '#00B050'
                    : '#ffffff',
        },
      },
    }),
  });
});

const damage_points_renderer = new UniqueValueRenderer({
  field: 'Rating',
  uniqueValueInfos: damage_points_uniqueValueInfos,
});

let customPopupContent = new CustomContent({
  // outFields: ['*'],
  creator: (event: any) => {
    // const street_id = event.graphic.attributes.SECTION_ID;
    // const street_class = event.graphic.attributes.ROAD_SEC_CLASS;
    // const street_name = event.graphic.attributes.ROAD_NAME;
    // const repair_cost = event.graphic.attributes.Cost;
    // const repair_status = event.graphic.attributs.Repair_Status;
    const rating = event.graphic.attributes.Rating;

    const image = document.createElement('img');
    image.src =
      rating === 1
        ? 'https://EijiGorilla.github.io/Symbols/Warning Symbol/Basic.png'
        : rating === 2
          ? 'https://EijiGorilla.github.io/Symbols/Warning Symbol/Minor.png'
          : rating === 3
            ? 'https://EijiGorilla.github.io/Symbols/Warning Symbol/Moderate.png'
            : rating === 4
              ? 'https://EijiGorilla.github.io/Symbols/Warning Symbol/Major.png'
              : 'None';
    image.width = 35;

    return image;
  },
});

const contentWidget = new CustomContent({
  outFields: ['*'],
  creator: (event: any) => {
    const street_id = event.graphic.attributes.SECTION_ID;
    const street_class = event.graphic.attributes.ROAD_SEC_CLASS;
    const street_name = event.graphic.attributes.ROAD_NAME;
    const repair_cost = event.graphic.attributes.Cost;
    const repair_cost_f = thousands_separators(repair_cost);
    const repair_status_val = event.graphic.attributes.Repair_Status;
    const repair_status = repaired_status[repair_status_val - 1];
    return `<table><tr><td>Street ID: </td><td><b>${street_id}</b></td></tr>
    <tr><td>Street Class: </td><td>${street_class}</td></tr>
    <tr><td>Street Name: </td><td>${street_name}</td></tr>
<tr><td>Repair Status: </td><td>${repair_status}</td></tr>
<tr><td>Repair Cost: </td><td>${repair_cost_f} $$</td></tr>
    </table>`;
  },
});

const templatePopup = new PopupTemplate({
  outFields: ['*'],
  title: '<b>{Rating}</b> damage',
  lastEditInfoEnabled: false,
  content: [customPopupContent, contentWidget],
});

export const damage_points_layer = new FeatureLayer({
  portalItem: {
    id: '24b524e951ac478ca42571ce7558dbb3',
  },

  title: 'Damage Ratings of Road',
  layerId: 0,
  renderer: damage_points_renderer,
  outFields: ['ROAD_NAME', 'SECTION_ID', 'ROAD_SEC_CLASS', 'Rating'],
  minScale: 1200000,
  maxScale: 0,
  // popupTemplate: {
  //   title: '<b>{Rating} damage</b>',
  //   lastEditInfoEnabled: false,
  //   returnGeometry: true,
  //   content: [
  //     {
  //       type: 'fields',
  //       fieldInfos: [
  //         {
  //           fieldName: 'Section ID',
  //           label: 'ID Number',
  //         },
  //         {
  //           fieldName: 'Municipality',
  //           label: 'Municipality',
  //         },
  //         {
  //           fieldName: 'Cost',
  //           label: 'Repaire Cost',
  //         },
  //         {
  //           fieldName: 'Repair_Status',
  //           label: 'Repaire Status',
  //         },
  //         {
  //           fieldName: 'Comment',
  //           label: 'Comment',
  //         },
  //       ],
  //     },
  //   ],
  // },
});

damage_points_layer.popupTemplate = templatePopup;
