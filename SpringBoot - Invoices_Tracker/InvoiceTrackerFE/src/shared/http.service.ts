import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_CONST} from './shared.constants';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {


constructor(private httpClient: HttpClient) {
  }

  public get(action: string) {

    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});  
    return this.httpClient.get(`${API_CONST.BASE_URL}${action}`,{headers: headers});
  }

  public getWithToken(action: string, token:string) : Observable<any> {

    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization':"Bearer "+token});
      
    return this.httpClient.get(`${API_CONST.BASE_URL}${action}`,{headers: headers});
  }

  public getWithTokenAndParams(action: string, token:string, sortBy:string, pageNo:number,pageSize:number) : Observable<any> {

    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization':"Bearer "+token});
    console.log("paginator = "+pageNo)
    return this.httpClient.get(`${API_CONST.BASE_URL}${action}`,
    {params:
      {
        pageNo:pageNo,
        pageSize:pageSize,
        sortBy:sortBy
     }
    ,headers: headers});
  }


  public post(action: string, data: any) {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    console.log(`${API_CONST.BASE_URL}${action}`)
    console.log(data)
    return this.httpClient.post(`${API_CONST.BASE_URL}${action}`, data,{headers: headers});
  }
  public postWithToken(action: string, data: any,token:string) {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization':"Bearer "+token});
    console.log(`${API_CONST.BASE_URL}${action}`)
    console.log(data)
    return this.httpClient.post(`${API_CONST.BASE_URL}${action}`, data,{headers: headers});
  }


  public put(action: string, data: any) {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

    return this.httpClient.put(`${API_CONST.BASE_URL}${action}`, data,{headers: headers});
  }

  public putWithTokenNoContent(action: string, data: any,token:string) {
    const headers = new HttpHeaders({'Authorization':"Bearer "+token});
    return this.httpClient.put(`${API_CONST.BASE_URL}${action}`, data,{headers: headers});
  }
  
  public putWithToken(action: string, data: any,token:string) {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization':"Bearer "+token});

    return this.httpClient.put(`${API_CONST.BASE_URL}${action}`, data,{headers: headers});
  }
  public delete(action: string) {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

    return this.httpClient.delete(`${API_CONST.BASE_URL}${action}`,{headers: headers});
  }
  public deleteWithToken(action: string,token:string) {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization':"Bearer "+token});

    return this.httpClient.delete(`${API_CONST.BASE_URL}${action}`,{headers: headers});
  }




  public postWithTokenNoContent(action: string, data: any,token:string) {
    const headers = new HttpHeaders(
        {
          'Authorization':"Bearer "+token,
        }
      );
    console.log(`${API_CONST.BASE_URL}${action}`)
    console.log(data)
    return this.httpClient.post(`${API_CONST.BASE_URL}${action}`, data,{headers: headers});
  }



}