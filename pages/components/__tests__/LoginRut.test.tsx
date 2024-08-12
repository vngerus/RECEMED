import { render, screen, fireEvent } from '@testing-library/react';
import LoginRUT from '../LoginRut';
import { useAuthContext } from '../../hook/authContext';
import Cookies from 'js-cookie';
import mockLocation from '../__mocks__/location';

jest.mock('../../hook/authContext');
jest.mock('js-cookie');

describe('LoginRUT Component', () => {
    const setRut = jest.fn();

    beforeEach(() => {
        (useAuthContext as jest.Mock).mockReturnValue({ setRut });
        (Cookies.set as jest.Mock).mockClear();
        setRut.mockClear();
        mockLocation.assign.mockClear(); // Limpiar el mock antes de cada prueba
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('renders the RUT input and button', () => {
        render(<LoginRUT />);

        const inputElement = screen.getByPlaceholderText(/Ingresa su Rut/i);
        const buttonElement = screen.getByText(/siguiente/i);

        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    it('shows an error when RUT is not entered', () => {
        const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();

        render(<LoginRUT />);

        const buttonElement = screen.getByText(/siguiente/i);
        fireEvent.click(buttonElement);

        expect(consoleErrorMock).toHaveBeenCalledWith('Por favor, ingrese su RUT.');

        consoleErrorMock.mockRestore();
    });

    it('sets the RUT in cookies and redirects when RUT is entered', () => {
        render(<LoginRUT />);

        const inputElement = screen.getByPlaceholderText(/Ingresa su Rut/i);
        const buttonElement = screen.getByText(/siguiente/i);

        fireEvent.change(inputElement, { target: { value: '12345678-9' } });
        fireEvent.click(buttonElement);

        expect(setRut).toHaveBeenCalledWith('12345678-9');
        expect(Cookies.set).toHaveBeenCalledWith('userRUT', '12345678-9');
        expect(mockLocation.assign).toHaveBeenCalledWith('/password');
    });
});
