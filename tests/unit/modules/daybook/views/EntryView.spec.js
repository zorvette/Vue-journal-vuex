import { createStore } from "vuex"
import { journalState } from '../../../mock-data/test-journal-state'
import { shallowMount } from "@vue/test-utils"

import EntryView from '@/modules/daybook/views/EntryView'
import journal from '@/modules/daybook/store/journal'

const createVuexStore = ( initialState ) => createStore({
    modules: {
      journal: {
        ...journal,
        state: { ...initialState }
      }
    }
  })

describe('Pruebas en el EntryView', () => {

  const store = createVuexStore( journalState )
  const mockRouter = {
    push: jest.fn()
  }

  let wrapper 

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallowMount( EntryView, {
      props: {
        id: '-NABKuq_QjuYAu8W945Y'
      },
      global: {
        mocks: {
          $router: mockRouter
        },
        plugins: [ store ]
      }
    })
  })

  test('debe de sacar al usuario porque el id no existe', () => {

    const wrapper = shallowMount( EntryView, {
      props: {
        id: 'Este ID no existe en el STORE'
      },
      global: {
        mocks: {
          $router: mockRouter
        },
        plugins: [ store ]
      }
    })

    expect( mockRouter.push ).toHaveBeenLastCalledWith({ name: 'no-entry' })

  })


})