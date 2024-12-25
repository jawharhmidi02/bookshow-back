"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.getUserByEmail = getUserByEmail;
exports.updateUserById = updateUserById;
exports.updateUserPfpById = updateUserPfpById;
exports.deleteUser = deleteUser;
const connect_1 = require("../db/connect");
const users_1 = require("../schema/users");
const drizzle_orm_1 = require("drizzle-orm");
const crypto_1 = require("crypto");
const cloudinary_1 = require("cloudinary");
const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.CRYPTO_SECRET_KEY, 'hex');
const iv = (0, crypto_1.randomBytes)(16);
function encrypt(text) {
    let cipher = (0, crypto_1.createCipheriv)(algorithm, key, iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}
function decrypt(text) {
    let textParts = text.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = (0, crypto_1.createDecipheriv)(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
async function createUser(data) {
    data.password = encrypt(data.password);
    const response = await connect_1.db.insert(users_1.users).values(data).returning();
    return response;
}
async function getUserByEmail(email, password) {
    const user = await connect_1.db.select().from(users_1.users).where((0, drizzle_orm_1.eq)(users_1.users.email, email));
    if (decrypt(user[0].password) === password) {
        return user;
    }
    return [];
}
async function updateUserById(id, data) {
    const response = await connect_1.db.update(users_1.users).set(data).where((0, drizzle_orm_1.eq)(users_1.users.id_user, id)).returning();
    return response;
}
async function updateUserPfpById(id, file) {
    cloudinary_1.v2.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const uploadResult = await new Promise((resolve, reject) => {
        cloudinary_1.v2.uploader
            .upload_stream({ folder: 'recipevault' }, (error, result) => {
            if (error)
                return reject(error);
            resolve(result);
        })
            .end(file.buffer);
    });
    const dbResponse = await connect_1.db.update(users_1.users).set({ cover_photo: uploadResult.secure_url }).where((0, drizzle_orm_1.eq)(users_1.users.id_user, id)).returning();
    return dbResponse;
}
async function deleteUser(id) {
    const response = await connect_1.db.delete(users_1.users).where((0, drizzle_orm_1.eq)(users_1.users.id_user, id)).returning();
    return response;
}
//# sourceMappingURL=users.js.map