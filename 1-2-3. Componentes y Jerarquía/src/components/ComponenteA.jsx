import React from 'react'
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto'
import ComponenteB from './ComponenteB'

function ComponenteA ({contacto}) {

  return (
    <div>
            <h6>
                Nombre: { contacto.name }
            </h6>
            <h6>
                Apellido: { contacto.surname }
            </h6>
            <h6>
                Email: { contacto.email }
            </h6>
            <ComponenteB estado = { true } />
    </div>
  )
}

ComponenteA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
};

export default ComponenteA