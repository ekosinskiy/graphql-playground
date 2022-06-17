db.createUser(
    {
        user: "user",
        pwd: "passw0rd",
        roles: [
            { role: "dbOwner", db: "zip" }
        ]
    }
    ,
    {
        w: "majority",
        wtimeout: 5000
    }
);
