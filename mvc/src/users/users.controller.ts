import { Controller,  Get, Param, Post, Body, Delete, Query, Render, Res } from '@nestjs/common';
import { Response, Request } from 'express'

@Controller('users')
export class UsersController {

    @Get('/register')
    @Render('register')
    register(){
        return({
            pageTitle: "Akun Baru",
            contentTitle: "Never Ending Brotherhood"
        })
    }

    @Get('/password/reset')
    @Render('password-reset')
    password(){
        return({
            pageTitle: "Lupa Password",
            contentTitle: "Kembalikan akun, cek email"
        })
    }


}
