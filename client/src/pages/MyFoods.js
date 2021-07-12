import React, { useRef } from 'react';
import Helmet from 'react-helmet';
import { Modal } from 'bootstrap';

import { WEBSITE_NAME } from 'src/utils/brand';
import FoodList from 'src/components/my-foods/FoodList';
import AddFood from 'src/components/my-foods/AddFood';
import 'src/styles/MyFoods.scss';

const MyFoods = () => {
  const addModalRef = useRef();

  const handleOpenAdd = () => {
    console.log('open');
    const modalEle = addModalRef.current;
    const bsModal = new Modal(modalEle);
    bsModal.show();
  };

  const handleCloseAdd = () => {
    console.log('close');
    const modalEle = addModalRef.current;
    const bsModal = Modal.getInstance(modalEle);
    bsModal.hide();
  };

  console.log(addModalRef);

  return (
    <>
      {' '}
      <Helmet>
        <title>{`${WEBSITE_NAME} - My Foods`}</title>
      </Helmet>
      <h3 className="primary-text"> {'My Foods'}</h3>
      <div className="d-flex flex-row-reverse bd-highlight">
        <div className="p-2 bd-highlight">
          {' '}
          <button
            className="primary-button btn-lg rounded-pill mt-4 ms-0 ms-sm-4"
            style={{
              padding: '.320rem 1.75rem',
            }}
            type="button"
            // disabled={!food.id}
            onClick={handleOpenAdd}
          >
            Add
          </button>
        </div>
      </div>
      <FoodList />
      <AddFood modalRef={addModalRef} handleClose={handleCloseAdd} />
    </>
  );
};

export default MyFoods;
