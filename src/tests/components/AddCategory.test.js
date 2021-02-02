import AddCategory from "../../components/AddCategory"
import {shallow}  from "enzyme"

describe('Pruebas del component <AddCategory />', () =>{

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    });
    test('Debe de mostrar el component correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change', { target: {value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la info obsubmit', () => {
        const form = wrapper.find('form');
        form.simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo'
        wrapper.find('input').simulate('change', { target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        //expect(setCategories).toHaveBeenCalledTimes(1);
        //expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    });
})