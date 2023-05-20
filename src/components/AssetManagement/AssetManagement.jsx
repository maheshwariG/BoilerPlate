import React from 'react';
import Grid from '@mui/material/Grid';
import TabsComp from '../../containers/Common/Tab';
import TabPane from '../../containers/Common/TabPane';
import style from './AssetManagement.module.css';
const AssetManagement = () => {
  return (
    <TabsComp>
      <TabPane name="Diagnostic" key="1">
        <Grid container className={style.fullHeight}>
          <Grid item xs={12} md={9}>
            <div className={style.summarySection}>Diagnostic</div>
          </Grid>
          <Grid item xs={12} md={3} pl={{ sm: 0, md: 2 }} pt={{ sm: 2, md: 0 }}>
            <div className={style.summarySection}>KPIs over time</div>
          </Grid>
        </Grid>
      </TabPane>
      <TabPane name="Connectivity" key="2">
        <Grid container className={style.fullHeight}>
          <Grid item xs={12} md={9}>
            <div className={style.summarySection}>Connectivity</div>
          </Grid>
          <Grid item xs={12} md={3} pl={{ sm: 0, md: 2 }} pt={{ sm: 2, md: 0 }}>
            <div className={style.summarySection}>Summary</div>
          </Grid>
        </Grid>
      </TabPane>
      <TabPane name="Payment System" key="3">
        <Grid container className={style.fullHeight}>
          <Grid item xs={12} md={9}>
            <div className={style.summarySection}>Payment System</div>
          </Grid>
          <Grid item xs={12} md={3} pl={{ sm: 0, md: 2 }} pt={{ sm: 2, md: 0 }}>
            <div className={style.summarySection}>Payment System Summary</div>
          </Grid>
        </Grid>
      </TabPane>
    </TabsComp>
  );
};
export default AssetManagement;
