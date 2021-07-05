import React, { useState } from 'react';
import ReactAutocomplete from 'react-autocomplete';

const AddConsumption = () => {
  const [state, setState] = useState({ id: '', value: '' });

  const onSelect = (value, item) => {
    console.log(value);
    console.log(item);
    setState({ value });
  };
  return (
    <div className="mb-5">
      <h5 style={{ display: 'inline' }}> Add a consumption </h5>
      (if you want to add a new food click <a href="#">here</a> )
      <br />
      <ReactAutocomplete
        className="awdaw"
        items={[
          { id: 'foo1', value: 'foo' },
          { id: 'bar2', value: 'bar' },
          { id: 'baz3', value: 'baz' },
        ]}
        shouldItemRender={(item, value) =>
          item.value.toLowerCase().indexOf(value.toLowerCase()) > -1
        }
        getItemValue={(item) => item.value}
        renderInput={(props) => (
          <input className="form-control mb-0 mx" {...props} />
        )}
        renderItem={(item, highlighted) => (
          <div
            key={item.id}
            style={{
              backgroundColor: highlighted ? '#55973f' : 'transparent',
              color: highlighted ? 'white' : 'black',
              textAlign: 'left',
              padding: '8px',
            }}
          >
            {item.value}
          </div>
        )}
        value={state.value}
        onChange={(e) => setState({ value: e.target.value, id: '' })}
        onSelect={onSelect}
      />
      <a
        className="primary-button  btn-lg rounded-pill mt-4 ms-0 ms-sm-4"
        role="button"
      >
        Add
      </a>
    </div>
  );
};

export default AddConsumption;
