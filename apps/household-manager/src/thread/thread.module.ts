import { Module } from "@nestjs/common";
import { ThreadModuleBase } from "./base/thread.module.base";
import { ThreadService } from "./thread.service";
import { ThreadController } from "./thread.controller";
import { ThreadResolver } from "./thread.resolver";

@Module({
  imports: [ThreadModuleBase],
  controllers: [ThreadController],
  providers: [ThreadService, ThreadResolver],
  exports: [ThreadService],
})
export class ThreadModule {}
