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
import { IsString, IsOptional, ValidateNested, IsJSON } from "class-validator";
import { CorkBoardCreateNestedManyWithoutUsersInput } from "./CorkBoardCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { HouseholdWhereUniqueInput } from "../../household/base/HouseholdWhereUniqueInput";
import { NoteCreateNestedManyWithoutUsersInput } from "./NoteCreateNestedManyWithoutUsersInput";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  avatar?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio?: string | null;

  @ApiProperty({
    required: false,
    type: () => CorkBoardCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CorkBoardCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CorkBoardCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  corkBoards?: CorkBoardCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

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
  household?: HouseholdWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => NoteCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => NoteCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => NoteCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  notes?: NoteCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { UserCreateInput as UserCreateInput };