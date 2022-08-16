import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';

import { CustomersResolver } from '../graphql/resolvers/customers.resolver';
import { PurchasesResolver } from '../graphql/resolvers/purchases.resolver';
import { ProductsResolver } from '../graphql/resolvers/products.resolver';
import { CustomersService } from '../services/customers.service';
import { ProductsService } from '../services/products.service';
import { PurchasesService } from '../services/purchase.service';

import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    ProductsResolver,
    ProductsService,

    PurchasesResolver,
    PurchasesService,

    CustomersResolver,
    CustomersService,
  ],
})
export class HttpModule {}
