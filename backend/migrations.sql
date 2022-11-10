CREATE TABLE user(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE list(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    cpf VARCHAR(255) UNIQUE NOT NULL,
    birth VARCHAR(255) NOT NULL,
	address VARCHAR(255) NOT NULL,
    fathersname VARCHAR(255) NOT NULL,
    mothersname VARCHAR(255) NOT NULL
);