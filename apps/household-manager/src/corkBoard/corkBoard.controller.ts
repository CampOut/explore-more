import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CorkBoardService } from "./corkBoard.service";
import { CorkBoardControllerBase } from "./base/corkBoard.controller.base";

@swagger.ApiTags("corkBoards")
@common.Controller("corkBoards")
export class CorkBoardController extends CorkBoardControllerBase {
  constructor(
    protected readonly service: CorkBoardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
