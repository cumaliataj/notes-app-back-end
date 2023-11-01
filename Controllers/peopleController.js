class PeopleController {
    peopleLang(request,h) {
        const {name} = request.params;
        const {lang} =request.query;
        console.log(lang);
        return name;
    }
}

module.exports = new PeopleController();