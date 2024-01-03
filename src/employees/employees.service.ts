/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createEmployee: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployee,
    });
  }

  async findAll(role?: 'MANAGER' | 'CLERK' | 'ADVISOR') {
    if (role) {
      return this.databaseService.employee.findMany({ 
        where: {
          role,
        }
      });
    }
    return this.databaseService.employee.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.employee.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateEmployee: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id,
      },
      data: updateEmployee
    });
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({
      where: {
        id,
      }
    });
  }
}
