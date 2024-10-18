import axios from 'axios';

jest.mock('axios');

describe('fetchData', () => {
    test('should return data when API call is successful', async () => {
        const mockData = { name: 'qwertyui', id: 1 };
        (axios.get as jest.Mock).mockResolvedValue(mockData);

        const token = await axios.post(
            'https://www.backendus.com/auth/token',
            new URLSearchParams({
                username: 'qwertyui',
                password: '12345678'
            })
        );

        const response1 = await axios.get('https://www.backendus.com/auth/user_info', {
            withCredentials: true
        });
        const response2 = await axios.get('https://www.backendus.com/books', {
            withCredentials: true
        });

        expect(response1).toEqual(mockData);
        expect(response2).toBeDefined();
    });
});
