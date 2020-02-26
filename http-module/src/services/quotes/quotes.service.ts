import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { CredentialDto } from 'src/message/dto/credential.dto';

@Injectable()
export class QuotesService {
    constructor(private http: HttpService){}

    auth(credentialDto : CredentialDto){
        const { username,password } = credentialDto; 
        console.log(credentialDto)

        const acces_token = this.http.post('https://api.audiobuku.com/api/v1/auth',{
            headers: 'Content-Type: application/json'
        }, {
            auth:{
                username:username,
                password:password
            }
        })

        console.log(acces_token)
        return acces_token;
    }

    getQuotes(){
        return this.http.post('http://quotesondesign.com/wp-json/posts')
            .pipe(
                map(response => response.data)
            );        
    }

    getQuote(id){
        return this.http.get('http://quotesondesign.com/wp-json/posts/' + id)
            .pipe(
                map(response => response.data)
            ); 
    }

    getRandomQuote(){
        return this.http.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
            .pipe(
                map(response => response.data)
            );
    }

}
