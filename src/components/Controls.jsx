import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Controls.css';

const Controls = ({ url, rawJson, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit} onChange={onChange} data-testid="controls-form">
      <input type="text" aria-label="urlTextbox" placeholder="URL" value={url} name="url" onChange={onChange}/>
      <section aria-label="methodSelector" className="radio-route">
        <input type="radio" name="method" value="GET" id="GET" onChange={onChange}/>
        <label htmlFor="GET">GET</label> 
        
        <input type="radio" name="method" value="POST" id="POST" onChange={onChange}/>
        <label htmlFor="POST">POST</label>

        <input type="radio" name="method" value="PUT" id="PUT" onChange={onChange}/>
        <label htmlFor="PUT">PUT</label>

        <input type="radio" name="method" value="PATCH" id="PATCH" onChange={onChange}/>
        <label htmlFor="PATCH">PATCH</label>

        <input type="radio" name="method" value="DELETE" id="DELETE" onChange={onChange}/>
        <label htmlFor="DELETE">DELETE</label>

        <button aria-label="submit-button">Go!</button>
      </section>
      <textarea type="text" aria-label="jsonText" placeholder="JSON body" value={rawJson} name="rawJson" />
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
