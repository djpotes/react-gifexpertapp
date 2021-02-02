const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")

describe('Pruebas del component <GifGridItem />', () =>{

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    test('Debe de mostrar el component correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con el título', () => {
       const p = wrapper.find('p');
       expect(p.text().trim()).toBe(title);
    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Div debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toContain("animate__fadeIn");
    });


})