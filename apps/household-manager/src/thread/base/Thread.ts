/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CorkBoard } from "../../corkBoard/base/CorkBoard";
import { ValidateNested, IsDate, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Note } from "../../note/base/Note";

@ObjectType()
class Thread {
  @ApiProperty({
    required: true,
    type: () => CorkBoard,
  })
  @ValidateNested()
  @Type(() => CorkBoard)
  corkboard?: CorkBoard;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Note],
  })
  @ValidateNested()
  @Type(() => Note)
  @IsOptional()
  notes?: Array<Note>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  topic!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Thread as Thread };
