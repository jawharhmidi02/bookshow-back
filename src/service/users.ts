import { db } from '../db/connect';
import { InsertUsers, users, SelectUsers } from '../schema/users';
import { and, eq } from 'drizzle-orm';
import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.CRYPTO_SECRET_KEY, 'hex');
const iv = randomBytes(16);

function encrypt(text: string) {
  let cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text: string) {
  let textParts = text.split(':');
  let iv = Buffer.from(textParts.shift(), 'hex');
  let encryptedText = Buffer.from(textParts.join(':'), 'hex');
  let decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

export async function createUser(data: InsertUsers) {
  data.password = encrypt(data.password);
  const response = await db.insert(users).values(data).returning();
  return response;
}

export async function getUserByEmail(email: SelectUsers['email'], password: SelectUsers['password']) {
  const user = await db.select().from(users).where(eq(users.email, email));
  if (decrypt(user[0].password) === password) {
    return user;
  }
  return [];
}

export async function updateUserById(id: SelectUsers['id_user'], data: Partial<Omit<SelectUsers, 'id_user'>>) {
  const response = await db.update(users).set(data).where(eq(users.id_user, id)).returning();
  return response;
}

export async function updateUserPfpById(id: SelectUsers['id_user'], file: any) {
    
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const uploadResult = await new Promise<UploadApiResponse>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: 'recipevault' }, (error, result) => {
            if (error) return reject(error);
            resolve(result);
          })
          .end(file.buffer);
      },
    );


    const dbResponse = await db.update(users).set({ cover_photo: uploadResult.secure_url }).where(eq(users.id_user, id)).returning();
    return dbResponse;
}

export async function deleteUser(id: SelectUsers['id_user']) {
  const response = await db.delete(users).where(eq(users.id_user, id)).returning();
  return response;
}
