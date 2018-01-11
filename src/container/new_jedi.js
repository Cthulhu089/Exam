import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {addJedi} from '../action';

class NewJedi extends Component {

  renderField (field) {
    const { meta: {touched, error} } = field;

    return (
      <div>
        <label>{ field.label }</label>
        <input className="form-control"
          /**is an object which contains different event handlers like onFocus onChange and they are passed as props to the input...*/
          type="text"
          { ...field.input }
        />
      </div>
    );
  }

  onSubmit(values) {
    this.props.addJedi(values);
  }

  render() {
    const {handleSubmit} = this.props;

    return(
      <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
        <Field
          label="id"
          name="id"
          component={ this.renderField }
        />
        <Field
          label="name"
          name="name"
          component={ this.renderField }
        />

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

export default reduxForm({
  form: 'NewJedi'
})(
  connect(null, {addJedi})(NewJedi)
);
