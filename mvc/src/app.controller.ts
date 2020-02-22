import { Get, Controller, Render } from '@nestjs/common'

@Controller()
export class AppController{
    @Get()   
    @Render('login')
    home(){
        return({
            pageTitle: "Sign In",
            contentTitle :"Never Ending Brotherhood !"
        })
    }
}