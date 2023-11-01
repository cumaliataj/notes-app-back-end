class UserController {
    getUser(request, h) {
        const users = [
            {
                id: '1',
                name: 'faisal'
            },
            {
                id: '2',
                name: 'sidik'
            },
            {
                id: '3',
                name: 'dani'
            },
        ];

        return users;
    }
    getUserById(request,h){
        const users = [
            {
                id: '1',
                name: 'faisal'
            },
            {
                id: '2',
                name: 'sidik'
            },
            {
                id: '3',
                name: 'dani'
            },
        ];
        const userId = request.params.id;
        const data = users.find(user=>user.id==userId) ?? {data:"not found"};
        return data;
    }
}

module.exports = new UserController();