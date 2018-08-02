import { Profile } from './profile.model';

export interface Repository {
    name: string;
    description: string;
    owner: Profile;
}