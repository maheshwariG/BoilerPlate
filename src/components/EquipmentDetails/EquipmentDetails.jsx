import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import TabsComp from '../../containers/Common/Tab';
import TabPane from '../../containers/Common/TabPane';
import style from './EquipmentDetails.module.css';
import EquipmentData from './EquipmentData';
import Button from '../../CustomComponents/Button';
import Popup from '../../CustomComponents/Popup';
import Select from '../../CustomComponents/Select';
const EquipmentDetails = ({ props }) => {
  const { count, decreaseCounter, increaseCounter } = props;
  const [selectVal, setSelectValue] = useState('All');
  const [openPopup, setOpenPopup] = useState(false);
  const test = () => {
    setOpenPopup(true);
  };
  const handleInputChange = (event) => {
    setSelectValue(event.target.value);
    console.log(event);
  };
  return (
    <>
      <TabsComp>
        <TabPane name="Equipment List" key="1" defaultHeight="100px">
          <Grid container direction="column">
            <Grid
              item
              xs={12}
              pl={{ sm: 0, md: 0 }}
              pt={{ sm: 0, md: 0 }}
              style={{ marginTop: '10px', marginBottom: '20px' }}
            >
              <Grid container>
                <Grid
                  item
                  xs={3}
                  style={{
                    height: '80px',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'white',
                      marginRight: '10px',
                      height: '100%',
                    }}
                  >
                    Test
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div
                    style={{
                      backgroundColor: 'white',
                      marginRight: '10px',
                      height: '100%',
                    }}
                  >
                    Test 2
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div
                    style={{
                      backgroundColor: 'white',
                      marginRight: '10px',
                      height: '100%',
                    }}
                  >
                    Test 3
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div
                    style={{
                      backgroundColor: 'white',
                      height: '100%',
                    }}
                  >
                    Test 4
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div style={{ background: 'white', height: '400px' }}>
                <div style={{ padding: '20px' }}>Test</div>
                <div
                  className={style.summarySection}
                  style={{ height: '320px', overflow: 'auto' }}
                >
                  <Button onClick={test} icon text="Filter" />
                  <div>Count: {count}</div>
                  <button
                    type="button"
                    onClick={() => {
                      increaseCounter();
                    }}
                  >
                    Increase Count
                  </button>
                  <button type="button" onClick={() => decreaseCounter()}>
                    Decrease Count
                  </button>
                  <EquipmentData />
                </div>
              </div>
            </Grid>
          </Grid>
        </TabPane>
        <TabPane name="Customer" key="2">
          <Grid container className={style.fullHeight}>
            <Grid item xs={12} md={9}>
              <div
                className={style.summarySection}
                style={{ background: 'white', height: '400px' }}
              >
                Customer Status Section
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              pl={{ sm: 0, md: 2 }}
              pt={{ sm: 2, md: 0 }}
            >
              <div className={style.summarySection}>
                Customer Status Summary
              </div>
            </Grid>
          </Grid>
        </TabPane>
        <TabPane name="Equipment Placement Map" key="3">
          <Grid container className={style.fullHeight}>
            <Grid item xs={12} md={9}>
              <div
                className={style.summarySection}
                style={{ background: 'white', height: '400px' }}
              >
                Equipment Placement Map Section
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              pl={{ sm: 0, md: 2 }}
              pt={{ sm: 2, md: 0 }}
            >
              <div className={style.summarySection}>Installed Base Summary</div>
            </Grid>
          </Grid>
        </TabPane>
      </TabsComp>
      <Popup
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <TabsComp>
          <TabPane name="Equipment List" key="1" defaultHeight="100px">
            <Select
              value={selectVal}
              onChange={handleInputChange}
              options={[
                { id: 'All', title: 'All' },
                { id: 'ExportAll', title: 'ExportAll' },
                { id: 'Export', title: 'Export' },
              ]}
              inputProps={{ 'aria-label': 'Without label' }}
            />
          </TabPane>
          <TabPane name="Customer" key="2">
            <div>Test1</div>
          </TabPane>
          <TabPane name="Equipment Placement Map" key="3">
            <div>Test2</div>
          </TabPane>
        </TabsComp>
      </Popup>
    </>
  );
};
EquipmentDetails.propTypes = {
  count: PropTypes.number,
  decreaseCounter: PropTypes.func,
  increaseCounter: PropTypes.func,
  props: PropTypes.object,
};
EquipmentDetails.defaultProps = {
  count: 0,
  decreaseCounter: () => {},
  increaseCounter: () => {},
  props: {},
};
export default EquipmentDetails;
