const repository = require('./user_data_repository');


test('query uesr', () => {
    return repository.fetchUserData(10).then(data => {
        expect(data).toBe('hello');
    });
});