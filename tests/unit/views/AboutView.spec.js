import { shallowMount } from '@vue/test-utils'
import AboutView from '@/views/AboutView'


let wrapper

describe('Preuebas en el AboutView', () => {

  test('Debe de renderizar el componente correctamente', () => {
    wrapper = shallowMount( AboutView )

    expect(wrapper.html()).toMatchSnapshot()

  })


})