import { createPool } from 'mysql12/promise'

export const pool = createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'arifureta123$',
    port: 3306,
    database: 'mantenimiento'
})