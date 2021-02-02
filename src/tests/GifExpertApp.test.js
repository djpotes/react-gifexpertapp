import '@testing-library/jest-dom'

import GifExpertApp from '../GifExpertApp';
import {shallow}  from "enzyme"

describe('Pruebas del component <GifExpertApp />', () =>{

    let wrapper;
    test('Debe de mostrar el component correctamente', () => {
        wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', "Hello"]
        wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length)
    });
})