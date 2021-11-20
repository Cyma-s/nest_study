import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type : 'mysql',
    host : 'localhost', 
    port : 3306, 
    username : 'root', 
    password : 'root', 
    database : 'study_simpleboard',
    entities : ["dist/**/*.entity{.ts,.js}"], 
    synchronize : true
}