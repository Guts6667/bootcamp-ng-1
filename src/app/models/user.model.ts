import { Formation } from './formation.model';

export interface User {
  id?: number;
  username?: string;
  password?: string;
  email?: string;
  formations?: Formation[];
}
