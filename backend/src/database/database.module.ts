import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { Db, MongoClient } from 'mongodb';

// import { DatabaseService } from './database.service';

@Module({
  providers: [
    // DatabaseService,
    {
      provide: 'MONGODB_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          const client = await MongoClient.connect('mongodb://localhost:27017');
          const db = client.db('shop');
          const answer = db
            .collection('users')
            .aggregate()
            .toArray()
            .then((data) => {
              console.log(data.length);
            });
          return db;
        } catch (e) {
          throw e;
        }
      },
    },
  ],
  exports: ['MONGODB_CONNECTION'],
})
export class DatabaseModule {}
