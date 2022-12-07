
const pool = require('../config/db');
class Posts {
    constructor(title , body) {
        this.title = title;
        this.body = body;
    }

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createAtDate = `${yyyy}-${mm}-${dd}`;
        let sql = `
            INSERT INTO post(title,body,create_at)VALUES(
                '${this.title}',
                '${this.body}',
                '${createAtDate}'
            )
        `
        const [newPost,_] = await pool.execute(sql);
            return newPost;
    }

    static getAllPost() {
        const sql = `SELECT * FROM post;`;
        return pool.execute(sql);
    }
    static getPostById(id) {
        const sql = `SELECT * FROM post WHERE id=${id};`;
        return pool.execute(sql);
    }
}

module.exports = Posts;