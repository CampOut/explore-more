/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { HouseholdWhereUniqueInput } from "../../household/base/HouseholdWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ThreadListRelationFilter } from "../../thread/base/ThreadListRelationFilter";

@InputType()
class CorkBoardWhereInput {
  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  createdBy?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => HouseholdWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HouseholdWhereUniqueInput)
  @IsOptional()
  @Field(() => HouseholdWhereUniqueInput, {
    nullable: true,
  })
  household?: HouseholdWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ThreadListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ThreadListRelationFilter)
  @IsOptional()
  @Field(() => ThreadListRelationFilter, {
    nullable: true,
  })
  threads?: ThreadListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  topic?: StringFilter;
}

export { CorkBoardWhereInput as CorkBoardWhereInput };