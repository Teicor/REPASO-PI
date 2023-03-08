import React from "react";
import './Form.css'

export default function Form(){
    return(
        <>
        <div className="main-container">
            <form className="form-container">
                <label>
                    Nombre:
                    <input type="text" name="name" placeholder="Rick"/>
                </label>
                <label>
                    Especie:
                    <input type="text" name="name" placeholder="Humano"/>
                </label>
                <label>
                    Planeta:
                    <input type="text" name="name" placeholder="Tierra 254"/>
                </label>
                <label>
                    Imagen:
                    <input type="text" name="name" placeholder="eiaa"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        </>
    )
}