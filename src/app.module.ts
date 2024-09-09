import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TecnologiesModule } from './app/tecnologies/tecnologies.module';
import { ProjectsModule } from './app/projects/projects.module';
import { Tecnology } from './Entities/Tecnology.entity';
import { Project } from './Entities/Project.entity';

@Module({
  imports: [
    // Configuração do modulo
    ConfigModule.forRoot({
      // define como global
      isGlobal: true,
      // define caminho para as variaveis de ambiente
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    // injeção de dependencias para utilizar arquivos de ambiente
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          // pega o valor da variavel de ambiente
          database: config.get<string>('DB_NAME'),
          // Sincroniza as alterações das entitades com o banco de dados
          synchronize: true,
          entities: [Tecnology, Project],
        };
      },
    }),
    // Modulos de cada rota
    TecnologiesModule,
    ProjectsModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // Aplica os middlewares para todas as rotas.
    consumer.apply().forRoutes('*');
  }
}
