const jamp3 = {
    index: (req, res) => {
        res.render('home', {title: 'jamp3'});
    },
    menu: (req, res) => {
        res.render('menu', {title: 'jamp3'});
    },
    services: (req, res) => {
        res.render('services', {title: 'jamp3'});
    },
    blog: (req, res) => {
        res.render('blog', {title: 'jamp3'});
    },
    about: (req, res) => {
        res.render('about', {title: 'jamp3'});
    },
    contact: (req, res) => {
        res.render('contact', {title: 'jamp3'});
    }
};

module.exports = jamp3;