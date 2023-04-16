import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CorkBoardServiceBase } from "./base/corkBoard.service.base";

@Injectable()
export class CorkBoardService extends CorkBoardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
