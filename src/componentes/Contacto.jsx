import React from 'react'
import '../css/contacto.css'
function Contacto() {
  return (
    <div>
        <h2 className='tituloContacto'>Contacto</h2>
        <div className='mapaContacto'>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.828425866032!2d-58.4954517!3d-34.61283769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9d9b37b609d%3A0x7240c3796915d807!2sBarrio%20Hogar%20Obrero%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1674253790036!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'/>
        </div>
    </div>
  )
}

export default Contacto