import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    position: string;
    position_id: number;
    registration_timestamp: number;
    photo: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url: string = 'https://frontend-test-assignment-api.abz.agency/api/v1/users'
    public count: number = 5;
    public page: number = 1;

    constructor(private http: HttpClient) {}
    
    getData(): Observable<any> {
        return this.http.get<any>(`${this.url}?page=${this.page}&count=${this.count}`)
    }
}