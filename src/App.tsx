import { useRef, useEffect, useState } from 'react';
import { map, view } from './Scene';
import './index.css';
import './App.css';
import 'flowbite';
import { damage_points_layer } from './layers';
import StreetNameList from './components/StreeNameList';
import Chart from './components/Chart';
import StreetIdList from './components/StreetIdList';
import StreetClassList from './components/StreetClassList';

function App() {
  const mapDiv = useRef(null);

  // Switch between Summary Chart and Lists
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // Information Div
  const [informationDisplay, setInformationDisplay] = useState<boolean>(false);

  useEffect(() => {
    const defaultWidget = document.querySelector(`[id='street-summary-chart']`) as HTMLDivElement;
    defaultWidget.hidden = true;
  }, []);

  useEffect(() => {
    const summaryActiveWidget = document.querySelector(
      `[id='street-summary-chart']`,
    ) as HTMLDivElement;

    if (activeWidget) {
      const actionActiveWidget = document.querySelector(`[id=${activeWidget}]`) as HTMLDivElement;
      actionActiveWidget.style.display = 'block';
      summaryActiveWidget.style.display = 'none';
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(`[id=${nextWidget}]`) as HTMLDivElement;
      actionNextWidget.style.display = 'none';
    }

    if (nextWidget === 'street-summary-list') {
      summaryActiveWidget.style.display = 'block';
    }

    if (nextWidget === 'street-summary-chart') {
      summaryActiveWidget.style.display = 'none';
    }
  }, [activeWidget, nextWidget]);

  // Information display
  useEffect(() => {
    const infoWidget = document.querySelector(`[id="information-div"`) as HTMLDivElement;
    infoWidget.style.display = informationDisplay === true ? 'block' : 'none';
  }, [informationDisplay]);

  // Damage view useState
  const [damageViewCounts, setDamageViewCounts] = useState<any>();
  useEffect(() => {
    view.when(() => {
      view.whenLayerView(damage_points_layer).then((layerView: any) => {
        layerView.watch('updating', (val: any) => {
          if (!val) {
            layerView
              .queryFeatures({
                geometry: view.extent,
                // returnGeometry: true,
                orderByFields: ['ROAD_NAME'],
              })
              .then((result: any) => {
                setDamageViewCounts(result.features.length);
              });
          }
        });
      });
    });
  }, []);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize
       */

      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];

      // view.ui.empty('top-left');
    }
  }, []);

  return (
    <div className="parent h-screen flex flex-col bg-[#00304D]">
      <div className="grid grid-cols-75/25 h-full mx-1 mb-1">
        <div className="mapDiv" ref={mapDiv}></div>
        <div>
          <div className="pl-5 pt-4 flex justify-between">
            <div className="text-[#FFA500] font-bold text-3.5xl">ROAD DAMAGE</div>
            <svg
              className="w-9 h-9 text-gray-200 dark:text-white mr-5 mt-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#1396E7"
              viewBox="0 0 21 21"
              onClick={(event) => setInformationDisplay(informationDisplay === true ? false : true)}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.3"
                color="black"
                d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div
              id="information-div"
              style={{
                display: 'none',
                position: 'absolute',
                zIndex: 99,
                top: '20%',
                left: '15%',

                backgroundColor: '#00304d',
                padding: '10px',
              }}
              className="w-2/5 text-[#D3D3D3]"
            >
              <div className="text-[#FFA500] font-bold">ABOUT THIS APP</div>
              <div>
                {' '}
                This sample web app visualizes assessment results of road damages including damage
                rating and repairing cost through map and charts. The numver of listed items is
                dynamically updated in response to changing view on the map. You can click the name
                on the list and the map zooms into the specific point and also view the information
                popup.
                <div className="text-[#FFA500] pt-5">How to Use this APP</div>
                You can see a list of streets under assessment by three categories: STREET, ID, or
                CLASS.
                <li className="ml-5">
                  <label className="text-[#FFA500]">STREET</label> gives a list of strees by their
                  names and ordered in the alphabetical order.
                </li>
                <li className="ml-5">
                  <label className="text-[#FFA500]">ID</label> gives a list of strees by their
                  unique IDs and ordered in the alphabetical order.
                </li>
                <li className="ml-5">
                  <label className="text-[#FFA500]">Class</label> gives a list of strees by their
                  class such as primary, secondary, and tertiery.
                </li>
                <div>
                  {' '}
                  Click <label className="text-[#FFA500] font-bold">SUMMARY CHART</label> button to
                  view summary statistics of total damages by ratings and remaining balance of
                  repairment cost.
                </div>
                <div>
                  You can click the chart series to identify points on the map corresponding to the
                  specific series. For example, if you click 'Basic' series in the bar chart, only
                  points with basic damages will appear on the map.
                </div>
              </div>
              <button
                type="button"
                className="flex items-center justify-center mt-3 ml-auto mr-auto text-black bg-[#ffa500] hover:bg-[#ffa500] focus:ring-2 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={(event) => {
                  setInformationDisplay(false);
                }}
              >
                <label className="font-bold text-lg">CLOSE</label>
              </button>
            </div>
          </div>
          <div className="pl-5 pb-3 text-gray-100 border-b-2 border-gray-500 leading-5">
            Select a road damage by street, damage ID, or road class from the list or click on the
            map.
          </div>
          <div className="text-gray-100 text-2.5xl ml-5 mt-2">
            <label className="text-[#FFA500] font-bold text-3xl pr-1">{damageViewCounts}</label>
            Damages In View
          </div>
          {/* List Frames */}
          <div id="street-summary-list" className="bg-[#00304D] ml-3 mr-3">
            <div className="mb-1">
              <ul
                className="flex flex-wrap -mb-px text-sm font-medium text-center items-center justify-between"
                id="default-styled-tab"
                data-tabs-toggle="#default-styled-tab-content"
                data-tabs-active-classes="text-white hover:text-white-600 dark:text-white-500 dark:hover:text-white-500 border-b-4 border-[#FFA500] dark:border-white-500"
                data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:border-gray-700 dark:hover:text-gray-300"
                role="tablist"
              >
                <li className="me-2" role="presentation">
                  <button
                    className="inline-block p-4 rounded-t-lg text-2xl"
                    id="profile-styled-tab"
                    data-tabs-target="#styled-profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Street
                  </button>
                </li>
                <li className="me-2" role="presentation">
                  <button
                    className="inline-block p-4 rounded-t-lg text-2xl"
                    id="streetid-styled-tab"
                    data-tabs-target="#styled-streetid"
                    type="button"
                    role="tab"
                    aria-controls="streetid"
                    aria-selected="false"
                  >
                    ID
                  </button>
                </li>
                <li className="me-2" role="presentation">
                  <button
                    className="inline-block p-4 rounded-t-lg text-2xl"
                    id="settings-styled-tab"
                    data-tabs-target="#styled-settings"
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected="false"
                  >
                    Class
                  </button>
                </li>
              </ul>
            </div>

            {/* Names of Street, ID, and Class  */}
            <div id="default-styled-tab-content">
              <div id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                {/* <ul className="max-w-md ml-5 mr-5 mt-5 space-y-4 text-gray-500 list-none list-inside dark:text-gray-400">
                  {streetNameItem && // Extract unique objects from the array
                    streetNameItem
                      .filter(
                        (ele: any, ind: any) =>
                          ind ===
                          streetNameItem.findIndex((elem: any) => elem.objectid === ele.objectid),
                      )
                      .map((result: any, index: any) => {
                        return (
                          // need 'key' to upper div and inside CalciteListItem

                          <li
                            key={index}
                            id={result.objectid}
                            onClick={(event) => setClickedStreeName(event?.currentTarget.id)}

                            // selected={undefined}
                            // onCalciteListItemSelect={(event: any) => console.log(event)}
                          >
                            <div className="text-[#FFA500] text-xl leading-6">
                              {result.roadname}
                            </div>
                            <label className="text-gray-200">{result.rating}</label>
                          </li>
                        );
                      })}
                </ul> */}
                <StreetNameList />

                {/* <LotChart data={chartData} total={totalLotNumber} station={stationSelected} /> */}
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{' '}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one for the next. The tab
                JavaScript swaps classes to control the content visibility and styling.
              </p> */}
              </div>

              <div id="styled-streetid" role="tabpanel" aria-labelledby="streetid-tab">
                <StreetIdList />
              </div>
              <div id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
                <StreetClassList />
              </div>
            </div>

            {/* Summary Chart Button */}
            <div className="flex items-center justify-center pt-3 mb-0">
              <button
                type="button"
                className="flex items-center justify-center text-black bg-[#ffa500] hover:bg-[#ffa500] focus:ring-2 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={(event) => {
                  setNextWidget('street-summary-list');
                  setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
                }}
              >
                <label className="font-bold text-lg">SUMMARY CHART</label>
              </button>
            </div>
          </div>

          {/* Summary Chart components */}
          <div id="street-summary-chart" className="bg-[#00304D] ml-3 mr-3">
            <Chart />
            <div className="flex items-center justify-center pt-3 mb-0">
              <button
                type="button"
                className="flex items-center justify-center text-black bg-[#ffa500] hover:bg-[#ffa500] focus:ring-2 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={(event) => {
                  setNextWidget('street-summary-chart');
                  setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
                }}
              >
                <label className="font-bold text-lg">RETURN LIST</label>
              </button>
            </div>
          </div>

          {/* Street information */}
        </div>

        {/* <img src="https://EijiGorilla.github.io/Symbols/Information_sign.svg" /> */}
      </div>
    </div>
  );
}

export default App;
