const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

function loadCombinedDatabase() {
    const coursesPath = path.join(__dirname, 'data', 'courses.json');
    const quizzesPath = path.join(__dirname, 'data', 'quizzes.json');
    const flashcardsPath = path.join(__dirname, 'data', 'flashcards.json');

    const courses = fs.existsSync(coursesPath) ? JSON.parse(fs.readFileSync(coursesPath, 'utf8')) : [];
    const quizzes = fs.existsSync(quizzesPath) ? JSON.parse(fs.readFileSync(quizzesPath, 'utf8')) : [];
    const flashcard_decks = fs.existsSync(flashcardsPath) ? JSON.parse(fs.readFileSync(flashcardsPath, 'utf8')) : [];

    return {
        courses,
        quizzes,
        flashcard_decks
    };
}

const initialDb = loadCombinedDatabase();
const router = jsonServer.router(initialDb);


server.use(middlewares);


router.db._.id = "id";
router.render = (req, res) => {
    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
        const currentDbData = router.db.getState();

        fs.writeFileSync(path.join(__dirname, 'data', 'courses.json'), JSON.stringify(currentDbData.courses, null, 2));
        fs.writeFileSync(path.join(__dirname, 'data', 'quizzes.json'), JSON.stringify(currentDbData.quizzes, null, 2));
        fs.writeFileSync(path.join(__dirname, 'data', 'flashcards.json'), JSON.stringify(currentDbData.flashcard_decks, null, 2));


    }
    res.jsonp(res.locals.data);
};

server.use(router);


const PORT = 8080;
server.listen(PORT, () => {
    console.log(`
  
     EduPulse API Server đang chạy tại: http://localhost:${PORT}
   
    `);

});