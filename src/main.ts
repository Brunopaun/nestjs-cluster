import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClusterService } from './cluster/cluster.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const initApp = async function (port) {
    process.env.PORT = port;
    await app.listen(process.env.PORT);
  };

  const cluster = app.get(ClusterService);

  cluster.clusterize(initApp);
}

bootstrap();
