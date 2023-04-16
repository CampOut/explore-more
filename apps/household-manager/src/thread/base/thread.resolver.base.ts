/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateThreadArgs } from "./CreateThreadArgs";
import { UpdateThreadArgs } from "./UpdateThreadArgs";
import { DeleteThreadArgs } from "./DeleteThreadArgs";
import { ThreadFindManyArgs } from "./ThreadFindManyArgs";
import { ThreadFindUniqueArgs } from "./ThreadFindUniqueArgs";
import { Thread } from "./Thread";
import { NoteFindManyArgs } from "../../note/base/NoteFindManyArgs";
import { Note } from "../../note/base/Note";
import { CorkBoard } from "../../corkBoard/base/CorkBoard";
import { ThreadService } from "../thread.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Thread)
export class ThreadResolverBase {
  constructor(
    protected readonly service: ThreadService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "read",
    possession: "any",
  })
  async _threadsMeta(
    @graphql.Args() args: ThreadFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Thread])
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "read",
    possession: "any",
  })
  async threads(@graphql.Args() args: ThreadFindManyArgs): Promise<Thread[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Thread, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "read",
    possession: "own",
  })
  async thread(
    @graphql.Args() args: ThreadFindUniqueArgs
  ): Promise<Thread | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Thread)
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "create",
    possession: "any",
  })
  async createThread(@graphql.Args() args: CreateThreadArgs): Promise<Thread> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        corkboard: {
          connect: args.data.corkboard,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Thread)
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "update",
    possession: "any",
  })
  async updateThread(
    @graphql.Args() args: UpdateThreadArgs
  ): Promise<Thread | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          corkboard: {
            connect: args.data.corkboard,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Thread)
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "delete",
    possession: "any",
  })
  async deleteThread(
    @graphql.Args() args: DeleteThreadArgs
  ): Promise<Thread | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Note])
  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "read",
    possession: "any",
  })
  async notes(
    @graphql.Parent() parent: Thread,
    @graphql.Args() args: NoteFindManyArgs
  ): Promise<Note[]> {
    const results = await this.service.findNotes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CorkBoard, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CorkBoard",
    action: "read",
    possession: "any",
  })
  async corkboard(@graphql.Parent() parent: Thread): Promise<CorkBoard | null> {
    const result = await this.service.getCorkboard(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
