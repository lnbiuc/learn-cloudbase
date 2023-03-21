'use strict';
const cloudbase = require('@cloudbase/node-sdk')

const app = cloudbase.init({})
const db = app.database();

exports.main = async (event, context) => {
    const res = await db.collection('user')
        .orderBy('id','desc')
        .limit(1)
        .get()
    const id = res.data[0].id + 1
    const now = new Date()
    db.collection('user').add(
        {
            "id": id,
            "name": generateRandomString(),
            "age": 33,
            "email": generateRandomString() + "@mail.com",
            "role": [
                {
                    "permission_level": 2,
                    "name": "user"
                },
                {
                    "permission_level": 3,
                    "name": "admin"
                }
            ],
            "isBlock": false,
            "lastLogin": now
        }
    ).then(res => {
        return res
    })
    return 'finish'
};

function generateRandomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}