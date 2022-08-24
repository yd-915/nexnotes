const TABLE_NAME = 'all-for-you';
const config = {
    PORT: process.env.PORT || '0.0.0.0',
    //DB_CONNECTION: `mongodb://localhost/${TABLE_NAME}`,
    DB_CONNECTION: `mongodb+srv://dy707:Draze999@cluster0.ruqu4pf.mongodb.net/?retryWrites=true&w=majority`,
    SECRET: 'badumts',
    SALT: 10,
    COOKIE_NAME: 'USER_SESSION',
    CLOUDINARY_NAME: 'dulmusxxc',
    CLOUDINARY_API_KEY: 359525114473425,
    CLOUDINARY_API_SECRET: '3hra-Y3Je0Xl8O0vrVsewnhWXCI',
    CLOUDINARY_STORAGE: 'pza5zln6'

}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/client/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
} else {
    app.get("/", (req, res) => {
        res.send("DB running")
    })
}
module.exports = config;
