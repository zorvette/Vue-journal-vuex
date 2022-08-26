import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView'


let wrapper

describe('Preuebas en el HomeView', () => {

  test('Debe de renderizar el componente correctamente', () => {
    wrapper = shallowMount( HomeView )
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Hacer click en un boton debe de redireccionar a no-entry', () => {

    const mockRouter = {
      push: jest.fn()
    }

    wrapper = shallowMount( HomeView, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    } )

    wrapper.find('button').trigger('click')

    expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'no-entry' })


  })


})