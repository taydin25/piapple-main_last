import { Restaurant } from '../modals/restaurant';

import { Injectable } from '@angular/core';
// import axios from 'axios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostgresqlService {
  apiURL = 'https://postgresql-backend.herokuapp.com';
  // urlUser = "https://piapple-backend.herokuapp.com/user/all";
  // urlOrders = "http://localhost:3000/orders";
  // getUser = `${this.apiURL}/user`;
  // getMenu = `${this.apiURL}/menu`;
  // address = `${this.apiURL}/address`;
  // category = `${this.apiURL}/category`;
  // restaurant = `${this.apiURL}/restauran t`;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Fetch employees list
  getUser(): Observable<Restaurant> {
    return this.http
      .get<Restaurant>(this.apiURL + '/restaurant')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch employee
  getUserId(id: any): Observable<Restaurant> {
    return this.http
      .get<Restaurant>(this.apiURL + '/restaurant/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // getUser(): Observable<Restaurant[]> {
  //     return this.http.get<Restaurant[]>(`${this.apiURL}/restaurant`);
  // }

  // getUseId(): Observable<Restaurant[]> {
  //     return this.http.get<Restaurant[]>(`${this.apiURL}/restaurant/21`);
  // }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  // AxiosServiceUser() {
  //     return this.http.get(this.user);
  // }

  // AxiosServiceMenu() {
  //     return this.http.get(this.menu);
  // }

  // AxiosServiceAddress() {
  //     return this.http.get(this.address);
  // }

  // AxiosServiceCategory() {
  //     return this.http.get(this.category);
  // }

  // AxiosServiceRestaurant() {
  //     return this.http.get(this.restaurant);
  // }

  // leer () {
  //     return axios.get(this.urlUser).then(response => {
  //         console.log(response)
  //     }).catch(error => {console.log(error)})
  // }

  // getUserData(){
  //     return this.http.get<any>(this.urlUser);
  // }
}

/*
import { Injectable } from '@angular/core';
// import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AxiosService {
    // urlUser = "https://piapple-backend.herokuapp.com/user/all";
    // urlOrders = "http://localhost:3000/orders";
    url = 'https://postgre-backend.herokuapp.com/user';
    constructor(private http: HttpClient) { }
    AxiosService() {
        return this.http.get(this.url);
    }
    // leer () {
    //     return axios.get(this.urlUser).then(response => {
    //         console.log(response)
    //     }).catch(error => {console.log(error)})
    // }

    // getUserData(){
    //     return this.http.get<any>(this.urlUser);
    // }
}

*/
