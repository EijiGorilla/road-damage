import { view } from './Scene';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import { damage_points_layer } from './layers';
import * as am5 from '@amcharts/amcharts5';
// Major Road Network
export const road_colors = ['#dc4b00', '#3c6ccc', '#d9dc00', '#91d900'];
export const road_class = ['Primary', 'Secondary', 'Terriary'];

// Damage points
export const damage_points_rating = ['Basic', 'Minor', 'Moderate', 'Major'];
export const damage_points_symbol_ref = [
  'https://EijiGorilla.github.io/Symbols/Warning Symbol/Basic.png',
  'https://EijiGorilla.github.io/Symbols/Warning Symbol/Minor.png',
  'https://EijiGorilla.github.io/Symbols/Warning Symbol/Moderate.png',
  'https://EijiGorilla.github.io/Symbols/Warning Symbol/Major.png',
];
export const damage_points_rating_color = ['#00B050', '#FFFF00', '#FFAA00', '#FF0000'];

export const damage_points_rating_status = damage_points_rating.map((rating: any, index: any) => {
  return Object.assign({
    category: rating,
    value: index + 1,
  });
});

const damage_rating_field = 'Rating';

// Bar chart for damage ratings
export async function generateChartDamageRatingData() {
  const total_count = new StatisticDefinition({
    onStatisticField: 'Rating',
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  const query = damage_points_layer.createQuery();
  query.outFields = [damage_rating_field];
  query.outStatistics = [total_count];
  query.orderByFields = [damage_rating_field];
  query.groupByFieldsForStatistics = [damage_rating_field];

  return damage_points_layer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const count = attributes.total_count;
      return Object.assign({
        category: damage_points_rating[index],
        value: count,
      });
    });
    return data;
  });
}

export async function generateTotalRatings() {
  const total_count = new StatisticDefinition({
    onStatisticField: 'Rating',
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  const query = damage_points_layer.createQuery();
  query.outStatistics = [total_count];
  return damage_points_layer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_count;
    return total_number;
  });
}

// Pie chart for Repair Status
export const repaired_status = ['Repaired', 'Unrepaired', 'Pending Repair'];
export const repaired_status_color = ['#964b00', '#d0b49f', '#c1c2ad'];
export const repaired_status_value = repaired_status.map((status: any, index: any) => {
  return Object.assign({
    category: status,
    value: index + 1,
  });
});

export async function repairCostSummary() {
  var total_cost = new StatisticDefinition({
    onStatisticField: 'Cost',
    outStatisticFieldName: 'total_cost',
    statisticType: 'sum',
  });

  const query = damage_points_layer.createQuery();
  query.outStatistics = [total_cost];
  query.returnGeometry = true;
  query.groupByFieldsForStatistics = ['Repair_Status'];

  return damage_points_layer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const cost = attributes.total_cost;
      return Object.assign({
        category: repaired_status[index],
        value: cost,
        sliceSettings: {
          fill: am5.color(repaired_status_color[index]),
        },
      });
    });

    return data;
  });
}

export function thousands_separators(num: any) {
  if (num) {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  }
}

export function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}
