import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import BoardsMenu from './components/BoardsMenu'

Enzyme.configure({adapter: new Adapter()})

const initialState = require('../api/state')
const mockStore = configureMockStore()
const store = mockStore(initialState)

describe('BoardsMenu Component', () => {

  const BoardsMenuComp = shallow(<BoardsMenu />, {context: {store}})

  it('Render BoardsMenu Component', () => {
    expect(BoardsMenuComp.dive().find('.boards-cont')).toHaveLength(1)
    expect(BoardsMenuComp.dive().find('.board-item')).toHaveLength(initialState.boards.length)
    expect(BoardsMenuComp.dive().find('.add-card-button')).toHaveLength(1)
  })
})