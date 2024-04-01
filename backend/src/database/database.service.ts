// import { Injectable } from '@nestjs/common';
// import { Db, MongoClient } from 'mongodb';

// @Injectable()
// export class DatabaseService {
//   public db: Db;
//   private mongoClient: MongoClient;
//   public testString = 'asdf';
//   private connection: MongoClient;

//   async onModuleInit() {
//     // await this.setConnection();
//   }
//   getDb() {
//     return this.db;
//   }
//   getTestString() {
//     return this.testString;
//   }

//   async connect(): Promise<MongoClient> {
//     this.mongoClient = await MongoClient.connect(
//       this.configService.getMongoUrl(),
//     );
//     this.db = await this.mongoClient.db(this.configService.getMongoDbName());

//     this.testString = 'new';

//     return this.mongoClient;
//   }
//   getMongoClient(): MongoClient {
//     return this.mongoClient;
//   }

//   async setConnection() {
//     console.log(
//       `this.configService.getMongoUrl()`,
//       this.configService.getMongoUrl(),
//     );
//     const mongoClient = new MongoClient(this.configService.getMongoUrl());
//     await mongoClient.connect();
//     const db = await mongoClient.db(this.configService.getMongoDbName());
//     const test = db.collection('users').find();
//     console.log(`test`, test);
//     this.mongoClient = await mongoClient;
//     this.db = await db;
//     this.test();
//     return;
//   }
//   async getNewConnection() {
//     const mongoClient = new MongoClient(this.configService.getMongoUrl());
//     await mongoClient.connect();
//     const db = mongoClient.db();

//     return { db: db, mongoClient: mongoClient };
//   }
//   async test() {
//     console.log(
//       `this.db.collection('users').count()`,
//       await this.db.collection(USERS).count(),
//     );
//   }
// }
