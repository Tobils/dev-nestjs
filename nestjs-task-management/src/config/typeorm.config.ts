import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'

// config orm
export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'tobil',
    password: 'root',
    database: 'taskmanagement',
    // entities: [__dirname + '../tasks/**/*.entity.ts'],
    synchronize: true, 
    autoLoadEntities: true,
}
