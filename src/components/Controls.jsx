import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ url, rawJson, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit} onChange={onChange} data-testid="controls-form">
      <input type="text" aria-label="urlTextbox" placeholder="URL" value={url} name="url"/>
      <section aria-label="methodSelector">
        <label htmlFor="GET">
          <input type="radio" name="method" value="GET" id="GET"/>
          <div>GET</div>
        </label>
        <label htmlFor="POST">
          <input type="radio" name="method" value="POST" id="POST"/>
          <div>POST</div>
        </label>
        <label htmlFor="PUT">
          <input type="radio" name="method" value="PUT" id="PUT"/>
          <div>PUT</div>
        </label>
        <label htmlFor="PATCH">
          <input type="radio" name="method" value="PATCH" id="PATCH"/>
          <div>PATCH</div>
        </label>
        <label htmlFor="DELETE">
          <input type="radio" name="method" value="DELETE" id="DELETE"/>
          <div>DELETE</div>
        </label>
        <button aria-label="submit-button">Submit</button>
      </section>
      <input type="text" aria-label="jsonText" placeholder="JSON body" value={rawJson} name="rawJson" />
    </form>
  </div>
);

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  rawJson: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired, 
  onSubmit: PropTypes.func.isRequired
};

export default Controls;
