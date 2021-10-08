import { useField } from 'formik';
import { useState } from 'react';
import { useIMask } from 'react-imask';
import classNames from 'classnames';
import React from 'react';

function TextBoxPhoneVisual ({label, ...props}) {
  const [ opts, setOpts ] = useState({ mask: '+00(000) 000 00 00' });
  const { ref, maskRef } = useIMask(opts);
  
  const [field, meta] = useField(props);

    return (<div className="form-group mt-3 mb-3">
            <label htmlFor={props.name || props.id} className="form-label">{label}
            </label>
            <input className={classNames("form-control", {"is-valid": meta.touched && !meta.error}, 
            {"is-invalid": meta.touched && meta.error})} ref={ref} {...field} {...props}/>

            {meta.touched && meta.error && 
         <div className="invalid-feedback">{meta.error}</div>
       }
    </div>);
}

export default TextBoxPhoneVisual;