const peopleController= require("../Controllers/peopleController");

module.exports =[
    {
        method: 'GET',
        path: '/people/{name?}',
        handler:peopleController.peopleLang
    }
];