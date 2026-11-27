
function LoginViewModel() {

    // Step 1: Create observables
    this.username = ko.observable("");
    this.password = ko.observable("");

    this.isLoggedIn = ko.observable(false);
    this.loggedInUser = ko.observable("");
    this.errorMessage = ko.observable("");

    // Step 2: Login function
    this.login = () => {

        const enteredUsername = this.username().trim();
        const enteredPassword = this.password();

        // Demo credentials
        if (
            enteredUsername === "admin" &&
            enteredPassword === "12345"
        ) {
            this.loggedInUser(enteredUsername);
            this.isLoggedIn(true);
            this.errorMessage("");
        } else {
            this.errorMessage("Invalid username or password!");
        }
    };

    // Step 3: Logout function
    this.logout = () => {

        this.isLoggedIn(false);

        this.username("");
        this.password("");
        this.loggedInUser("");
        this.errorMessage("");
    };
}

// Step 4: Activate Knockout bindings
ko.applyBindings(new LoginViewModel());
