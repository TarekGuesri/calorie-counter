import React, { useState } from 'react';
import ReactAutocomplete from 'react-autocomplete';

const AddConsumption = () => {
  const [state, setState] = useState({ value: '' });
  return (
    <div>
      AddConsumption{' '}
      <ReactAutocomplete
        className="awdaw"
        items={[
          { id: 'foo', label: 'foo' },
          { id: 'bar', label: 'bar' },
          { id: 'baz', label: 'baz' },
        ]}
        shouldItemRender={(item, value) =>
          item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
        }
        getItemValue={(item) => item.label}
        renderInput={(props) => <input className="form-control" {...props} />}
        renderItem={(item, highlighted) => (
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
          >
            {item.label}
          </div>
        )}
        value={state.value}
        onChange={(e) => setState({ value: e.target.value })}
        onSelect={(value) => setState({ value })}
      />
    </div>
  );
};

export default AddConsumption;
