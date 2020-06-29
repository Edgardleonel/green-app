const Auth = {

    isAuth: false,
    auth() {
        this.isAuth = true;
    },

    logout() {
        this.isAuth = false;
    },


    getAuth() {
        return this.isAuth;
    }

};
export default Auth;

