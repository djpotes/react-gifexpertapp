import '@testing-library/jest-dom'

import {GifGrid} from "../../components/GifGrid"
import {shallow}  from "enzyme"
import {useFetchGifs} from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas del component <GifGrid />', () =>{

    const category = 'Hola Mundo';
    let wrapper;
    test('Debe de mostrar el component correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs =  [{
            id: 'ABC',
            url: 'https://localhost/casas.jpg',
            title: 'Casa'
        },
        {
            id: '123',
            url: 'https://localhost/casas.jpg',
            title: 'Casa'
        }
        ]
        useFetchGifs.mockReturnValue({data:gifs,loadig:false})
        wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    });
})