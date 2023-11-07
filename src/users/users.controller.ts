import { Body, Controller, Delete, Get, Inject, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController{
    @Inject()
    private usersService: UsersService
    constructor(){}

    @Get()
    async find(){
        const data = await this.usersService.find();
        return data

    }
    @Get(':id')
    async findOne(@Param("id") id: number){
        const data =await this.usersService.findOne(id);
        return data
    }

    @Post()
    async save(@Body() item){
        const data = await this.usersService.save(item);
        return data
    }
    @Delete()
    async delete(@Param("id") id: number){
     const data =await this.usersService.delete(id);
     return data
    }
}