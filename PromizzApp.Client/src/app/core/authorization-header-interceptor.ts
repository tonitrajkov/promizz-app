import { Injectable } from "@angular/core";
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent }
     from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthorizationHeaderInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler):
         Observable<HttpEvent<any>> {
        // add the access token as bearer token
        request = request.clone(
            { setHeaders: { Authorization: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImRiNzA1YzE1Zjg5ZjM2MzRkNWU4ZmM0MTA2YWI3MGUxIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1MzE5OTYwODksImV4cCI6MTUzMTk5NjM4OSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzODIiLCJhdWQiOiJwcm9taXp6Y2xpZW50Iiwibm9uY2UiOiJiZGU1N2NhYzI2ODg0YjhiOWU1YmM2MTJhZjY2ZmYzMiIsImlhdCI6MTUzMTk5NjA4OSwiYXRfaGFzaCI6IlY3bGtaOEwyTGViR25wb0d5REFXdXciLCJzaWQiOiIwM2FmY2JlMmEwN2NjNmFhNmI5MGIxNDAwNTM3MTM2ZiIsInN1YiI6IjEiLCJhdXRoX3RpbWUiOjE1MzE5OTU0NjAsImlkcCI6ImxvY2FsIiwiYW1yIjpbInB3ZCJdfQ.uJ6fKZHjQXIRk8gnU0KrerjsNO04MgnSk4G67HRBlS-eHDqOjQ5stCDM7AQFzUF5gv9ZPIhjgTKAxADFwDu8GQ4cpgJ8tPKZgQ0w61Pezl75GnY0kAHfQkttiECQlIMneyNXG1ov5FvPXlj--9zRuFt1jl_mrXZyeBPv5OQX99ukIG7m8GPs9iaAUTSR1U7Umx-OBj--kkUp4OM7BW5WUxUFnUh5rSEcsb26fVNUWkiHO88c3O1rH-JJIlh4uaxJMFVGwtRoVGrxQ6T0P-KemeC2h4zdxNYFqsaJV-5CIvUqsBUL5J3olZT5YLoRt4z5LMaMTN_6aTLT4Qr_CVPoIA" 
                + " " + "eyJhbGciOiJSUzI1NiIsImtpZCI6ImRiNzA1YzE1Zjg5ZjM2MzRkNWU4ZmM0MTA2YWI3MGUxIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1MzE5OTYwODksImV4cCI6MTUzMTk5NjI2OSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzODIiLCJhdWQiOlsiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzODIvcmVzb3VyY2VzIiwicHJvbWl6emFwaSJdLCJjbGllbnRfaWQiOiJwcm9taXp6Y2xpZW50Iiwic3ViIjoiMSIsImF1dGhfdGltZSI6MTUzMTk5NTQ2MCwiaWRwIjoibG9jYWwiLCJyb2xlIjoiQnVzaW5lc3MiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJwcm9taXp6YXBpIl0sImFtciI6WyJwd2QiXX0.rSmOs_7aNWkwWNTzddEMtzR4oSmL4bB-4pv1GTxUNavDEvWXJgWJuRBOcyMG9vBq6I6LXR6cxvD1MtyKg9RMxkwFrcuRkJUxZL6SLUQcOKqPoarSrv0UI_LYg9VCCUXPsj2fjZTCH2LfIJ58HVaeEbz2cNFyMpdO4urFRLxStSK7zrv90M2kTSz9oVLReQk4ZoqXHqETBQqDfJDYi0o8q6bLXYMffrbYWzQ2YDpKhslKbxGWxrm7pHT6caSWFiE8zoP79UgG9mPlzh2IqQuJKI__A96RifIkU1_rVC_2NkZ-sb4vQf-tNhjUTVURq9IXDhf45TWIwAII-JUnKSC_JQ" } });
        return next.handle(request);
    }
}