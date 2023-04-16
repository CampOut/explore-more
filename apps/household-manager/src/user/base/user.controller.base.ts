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
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { UserWhereInput } from "./UserWhereInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserUpdateInput } from "./UserUpdateInput";
import { User } from "./User";
import { CorkBoardFindManyArgs } from "../../corkBoard/base/CorkBoardFindManyArgs";
import { CorkBoard } from "../../corkBoard/base/CorkBoard";
import { CorkBoardWhereUniqueInput } from "../../corkBoard/base/CorkBoardWhereUniqueInput";
import { NoteFindManyArgs } from "../../note/base/NoteFindManyArgs";
import { Note } from "../../note/base/Note";
import { NoteWhereUniqueInput } from "../../note/base/NoteWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.create({
      data: {
        ...data,

        household: data.household
          ? {
              connect: data.household,
            }
          : undefined,
      },
      select: {
        avatar: true,
        bio: true,
        createdAt: true,
        firstName: true,

        household: {
          select: {
            id: true,
          },
        },

        id: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        avatar: true,
        bio: true,
        createdAt: true,
        firstName: true,

        household: {
          select: {
            id: true,
          },
        },

        id: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        avatar: true,
        bio: true,
        createdAt: true,
        firstName: true,

        household: {
          select: {
            id: true,
          },
        },

        id: true,
        roles: true,
        updatedAt: true,
        username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          household: data.household
            ? {
                connect: data.household,
              }
            : undefined,
        },
        select: {
          avatar: true,
          bio: true,
          createdAt: true,
          firstName: true,

          household: {
            select: {
              id: true,
            },
          },

          id: true,
          roles: true,
          updatedAt: true,
          username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          avatar: true,
          bio: true,
          createdAt: true,
          firstName: true,

          household: {
            select: {
              id: true,
            },
          },

          id: true,
          roles: true,
          updatedAt: true,
          username: true,
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
  @common.Get("/:id/corkBoards")
  @ApiNestedQuery(CorkBoardFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CorkBoard",
    action: "read",
    possession: "any",
  })
  async findManyCorkBoards(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<CorkBoard[]> {
    const query = plainToClass(CorkBoardFindManyArgs, request.query);
    const results = await this.service.findCorkBoards(params.id, {
      ...query,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        household: {
          select: {
            id: true,
          },
        },

        id: true,
        topic: true,
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

  @common.Post("/:id/corkBoards")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectCorkBoards(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CorkBoardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      corkBoards: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/corkBoards")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateCorkBoards(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CorkBoardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      corkBoards: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/corkBoards")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectCorkBoards(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CorkBoardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      corkBoards: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
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
    @common.Param() params: UserWhereUniqueInput
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectNotes(
    @common.Param() params: UserWhereUniqueInput,
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateNotes(
    @common.Param() params: UserWhereUniqueInput,
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectNotes(
    @common.Param() params: UserWhereUniqueInput,
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
