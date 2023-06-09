/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ThreadService } from "../thread.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ThreadCreateInput } from "./ThreadCreateInput";
import { ThreadWhereInput } from "./ThreadWhereInput";
import { ThreadWhereUniqueInput } from "./ThreadWhereUniqueInput";
import { ThreadFindManyArgs } from "./ThreadFindManyArgs";
import { ThreadUpdateInput } from "./ThreadUpdateInput";
import { Thread } from "./Thread";
import { NoteFindManyArgs } from "../../note/base/NoteFindManyArgs";
import { Note } from "../../note/base/Note";
import { NoteWhereUniqueInput } from "../../note/base/NoteWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ThreadControllerBase {
  constructor(
    protected readonly service: ThreadService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Thread })
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ThreadCreateInput): Promise<Thread> {
    return await this.service.create({
      data: {
        ...data,

        corkboard: {
          connect: data.corkboard,
        },
      },
      select: {
        corkboard: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        topic: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Thread] })
  @ApiNestedQuery(ThreadFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Thread[]> {
    const args = plainToClass(ThreadFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        corkboard: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        topic: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Thread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ThreadWhereUniqueInput
  ): Promise<Thread | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        corkboard: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        topic: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Thread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ThreadWhereUniqueInput,
    @common.Body() data: ThreadUpdateInput
  ): Promise<Thread | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          corkboard: {
            connect: data.corkboard,
          },
        },
        select: {
          corkboard: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          topic: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Thread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ThreadWhereUniqueInput
  ): Promise<Thread | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          corkboard: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          topic: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/notes")
  @ApiNestedQuery(NoteFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "read",
    possession: "any",
  })
  async findManyNotes(
    @common.Req() request: Request,
    @common.Param() params: ThreadWhereUniqueInput
  ): Promise<Note[]> {
    const query = plainToClass(NoteFindManyArgs, request.query);
    const results = await this.service.findNotes(params.id, {
      ...query,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        text: true,

        thread: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/notes")
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "update",
    possession: "any",
  })
  async connectNotes(
    @common.Param() params: ThreadWhereUniqueInput,
    @common.Body() body: NoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notes: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/notes")
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "update",
    possession: "any",
  })
  async updateNotes(
    @common.Param() params: ThreadWhereUniqueInput,
    @common.Body() body: NoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notes: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/notes")
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "update",
    possession: "any",
  })
  async disconnectNotes(
    @common.Param() params: ThreadWhereUniqueInput,
    @common.Body() body: NoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notes: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
