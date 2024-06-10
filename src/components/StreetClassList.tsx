/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import { damage_points_layer } from '../layers';
import Query from '@arcgis/core/rest/support/Query';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-chip';
import '@esri/calcite-components/dist/components/calcite-avatar';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteList,
  CalciteListItem,
  CalciteChip,
  CalciteAvatar,
} from '@esri/calcite-components-react';
import { view } from '../Scene';
import { damage_points_rating } from '../Query';

// Zoom in to selected lot from expropriation list
let highlightSelect: any;
function resultClickHandler(event: any) {
  // const street_name_div = document.querySelector(`[id='street-name-list']`) as HTMLDivElement;
  // street_name_div.style.display = 'none';

  // damage_points_layer.visible = true;
  var queryExtent = new Query({
    objectIds: [event.target.value],
  });

  damage_points_layer.queryExtent(queryExtent).then((result: any) => {
    result.extent &&
      view.goTo({
        target: result.extent,
        speedFactor: 2,
        zoom: 17,
      });
  });

  const query = damage_points_layer.createQuery();
  query.where = 'OBJECTID = ' + event.target.value;

  // reference: https://developers.arcgis.com/javascript/latest/sample-code/popup-docking-position/
  damage_points_layer.queryFeatures(query).then((response: any) => {
    view.openPopup({
      features: [response.features[0]],
      // location: centerPoint,
    });
  });

  view.whenLayerView(damage_points_layer).then((layerView: any) => {
    highlightSelect && highlightSelect.remove();
    highlightSelect = layerView.highlight([event.target.value]);

    view.on('click', () => {
      layerView.filter = null;
      highlightSelect.remove();
    });
  });
}

function resultMouseOverHandler(event: any) {
  view.whenLayerView(damage_points_layer).then((layerView: any) => {
    highlightSelect && highlightSelect.remove();
    highlightSelect = layerView.highlight([event.target.value]);

    view.on('click', () => {
      layerView.filter = null;
      highlightSelect.remove();
    });
  });
}

const StreetClassList = () => {
  const [streetNameItem, setStreeNameItem] = useState<undefined | any>([]);

  useEffect(() => {
    setStreeNameItem([]);
    // var query = damage_points_layer.createQuery();
    // query.outFields = ['ROAD_NAME', 'Rating'];

    view.when(() => {
      view.whenLayerView(damage_points_layer).then(async (layerView: any) => {
        // await reactiveUtils.whenOnce(() => !layerView.updating);
        const query = layerView.createQuery();
        layerView.watch('updating', (val: any) => {
          query.geometry = layerView.view.extent;
          query.orderByFields = ['ROAD_SEC_CLASS'];
          if (!val) {
            layerView.queryFeatures(query).then((result: any) => {
              setStreeNameItem([]);
              result.features.map((feature: any, index: any) => {
                const attributes = feature.attributes;
                const road_name = attributes.ROAD_SEC_CLASS;
                const rating = attributes.Rating;
                const objectid = attributes.OBJECTID;
                const id = index;
                setStreeNameItem((prev: any) => [
                  ...prev,
                  {
                    id: id,
                    roadname: road_name,
                    rating: damage_points_rating[rating - 1],
                    objectid: objectid,
                  },
                ]);
              });
            });
          }
        });
      });
    });
  }, []);

  return (
    <>
      <CalciteList>
        {streetNameItem && // Extract unique objects from the array
          streetNameItem
            .filter(
              (ele: any, ind: any) =>
                ind === streetNameItem.findIndex((elem: any) => elem.objectid === ele.objectid),
            )
            .map((result: any, index: any) => {
              return (
                // need 'key' to upper div and inside CalciteListIte
                <CalciteListItem
                  key={result.id}
                  label={result.roadname}
                  // description={result.rating}
                  value={result.objectid}
                  selected={undefined}
                  onCalciteListItemSelect={(event: any) => resultClickHandler(event)}
                  onMouseOver={(event) => resultMouseOverHandler(event)}
                >
                  <CalciteChip value="" slot="content-end" appearance="outline-fill">
                    <CalciteAvatar slot="image" full-name={result.rating}></CalciteAvatar>
                    {result.rating}
                  </CalciteChip>
                </CalciteListItem>
              );
            })}
      </CalciteList>
    </>
  );
};

export default StreetClassList;
