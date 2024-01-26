import * as SQLite from 'expo-sqlite';

let db;
export const initDB = async () => {
  db = SQLite.openDatabase('TodoDatabase');
}

const readOnly = true;
await db.transactionAsync(async tx => {
  const result = await tx.executeSqlAsync('SELECT COUNT(*) FROM USERS', []);
  console.log('Count:', result.rows[0]['COUNT(*)']);
}, readOnly);
