import { AuthState } from './AuthContext';

type AuthActions = { type: 'sigIn' };

// Genera Estados
export const authReducer = (
    state: AuthState,
    action: AuthActions,
): AuthState => {
    switch (action.type) {
        case 'sigIn':
            return {
                ...state,
                isLoggeIn: true,
                username: 'no-username-yet',
            };

        default:
            return state;
    }
};
