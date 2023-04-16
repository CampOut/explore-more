import { Module } from "@nestjs/common";
import { CorkBoardModuleBase } from "./base/corkBoard.module.base";
import { CorkBoardService } from "./corkBoard.service";
import { CorkBoardController } from "./corkBoard.controller";
import { CorkBoardResolver } from "./corkBoard.resolver";

@Module({
  imports: [CorkBoardModuleBase],
  controllers: [CorkBoardController],
  providers: [CorkBoardService, CorkBoardResolver],
  exports: [CorkBoardService],
})
export class CorkBoardModule {}
