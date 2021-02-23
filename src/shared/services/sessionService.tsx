class SessionService {
    static isAuthenticated(): boolean {
        return false;
    }
    static isNotAuthenticated(): boolean {
        return !SessionService.isAuthenticated();
    }
}
export default SessionService;