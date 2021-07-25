import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import Modal from 'bootstrap/js/dist/modal';

import { WEBSITE_NAME } from 'src/utils/brand';
import FoodList from 'src/components/my-foods/FoodList';
import AddFood from 'src/components/my-foods/AddFood';
import EditFood from 'src/components/my-foods/EditFood';
import DeleteFood from 'src/components/my-foods/DeleteFood';
import 'src/styles/MyFoods.scss';

const MyFoods = () => {
  // Modals refs
  const addModalRef = useRef();
  const editModalRef = useRef();
  const deleteModalRef = useRef();

  const [state, setState] = useState({
    foods: [],
    target: null, // Edit or delete modal target
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

  // We use this to open the delete modal when deleteOpen state changes
  useEffect(() => {
    const { deleteOpen } = state;
    if (deleteOpen) {
      const modalEle = deleteModalRef.current;
      const bsModal = new Modal(modalEle);
      bsModal.show();
    }
  }, [state.deleteOpen]);

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

  const handleOpenDelete = async (e) => {
    const { foods } = state;
    const foodId = e.target.getAttribute('data-id');

    // We get the delete target
    const target = foods.find((food) => food._id === foodId);

    setState({ ...state, target, deleteOpen: true });
  };

  const handleCloseDelete = () => {
    setState({ ...state, target: null, deleteOpen: false });
  };

  const { foods, target, addOpen, editOpen, deleteOpen, loading } = state;

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
        handleOpenDelete={handleOpenDelete}
      />
      {addOpen && (
        <AddFood
          modalRef={addModalRef}
          handleRefresh={getFoods}
          handleClose={handleCloseAdd}
          handleGetFoods={getFoods}
        />
      )}
      {editOpen && (
        <EditFood
          modalRef={editModalRef}
          target={target}
          handleClose={handleCloseEdit}
          handleGetFoods={getFoods}
        />
      )}
      {deleteOpen && (
        <DeleteFood
          modalRef={deleteModalRef}
          target={target}
          handleClose={handleCloseDelete}
          handleGetFoods={getFoods}
        />
      )}
    </>
  );
};

export default MyFoods;
