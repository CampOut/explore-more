import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CorkBoardResolverBase } from "./base/corkBoard.resolver.base";
import { CorkBoard } from "./base/CorkBoard";
import { CorkBoardService } from "./corkBoard.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CorkBoard)
export class CorkBoardResolver extends CorkBoardResolverBase {
  constructor(
    protected readonly service: CorkBoardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
