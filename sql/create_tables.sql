CREATE SCHEMA krizevci;

CREATE TABLE krizevci.users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(60),
    last_name VARCHAR(60),
    e_mail VARCHAR(60),
    user_password VARCHAR(60)
);

CREATE TABLE krizevci.sessions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES krizevci.users(id),
    session_id VARCHAR(255),
    date_created TIMESTAMP DEFAULT NOW(),
    date_updated TIMESTAMP DEFAULT NOW()
);

CREATE TABLE krizevci.halls (
    id SERIAL PRIMARY KEY,
    hall_name VARCHAR(255),
    hall_address VARCHAR(255),
    capacity INT
);

CREATE TABLE krizevci.reservations (
    id SERIAL PRIMARY KEY,
    reservation_status INT,
    reserved_from TIMESTAMP,
    reserved_untill TIMESTAMP,
    hall_id INT REFERENCES krizevci.halls(id),
    user_id INT REFERENCES krizevci.users(id)
);
