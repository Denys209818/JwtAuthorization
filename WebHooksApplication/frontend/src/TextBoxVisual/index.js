import { useField } from "formik";
import React from "react";
import classNames from "classnames";

const TextBoxVisual = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (<div className="form-group mt-3 mb-3">
            <label htmlFor={props.name || props.id} className="form-label">{label}
            </label>
            <input className={classNames("form-control", {"is-valid": meta.touched && !meta.error}, 
            {"is-invalid": meta.touched && meta.error})} {...field} {...props}/>

            {meta.touched && meta.error && 
         <div className="invalid-feedback">{meta.error}</div>
       }
    </div>);
};

export default TextBoxVisual;