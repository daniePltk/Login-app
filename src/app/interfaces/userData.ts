import { Profile } from './profile';
import { User } from './user';
export interface UserData {
    user: User;
    username: string;
    token: string;
    success: boolean;
    profiles: Profile;
}