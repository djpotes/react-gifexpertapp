const { useFetchGifs } = require("../../hooks/useFetchGifs");

import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hooks  useFetchGifs', () =>{
    test('Debe de retornar el estado inicial', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading} = result.current;
        await waitForNextUpdate(); //Esperar que se haga el update antes de que se limpie cualquier cosa de custom hook
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    test('Debe de retornar un arreglo de imagenes y loading false', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });
})