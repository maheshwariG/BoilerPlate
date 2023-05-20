import React from 'react';
import Grid from '@mui/material/Grid';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import EquipmentDetails from '../EquipmentDetailStatus/EquipmentDetails';
import AssetManagement from '../AssetManagement/AssetManagement';
import Potal from '../../images/Portal.PNG';
import Equipment from '../../images/Equipment.PNG';
import AssetManagementImg from '../../images/AssetManagement.PNG';
import Inventory from '../../images/Inventory.PNG';
import Sales from '../../images/Sales.PNG';
import { EquipmentStatus, AssetManagementTab } from '../../../constants';
import style from './Tabs.module.css';
const Tabs = (props) => {
  const {
    match: {
      params: { tab },
    },
  } = props;
  console.log(tab);
  return (
    <Grid container pt={3} className="Govind">
      <Grid
        item
        xs={1}
        style={{ paddingTop: '35px', textAlign: 'right', maxWidth: '5%' }}
      >
        <Link to="/" className={style.link}>
          <img
            src={Potal}
            alt="PortalDashboard"
            style={{
              width: '25px',
              height: '25px',
              marginBottom: '25px',
              paddingRight: '20%',
            }}
          />
        </Link>
        <Link to={`/Portal/${EquipmentStatus}`} className={style.link}>
          <div>
            <img
              src={Equipment}
              alt="Equipment"
              style={
                tab === EquipmentStatus
                  ? {
                      width: '25px',
                      height: '25px',
                      marginBottom: '25px',
                      paddingRight: '20%',
                      borderRight: '2px solid blue',
                    }
                  : {
                      width: '25px',
                      height: '25px',
                      marginBottom: '25px',
                      paddingRight: '20%',
                    }
              }
            />
          </div>
        </Link>
        <Link to={`/Portal/${AssetManagementTab}`} className={style.link}>
          <div>
            <img
              src={AssetManagementImg}
              alt="AssetManagement"
              style={
                tab === AssetManagementTab
                  ? {
                      width: '25px',
                      height: '25px',
                      marginBottom: '25px',
                      paddingRight: '20%',
                      borderRight: '2px solid blue',
                    }
                  : {
                      width: '25px',
                      height: '25px',
                      marginBottom: '25px',
                      paddingRight: '20%',
                    }
              }
            />
          </div>
        </Link>
        <div>
          <img
            src={Inventory}
            alt="Inventory"
            style={{
              width: '25px',
              height: '25px',
              marginBottom: '25px',
              paddingRight: '20%',
            }}
          />
        </div>
        <div>
          <img
            src={Sales}
            alt="Sales"
            style={{
              width: '25px',
              height: '25px',
              marginBottom: '25px',
              paddingRight: '20%',
            }}
          />
        </div>
      </Grid>
      <Grid item xs={11} pr={{ sm: 0, md: 6, maxWidth: '95%' }}>
        {tab === EquipmentStatus && <EquipmentDetails />}
        {tab === AssetManagementTab && <AssetManagement />}
      </Grid>
    </Grid>
  );
};
Tabs.propTypes = {
  match: PropTypes.object,
};
Tabs.defaultProps = {
  match: {},
};
export default withRouter(Tabs);
