import { Repository } from "typeorm";
import { Users } from "./users.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersService {
    @InjectRepository(Users)
    private userRepository: Repository<Users>
    constructor() {
    }


    async find() {
        console.log("====================")
     const data =  await this.userRepository.find()
     return data
    }

    async findOne(id) {
      const data=  await this.userRepository.findOne({where:{id:id}})
      return data
    }

    async save(item) {
      const data=  await this.userRepository.save(item);
      return {message:"succesfully created"}
    }

    async delete(id) {
        await this.userRepository.delete(id)
        return {message:"succesfully deleted"}
    }
}