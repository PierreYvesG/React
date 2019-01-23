/*Globals test expect */

import MyStyledComponent from './my-styled-component'
import renderer from 'react-test-renderer'

test ('Navbar snapshot',() => {
    const component = renderer.create(<MyStyledComponent />)

    let tree = component.toJSON()

    // Vérifier que le composant n'a pas changé depuis le dernier snapshot
    expect(tree).toMatchSnapshot()
})