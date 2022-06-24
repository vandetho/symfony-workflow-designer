import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Application from '../renderer/Application';

describe('App', () => {
    it('should render', () => {
        expect(render(<Application />)).toBeTruthy();
    });
});
