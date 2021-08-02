import React from 'react';
import Imagen from './Imagen';

const ListadoImagenes = ({imagenes}) => {
    return (  
        <div className="col-12 p-5">
            <div className="row">
                {imagenes.map(imagen => (
                    <Imagen 
                        key={Imagen.id}
                        imagen={imagen}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default ListadoImagenes;