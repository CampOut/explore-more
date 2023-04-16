/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CorkBoard, Thread, User, Household } from "@prisma/client";

export class CorkBoardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CorkBoardFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CorkBoardFindManyArgs>
  ): Promise<number> {
    return this.prisma.corkBoard.count(args);
  }

  async findMany<T extends Prisma.CorkBoardFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CorkBoardFindManyArgs>
  ): Promise<CorkBoard[]> {
    return this.prisma.corkBoard.findMany(args);
  }
  async findOne<T extends Prisma.CorkBoardFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CorkBoardFindUniqueArgs>
  ): Promise<CorkBoard | null> {
    return this.prisma.corkBoard.findUnique(args);
  }
  async create<T extends Prisma.CorkBoardCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CorkBoardCreateArgs>
  ): Promise<CorkBoard> {
    return this.prisma.corkBoard.create<T>(args);
  }
  async update<T extends Prisma.CorkBoardUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CorkBoardUpdateArgs>
  ): Promise<CorkBoard> {
    return this.prisma.corkBoard.update<T>(args);
  }
  async delete<T extends Prisma.CorkBoardDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CorkBoardDeleteArgs>
  ): Promise<CorkBoard> {
    return this.prisma.corkBoard.delete(args);
  }

  async findThreads(
    parentId: string,
    args: Prisma.ThreadFindManyArgs
  ): Promise<Thread[]> {
    return this.prisma.corkBoard
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .threads(args);
  }

  async getCreatedBy(parentId: string): Promise<User | null> {
    return this.prisma.corkBoard
      .findUnique({
        where: { id: parentId },
      })
      .createdBy();
  }

  async getHousehold(parentId: string): Promise<Household | null> {
    return this.prisma.corkBoard
      .findUnique({
        where: { id: parentId },
      })
      .household();
  }
}