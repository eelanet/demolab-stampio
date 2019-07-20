import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from "../classes/user";

@Injectable({
  providedIn: 'root'
})
export class StampService {
  isLoading: boolean = false;
  newStamp: boolean = false;
  stampCard;
  stampCards = [];


  // Käyttäjä kovakoodattu ennen kuin google-login saadaan toimimaan
  user1: User = {
    ID_loppukayttaja: '12345',
    sahkoposti: 'elina.salminen@gmail.com'
  };

  private apiUrl = 'https://stampio.herokuapp.com';

  constructor(private http: HttpClient) { }

  // Virheenkäsittelymetodi joka palauttaa observablen
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return (error.message || error);
  }

  // hakee käyttäjän kaikkien passien vaadittavat tiedot
  getUserStampCardsInfo() {
    console.log('getUserStampCardsInfo()');
    this.getUserStampCards().subscribe((data) => {
      console.log('getUserStampCards().subs');
      this.isLoading = false;
      this.newStamp = false;
      this.stampCards = data;
    });
  }
  getUserStampCards() {
    console.log('getUserStampCards()');
    return this.http.get(this.apiUrl + '/stamp/cards-info/' + this.user1.ID_loppukayttaja).pipe(
      catchError(this.handleError)
    );
  }

  // hakee tiedot yhteen leimapassiin
  getUserStampCard(ID_stampcard) {
    console.log('getUserStampCard()');
    return this.http.get(this.apiUrl + '/stamp/stampcard-info/' + ID_stampcard).pipe(
      catchError(this.handleError)
    );
  }

  // nollaa leimapassin leimat id:n avulla
  clearStamps(ID_stampcard) {
    console.log('clearStamps()');
    return this.http.put(this.apiUrl + '/stamp/clearstamps/' + ID_stampcard + '/' + this.user1.ID_loppukayttaja, { body: null }).pipe(
      catchError(this.handleError)
    );
  }

  // Lisää leiman oikeaan leimapassiin qr-koodin ja käyttäjän id:n perusteella
  addStampQr(qrCode) {
    this.newStamp = true;
    this.isLoading = true;
    console.log('addStampQr(), ' + qrCode);
    this.addStamp(qrCode).subscribe(() => {
      console.log('addStamp subscribe... ');
      this.getUserStampCardsInfo();
    });
  }
  addStamp(qrCode) {
    console.log('addStamp(), ' + qrCode);
    return this.http.put(this.apiUrl + '/stamp/addstamp-qr/' + qrCode + '/' + this.user1.ID_loppukayttaja, { body: null }).pipe(
      catchError(this.handleError)
    );
  }

}
