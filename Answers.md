1. What is the purpose of using _sessions_?

    Sessions provide a way to persist data across requests. We’ll use it to persist authentication information so there is no need to re-enter credentials on every new request the client makes to the server.

1. What does bcrypt do to help us store passwords in a secure manner.

    bcrypt generates a random salt. A "cost" factor has been pre-configured. Collect a password.

    Derive an encryption key from the password using the salt and cost factor. Use it to encrypt a well-known string. Store the cost, salt, and cipher text. Because these three elements have a known length, it's easy to concatenate them and store them in a single field, yet be able to split them apart later.

1. What does bcrypt do to slow down attackers?

    bcrypt is used to hash our passwors to make if safe.

1. What are the three parts of the JSON Web Token?

    . Header
    . Payload
    . Signature