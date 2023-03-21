'use strict';
const cloudbase = require('@cloudbase/node-sdk')

const app = cloudbase.init({})
const db = app.database();

exports.main = async (event, context) => {
    const now = new Date()
    db.collection('user').add(
        {
            "id": 2,
            "name": "Sarah",
            "age": 33,
            "email": "Sarah@mail.com",
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
