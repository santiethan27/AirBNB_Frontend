import React, { useEffect, useRef, useState } from "react";
import "./FormBlog.css";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { useBlog } from "../../context/BlogContext";
import { useAuth } from "../../context/AuthContext";


const FormBlog = () => {
  const [editorValue, setEditorValue] = useState('');
  const { handleSubmit, formState: { errors }, register } = useForm();
  const { _postBlog } = useBlog();
  const { user } = useAuth();

  const onEditorChange = (value) =>{
    setEditorValue(value);
  }

  const onSubmit = async (data) =>{
    try {
      console.log("Info formulario", data);
      const editorText = editorValue.replace(/<[^>]*>/g, '');
      console.log("Contenedor quill",editorText);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("images", data.images[0]);
      formData.append("description", editorText);
      formData.append("user", user.user.id);
      const res = await _postBlog(formData);
      alert(res);
    } catch(error) {
      console.log(error.message);
    }
  }


  return (
    <div className="container" onSubmit={handleSubmit(onSubmit)}>
      <form className="form-blog">
        <h4>Añadir foto</h4>
        <div className="img-form">
          <label className="custom-file-upload">
            <input
              type="file"
              {...register("images", { required: true })}
            />
          </label>
          {errors.text && <p className="msg-error">Campo obligatorio</p>}
          <div id="image-preview" className="image-preview"></div>
        </div>
        <div className="b-input">
          <input
            type="text"
            placeholder="Titulo"
            {...register("title", { required: true })}
          />
          {errors.text && <p className="msg-error">Campo obligatorio</p>}
        </div>
        <div className="quill">
          <ReactQuill value={editorValue} onChange={onEditorChange} />
        </div>
        <div className="buton">
          <button className="bg-primary cursor-pointer txt-white" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormBlog;
