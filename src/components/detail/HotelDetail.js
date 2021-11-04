import React, { useEffect, useState } from 'react';
import '../../css/details.scss';
import logo from '../../assets/fabhotel.jpg';
import { hotelsData } from '../../data/hotelsData';
import Header from '../layout/Header';
import { Link } from 'react-router-dom';

const HotelDetail = ({ match, history }) => {
  const { id } = match.params;
  const [data, setData] = useState({});

  useEffect(() => {
    if (id) {
      let temp_data = hotelsData.find((item) => item.hotelID === id);

      setData(temp_data);
    }
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      <Header history={history} />
      {data && Object.keys(data).length !== 0 ? (
        <main className="container">
          <div className="left-column">
            <img className="active" src={logo} alt="" />
          </div>

          <div className="right-column">
            <div className="product-description">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <div style={{ textAlign: 'center' }}>
                <Link
                  style={{
                    textDecoration: 'none',
                    padding: '5px 10px',
                    background: '#383d5ce0',
                    color: '#fff',
                    borderRadius: '15px',
                  }}
                  to="/"
                >
                  Back Home
                </Link>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <h3>No Data Found</h3>
      )}
    </>
  );
};

export default HotelDetail;
