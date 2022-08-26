import { shallowMount } from '@vue/test-utils'
import Fab from '@/modules/daybook/components/Fab'

let wrapper

describe('Pruebas en el FAB component', () => {

  test('debe de mostrar el ícono por defecto', () => {

    wrapper = shallowMount( Fab )

    const icon = wrapper.find('i')

    expect( icon.classes('fa-plus') ).toBeTruthy()
  
    // fa-plus

  })

  test('debe de mostrar el ícono por argumento: fa-cicle', () => {

    wrapper = shallowMount( Fab, {
      props: {
        icon: 'fa-cicle'
      }
    })

    const icon = wrapper.find('i')

    expect( icon.classes('fa-cicle') ).toBeTruthy()

    // fa-cicle

  })

  test('debe de emitir el evento on:click cuando se hace click', () => {

    wrapper = shallowMount( Fab )

    wrapper.find('button').trigger('click')

    expect( wrapper.emitted('on:click') ).toHaveLength(1)

  })


})


