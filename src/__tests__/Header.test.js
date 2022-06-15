
import { HashRouter as Router } from 'react-router-dom';
import renderer  from 'react-test-renderer';
import Header from '../Components/Header/Header';


it('Header Components Renders correctly',()=>{
    const tree = renderer.create(
       <Router><Header /></Router>).toJSON();
        expect(tree).toMatchSnapshot();
})