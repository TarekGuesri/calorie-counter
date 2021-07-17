import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import Modal from 'bootstrap/js/dist/modal';

import { WEBSITE_NAME } from 'src/utils/brand';
import FoodList from 'src/components/my-foods/FoodList';
import AddFood from 'src/components/my-foods/AddFood';
import EditFood from 'src/components/my-foods/EditFood';
import 'src/styles/MyFoods.scss';

const MyFoods = () => {
  // Modals refs
  const addModalRef = useRef();
  const editModalRef = useRef();
  // const deleteModalRef = useRef();

  const [state, setState] = useState({
    foods: [],
    target: null, // Edit or Remove modal target
    addOpen: false,
    editOpen: false,
    deleteOpen: false,
    loading: true,
  });

  useEffect(() => {
    getFoods();
  }, []);

  // We use this to open the add modal when addOpen state changes
  useEffect(() => {
    const { addOpen } = state;
    if (addOpen) {
      const modalEle = addModalRef.current;
      const bsModal = new Modal(modalEle);
      bsModal.show();
    }
  }, [state.addOpen]);

  // We use this to open the edit modal when editOpen state changes
  useEffect(() => {
    const { editOpen } = state;
    if (editOpen) {
      const modalEle = editModalRef.current;
      const bsModal = new Modal(modalEle);
      bsModal.show();
    }
  }, [state.editOpen]);

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
    setState({ ...state, addOpen: true });
  };

  const handleCloseAdd = () => {
    setState({ ...state, addOpen: false });
  };

  const handleOpenEdit = async (e) => {
    const { foods } = state;
    const foodId = e.target.getAttribute('data-id');

    // We get the edit target
    const target = foods.find((food) => food._id === foodId);

    setState({ ...state, target, editOpen: true });
  };

  const handleCloseEdit = () => {
    setState({ ...state, target: null, editOpen: false });
  };

  const { foods, target, addOpen, editOpen, /* deleteOpen, */ loading } = state;

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
      <FoodList
        foods={foods}
        loading={loading}
        handleOpenEdit={handleOpenEdit}
      />
      {addOpen && (
        <AddFood
          modalRef={addModalRef}
          handleRefresh={getFoods}
          handleClose={handleCloseAdd}
        />
      )}
      {editOpen && (
        <EditFood
          modalRef={editModalRef}
          target={target}
          handleRefresh={getFoods}
          handleClose={handleCloseEdit}
        />
      )}
    </>
  );
};

export default MyFoods;
