import React from 'react';

const IPinfo = ({IPdata}) => {

    return (
        <div className="ip-info">
            <div className="ip-card">
                <span className="head-span">IP address</span>
                <span className="data-span">{IPdata.ip}</span>
            </div>
            <div className="ip-card">
                <span className="head-span">Location</span>
                <span className="data-span">{`${IPdata.location.city}, ${IPdata.location.region}`}</span>
            </div>
            <div className="ip-card">
                <span className="head-span">Timezone</span>
                <span className="data-span">{`UTC ${IPdata.location.timezone}`}</span>
            </div>
            <div className="ip-card">
                <span className="head-span">ISP</span>
                <span className="data-span">{IPdata.isp}</span>
            </div>
        </div>
      );
}

export default IPinfo;