import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import style from './Dashboard.module.css';
import { EquipmentStatus, AssetManagementTab } from '../../../constants';
function Dashboard() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('welcome text')}</h1>
      <Grid container spacing={2} className={style.center}>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <div className={style.card}>Portal Dashboard</div>
        </Grid>
        <Grid item xs={3}>
          <Link to={`/Portal/${EquipmentStatus}`}>
            <div className={style.card}>Equipment Status</div>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link to={`/Portal/${AssetManagementTab}`}>
            <div className={style.card}>Asset Management</div>
          </Link>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid container spacing={2} className={style.center}>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <div className={style.card}>Inventory Management</div>
        </Grid>
        <Grid item xs={3}>
          <div className={style.card}>Sales</div>
        </Grid>
        <Grid item xs={3}>
          <div className={style.card}>Consumer Engagement</div>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
