import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import { Modal } from 'bootstrap';

import { WEBSITE_NAME } from 'src/utils/brand';
import FoodList from 'src/components/my-foods/FoodList';
import AddFood from 'src/components/my-foods/AddFood';
import 'src/styles/MyFoods.scss';

const MyFoods = () => {
  const addModalRef = useRef();

  const [state, setState] = useState({
    foods: [],
    loading: true,
  });

  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    setState({
      ...state,
      loading: true,
    });

    const res = await axios.get('foods/available');

    setState((prevState) => ({
      ...prevState,
      foods: res.data,
      loading: false,
    }));
  };
  const handleOpenAdd = () => {
    const modalEle = addModalRef.current;
    const bsModal = new Modal(modalEle);
    bsModal.show();
  };

  const handleCloseAdd = () => {
    const modalEle = addModalRef.current;
    const bsModal = Modal.getInstance(modalEle);
    bsModal.hide();
  };

  const { foods, loading } = state;

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} - My Foods`}</title>
      </Helmet>
      <h3 className="primary-text"> {'My Foods'}</h3>
      <div className="d-flex flex-row-reverse bd-highlight">
        <div className="p-2 bd-highlight">
          <button
            className="primary-button btn-lg rounded-pill mt-4 ms-0 ms-sm-4"
            type="button"
            onClick={handleOpenAdd}
          >
            Add
          </button>
        </div>
      </div>
      <FoodList foods={foods} loading={loading} />
      <AddFood
        modalRef={addModalRef}
        handleRefresh={getFoods}
        handleClose={handleCloseAdd}
      />
    </>
  );
};

export default MyFoods;
