import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _games: any;
  constructor(private _apollo: Apollo) {
    this._apollo.watchQuery({
      query: gql`
        games {
          id,
          key,
          players {
            lastName
          }
          metadata {
            creation
          }
        }`
    }).valueChanges.subscribe(result => {
      this._games = result.data && result.data.games;
    });
  }
}
