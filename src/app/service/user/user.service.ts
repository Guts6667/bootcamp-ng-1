import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  public users: string[] = [
    'AquaExplorer12',
    'SunriseSeeker87',
    'StellarAdventurer45',
    'MoonlitMarauder39',
    'CelestialVoyage23',
    'GalaxyGazer64',
    'CosmicChampion81',
    'NebulaNavigator07',
    'SkyboundTrailblazer31',
    'StarstruckPioneer94',
    'EternalVoyager53',
    'AstroWanderer28',
  ];

  public addUser(user: string) {
    this.users.push(user);
  }
  public removeUser(index: number) {
    if (this.users[index]) {
      this.users.splice(index, 1);
    }
  }

  public editUser(index: number, editedUser: string) {
    if (this.users[index]) {
      this.users[index] = editedUser;
    }
  }
  public get user() {
    return this.users;
  }
}
