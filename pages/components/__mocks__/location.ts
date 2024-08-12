const mockLocation = {
    assign: jest.fn(),
};

global.window = Object.create(window);
Object.defineProperty(global.window, 'location', {
    value: mockLocation,
    writable: true,
});

export default mockLocation;