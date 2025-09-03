import { IsString, IsNumber, IsNotEmpty, Min } from "class-validator";

export class UpdateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @Min(0)
    price: number;
}