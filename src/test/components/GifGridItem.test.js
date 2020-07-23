import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://danieromeroag.web.app';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de tener un parrafo con el titulo (title)', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.prop('src'));

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('debe tener animate__fadeInTopLeft', () => {
        const div = wrapper.find('div');

        // const clases = div.prop('className').split(' ');
        const clases = div.prop('className');

        // console.log(clases[2]);
        // expect(clases[2]).toBe('animate__fadeInTopLeft');
        expect(clases.includes('animate__fadeInTopLeft')).toBe(true);


    });




});
