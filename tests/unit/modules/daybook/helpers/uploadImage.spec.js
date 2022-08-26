import 'setimmediate'
import cloudinary from 'cloudinary'
import axios from 'axios'

import uploadImage from '@/modules/daybook/helpers/uploadImage'



cloudinary.config({
  cloud_name: 'dceymlais',
  api_key: '793624383328494',
  api_secret: 'TzSdsjZdIX6ZuG5WQwXdmb0MbRE'
})


describe('Pruebas en el uploadImage', () => {

  test('debe de cargar un archivo y retornar el url', async(  ) => {

    const {data} = await axios.get('https://res.cloudinary.com/dceymlais/image/upload/v1661287051/rzkehwng6eyhck8zpdhv.jpg', {
      responseType: 'arraybuffer'
    })

    const file = new File([data], 'foto.jpg')

    const url = await uploadImage( file )

    expect( typeof url ).toBe('string')

    // Tomar ID
    const segments = url.split('/')
    const imageId = segments[ segments.length - 1 ].replace('.jpg','')

    cloudinary.v2.api.delete_resources( imageId, {}, () => {})

  })

})