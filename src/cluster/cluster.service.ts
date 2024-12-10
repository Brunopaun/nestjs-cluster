/* eslint-disable @typescript-eslint/no-require-imports */
import { Injectable } from '@nestjs/common';
const cluster = require(`cluster`);
import { availableParallelism } from 'node:os';
const process = require(`process`);

@Injectable()
export class ClusterService {
  clusterize(callback: any) {
    const numCPUs = availableParallelism();
    if (cluster.isPrimary) {
      console.log(`Primary ${process.pid} is running`);

      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }

      cluster.on('exit', (worker) => {
        console.log(`worker ${worker.process.pid} died`);
      });
    } else {
      callback();
      console.log(`Worker ${process.pid} started`);
    }
  }
}
