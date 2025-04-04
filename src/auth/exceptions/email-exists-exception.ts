import { ConflictException } from '@nestjs/common';

export class EmailExistsException extends ConflictException {
  constructor() {
    super('Email already exists. Please use a different email.');
  }
}
