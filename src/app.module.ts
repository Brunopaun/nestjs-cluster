import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClusterModule } from './cluster/cluster.module';
import { ClusterService } from './cluster/cluster.service';

@Module({
  imports: [ClusterModule],
  controllers: [AppController],
  providers: [AppService, ClusterService],
})
export class AppModule { }
