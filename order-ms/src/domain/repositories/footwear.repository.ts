
import { FootwearDataSource } from '../datasources/footwear.datasource';
// data source (mongp, mysql, etc)
// import { otherDataSource } from '../../infrastructure/datasources/other.datasource.impl';

// postgre
import { postgreFootwearDataSource as dataSource } from '../../infrastructure/datasources/postgre/postgre.footwear.datasource.impl';

export const FootwearRepository: FootwearDataSource = dataSource;


