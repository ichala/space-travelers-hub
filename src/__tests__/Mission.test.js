
import { Provider } from 'react-redux';
import renderer  from 'react-test-renderer';
import Missions from '../Components/Missions/Missions';
import store from '../Redux/configureStore';


it('Missions Components Renders correctly',()=>{
    const tree = renderer.create(
       <Provider store={store}><Missions /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
})