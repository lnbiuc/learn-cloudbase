'use strict';
const cloudbase = require('@cloudbase/node-sdk')

const app = cloudbase.init({})
const db = app.database();

exports.main = async (event, context) => {
    const res = await db
        .collection("user")
        .get()
    return {
        res
    }
};
