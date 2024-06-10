import { useEffect, useRef, useState } from 'react';
import { damage_points_layer } from '../layers';
import { view } from '../Scene';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Query from '@arcgis/core/rest/support/Query';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';

import '../App.css';
import {
  damage_points_rating_color,
  damage_points_rating_status,
  generateChartDamageRatingData,
  generateTotalRatings,
  repairCostSummary,
  repaired_status_value,
} from '../Query';

import { CalciteLabel } from '@esri/calcite-components-react';
import { damage_points_rating } from '../Query';

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}

///*** Others */
/// Draw chart
const Chart = () => {
  // 1. Land Acquisition
  const pieSeriesRef = useRef<unknown | any | undefined>({});
  const legendRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const chartID = 'pie-two';

  // 2.Mode of Acquisition
  const barSeriesRef = useRef<unknown | any | undefined>({});
  const yAxisRef = useRef<unknown | any | undefined>({});
  const chartRef_moa = useRef<unknown | any | undefined>({});
  const [damageChartData, setDamageChartData] = useState([
    {
      category: String,
      value: Number,
      columnSettings: {
        fill: am5.color('#ffffff'),
      },
    },
  ]);
  const [totalDamage, setTotalDamage] = useState<Number | any>();
  const [repairCostSummaryChartData, setRepairCostSummaryChartData] = useState([
    {
      category: String,
      value: Number,
      sliceSettings: {
        fill: am5.color('#ffffff'),
      },
    },
  ]);

  const chartID_moa = 'land-moa';

  // Query
  useEffect(() => {
    generateChartDamageRatingData().then((result: any) => {
      setDamageChartData(result);
    });

    repairCostSummary().then((result: any) => {
      setRepairCostSummaryChartData(result);
    });

    generateTotalRatings().then((result: any) => {
      setTotalDamage(result);
    });
  }, []);

  // 1. Pie Chart for Land Acquisition
  useEffect(() => {
    // Dispose previously created root element
    maybeDisposeRoot(chartID);

    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      }),
    );
    chartRef.current = chart;

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        categoryField: 'category',
        valueField: 'value',
        //legendLabelText: "[{fill}]{category}[/]",
        // legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        legendValueText: "{valuePercentTotal.formatNumber('#.#')}%",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(30),
        scale: 1.9,
      }),
    );
    pieSeriesRef.current = pieSeries;
    chart.series.push(pieSeries);

    // Values inside the donut
    let inner_label = pieSeries.children.push(
      am5.Label.new(root, {
        text: '[#ffffff]{valueSum.formatNumber("#,###.")}[/]\n[fontSize: 0.35rem; #d3d3d3; verticalAlign: super]TOTAL BUDGET ($$)[/]',
        fontSize: '1rem',
        centerX: am5.percent(50),
        centerY: am5.percent(40),
        populateText: true,
        oversizedBehavior: 'fit',
        textAlign: 'center',
      }),
    );

    pieSeries.onPrivate('width', (width: any) => {
      inner_label.set('maxWidth', width * 0.7);
    });

    // Tooltipo text
    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      fillOpacity: 0.9,
      stroke: am5.color('#ffffff'),
      strokeWidth: 0.5,
      strokeOpacity: 1,
      templateField: 'sliceSettings',
      tooltipText: '{category}: {value.formatNumber("#,###.")}',
    });

    // Disabling labels and ticksll
    pieSeries.labels.template.set('visible', false);
    pieSeries.ticks.template.set('visible', false);

    pieSeries.slices.template.events.on('click', (ev) => {
      const selected: any = ev.target.dataItem?.dataContext;
      const categorySelected: string = selected.category;
      const find = repaired_status_value.find((emp: any) => emp.category === categorySelected);
      const statusSelect = find?.value;

      var highlightSelect: any;

      const query = damage_points_layer.createQuery();

      view.when(function () {
        view.whenLayerView(damage_points_layer).then((layerView): any => {
          //chartLayerView = layerView;

          damage_points_layer.queryFeatures(query).then((results: any) => {
            const RESULT_LENGTH = results.features;
            const ROW_N = RESULT_LENGTH.length;

            let objID = [];
            for (var i = 0; i < ROW_N; i++) {
              var obj = results.features[i].attributes.OBJECTID;
              objID.push(obj);
            }

            var queryExt = new Query({
              objectIds: objID,
            });

            damage_points_layer.queryExtent(queryExt).then((result: any) => {
              if (result.extent) {
                view.goTo(result.extent);
              }
            });

            if (highlightSelect) {
              highlightSelect.remove();
            }
            highlightSelect = layerView.highlight(objID);

            view.on('click', function () {
              layerView.filter = new FeatureFilter({
                where: undefined,
              });
              highlightSelect.remove();
            });
          }); // End of queryFeatures

          layerView.filter = new FeatureFilter({
            where: 'Repair_Status = ' + statusSelect,
          });

          // For initial state, we need to add this
          view.on('click', () => {
            layerView.filter = new FeatureFilter({
              where: undefined,
            });
            highlightSelect !== undefined ? highlightSelect.remove() : console.log('');
          });
        }); // End of view.whenLayerView
      }); // End of view.whenv
    });

    pieSeries.data.setAll(repairCostSummaryChartData);

    // Legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
      }),
    );
    legendRef.current = legend;
    legend.data.setAll(pieSeries.dataItems);

    // Change the size of legend markers
    legend.markers.template.setAll({
      width: 20,
      height: 20,
    });

    // Change the marker shape
    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    // Responsive legend
    // https://www.amcharts.com/docs/v5/tutorials/pie-chart-with-a-legend-with-dynamically-sized-labels/
    // This aligns Legend to Left
    chart.onPrivate('width', function (width: any) {
      const boxWidth = 190; //props.style.width;
      var availableSpace = Math.max(width - chart.height() - boxWidth, boxWidth);
      //var availableSpace = (boxWidth - valueLabelsWidth) * 0.7
      legend.labels.template.setAll({
        width: availableSpace,
        maxWidth: availableSpace,
      });
    });

    // To align legend items: valueLabels right, labels to left
    // 1. fix width of valueLabels
    // 2. dynamically change width of labels by screen size

    // Change legend labelling properties
    // To have responsive font size, do not set font size
    legend.labels.template.setAll({
      oversizedBehavior: 'truncate',
      fill: am5.color('#ffffff'),
      //textDecoration: "underline"
      //width: am5.percent(200)
      //fontWeight: "300"
      fontSize: '1.2rem',
    });

    legend.valueLabels.template.setAll({
      textAlign: 'right',
      //width: valueLabelsWidth,
      fill: am5.color('#ffffff'),
      //fontSize: LEGEND_FONT_SIZE,
      fontSize: '1.2rem',
    });

    legend.itemContainers.template.setAll({
      // set space between legend items
      paddingTop: 3,
      paddingBottom: 1,
    });

    pieSeries.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, repairCostSummaryChartData]);

  //   useEffect(() => {
  //     pieSeriesRef.current?.data.setAll(lotData);
  //     legendRef.current?.data.setAll(pieSeriesRef.current.dataItems);
  //   });

  // Damage Rating Bar chart
  useEffect(() => {
    // Dispose previously created root element

    maybeDisposeRoot(chartID_moa);

    var root2 = am5.Root.new(chartID_moa);
    root2.container.children.clear();
    root2._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root2.setThemes([am5themes_Animated.new(root2), am5themes_Responsive.new(root2)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root2.container.children.push(
      am5xy.XYChart.new(root2, {
        panX: false,
        panY: false,
        wheelX: 'none',
        wheelY: 'none',
        //height: am5.percent(81),
        width: am5.percent(118),
      }),
    );
    chartRef_moa.current = chart;

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var yRenderer = am5xy.AxisRendererY.new(root2, {
      minGridDistance: 5,
      strokeOpacity: 0,
      strokeWidth: 1,
      inversed: true,
      // stroke: am5.color('#ffffff'),
    });
    // yRenderer.grid.template.set('location', 1);

    var yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root2, {
        maxDeviation: 0,
        categoryField: 'category',
        renderer: yRenderer,
        visible: true,
      }),
    );

    var xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root2, {
        maxDeviation: 0,
        min: 0,
        numberFormat: "#'%'",
        strictMinMax: false, // shrinks chart to fit all
        calculateTotals: true,
        renderer: am5xy.AxisRendererX.new(root2, {
          visible: true,
          strokeOpacity: 0,
          strokeWidth: 0,
          // stroke: am5.color('#ffffff'),
        }),
      }),
    );
    // Remove grid lines
    xAxis.get('renderer').grid.template.set('forceHidden', true);

    // Label properties for yAxis (category axis)
    yAxis.get('renderer').labels.template.setAll({
      //oversizedBehavior: "wrap",
      textAlign: 'center',
      fill: am5.color('#ffffff'),
      //maxWidth: 150,
      fontSize: '1rem',
    });

    xAxis.get('renderer').labels.template.setAll({
      fill: am5.color('#ffffff'),
      fontSize: 0,
    });
    xAxis.get('renderer').labels.template.set('forceHidden', true);

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(
      am5xy.ColumnSeries.new(root2, {
        name: 'Series 1',
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: 'value',
        sequencedInterpolation: true,
        categoryYField: 'category',
        // maskBullets: false,
      }),
    );
    barSeriesRef.current = series;
    chart.series.push(series);

    series.columns.template.adapters.add('fill', function (fill: any, target: any) {
      if (target.dataItem.get('categoryY') === damage_points_rating[0]) {
        return am5.color(damage_points_rating_color[0]);
      } else if (target.dataItem.get('categoryY') === damage_points_rating[1]) {
        return am5.color(damage_points_rating_color[1]);
      } else if (target.dataItem.get('categoryY') === damage_points_rating[2]) {
        return am5.color(damage_points_rating_color[2]);
      } else if (target.dataItem.get('categoryY') === damage_points_rating[3]) {
        return am5.color(damage_points_rating_color[3]);
      }
    });

    var columnTemplate = series.columns.template;

    columnTemplate.setAll({
      draggable: true,
      cursorOverStyle: 'pointer',
      tooltipText: '{category}: {value}',
      // '{valueXTotalPercent.formatNumber("#.")}%'
      // cornerRadiusBR: 10,
      // cornerRadiusTR: 10,
      strokeOpacity: 0,
    });

    // Calculate percent damage for labels
    // totalDamage
    const pdamage = damage_points_rating.map((rating: any, index: any) => {
      return Object.assign({
        category: rating,
        percent: String(
          (
            (Number(damageChartData?.find((emp: any) => emp.category === rating)?.value) /
              totalDamage) *
            100
          ).toFixed(0),
        ),
      });
    });

    // Add Label bullet
    series.bullets.push(function (series: any, valueX: any, dataItem: any) {
      const categoryX = dataItem.dataContext.category;
      return am5.Bullet.new(root2, {
        locationX: 1,
        locationY: 0.5,
        sprite: am5.Label.new(root2, {
          text:
            categoryX === 'Basic'
              ? pdamage.find((emp: any) => emp.category === categoryX).percent + '%'
              : categoryX === 'Minor'
                ? pdamage.find((emp: any) => emp.category === categoryX).percent + '%'
                : categoryX === 'Moderate'
                  ? pdamage.find((emp: any) => emp.category === categoryX).percent + '%'
                  : categoryX === 'Major'
                    ? pdamage.find((emp: any) => emp.category === categoryX).percent + '%'
                    : 'fails',
          fill: root2.interfaceColors.get('alternativeText'),
          centerY: am5.p50,
          fontSize: '1.1rem',
          populateText: true,
        }),
      });
    });

    series.columns.template.events.on('click', function (ev) {
      const selected: any = ev.target.dataItem?.dataContext;
      const categorySelect: string = selected.category;
      const find = damage_points_rating_status.find((emp: any) => emp.category === categorySelect);
      const statusSelect = find?.value;

      var highlightSelect: any;

      var query = damage_points_layer.createQuery();
      view.whenLayerView(damage_points_layer).then((layerView: any) => {
        //CHART_ELEMENT.style.visibility = "visible";

        damage_points_layer.queryFeatures(query).then((results: any) => {
          const RESULT_LENGTH = results.features;
          const ROW_N = RESULT_LENGTH.length;

          let objID = [];
          for (var i = 0; i < ROW_N; i++) {
            var obj = results.features[i].attributes.OBJECTID;
            objID.push(obj);
          }

          var queryExt = new Query({
            objectIds: objID,
          });

          damage_points_layer.queryExtent(queryExt).then(function (result) {
            if (result.extent) {
              view.goTo(result.extent);
            }
          });

          if (highlightSelect) {
            highlightSelect.remove();
          }
          highlightSelect = layerView.highlight(objID);

          view.on('click', function () {
            layerView.filter = new FeatureFilter({
              where: undefined,
            });
            highlightSelect.remove();
          });
        });
        layerView.filter = new FeatureFilter({
          where: 'Rating = ' + statusSelect,
        });

        // For initial state, we need to add this
        view.on('click', () => {
          layerView.filter = new FeatureFilter({
            where: undefined,
          });
          highlightSelect !== undefined ? highlightSelect.remove() : console.log('');
        });
      }); // End of whenLayerView
    });

    yAxisRef.current = yAxis;
    yAxis.data.setAll(damageChartData);
    series.data.setAll(damageChartData);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root2.dispose();
    };
  }, [chartID_moa, damageChartData]);

  // useEffect(() => {
  //   barSeriesRef.current?.data.setAll(damageChartData);
  //   yAxisRef.current?.data.setAll(damageChartData);
  // });

  return (
    <>
      {/* Total damages */}
      <div className="text-gray-100 text-2xl ml-10 mt-2">
        <label className="text-[#FFA500] font-bold text-2xl pr-1">{totalDamage}</label>
        Damages In Total
      </div>

      {/* Damage Bar Chart */}
      <div
        id={chartID_moa}
        style={{
          height: '24vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginLeft: '1%',
        }}
      ></div>

      {/* Lot Chart */}
      <div
        id={chartID}
        style={{
          height: '40vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
        }}
      ></div>
    </>
  );
}; // End of lotChartgs

export default Chart;
