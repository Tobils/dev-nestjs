import { Get, Controller, Render } from '@nestjs/common'

@Controller()
export class AppController{
    @Get()   
    @Render('login')
    root(){
        return({
            pageTitle: "Sign In",
            contentTitle :"Never Ending Brotherhood !"
        })
    }
}