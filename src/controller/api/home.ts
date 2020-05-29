import { Control, Post, Get } from '../../kernel/decorator/method-mapping.decorator';
import BaseController from '../../kernel/baseController';
import { Query, Body } from '../../kernel/decorator/params.decorator';
import { IsInt, IsNotEmpty } from 'class-validator';
import { Autowired } from '../../kernel/decorator/autowired.decorator';
import UserService from '../../service/user';
import TestService from '../../service/test';

class HomeClass {
  @IsInt()
  b: number;
}

@Control('api/home')
export default class Home extends BaseController {

  @Autowired('a')
  public uSer: UserService;

  @Autowired('b')
  public tSer: TestService;

  @Get('test')
  async test () {
    console.log(await this.uSer)
    return "aaaaa11111";
  }

  @Post('user')
  async user (@Query() query: object, @Body() body: HomeClass) {

    return "";
  }
}