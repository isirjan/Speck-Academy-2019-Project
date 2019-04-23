INSERT INTO krizevci.users(first_name, last_name, e_mail, user_password)
VALUES
    ('Ivo', 'Ivić', 'ivo@ivic.com', 'lozinka'),
    ('Pero', 'Perić', 'pero@peric.com','lozinka'),
    ('Ana', 'Anić', 'ana@anic.com','lozinka'),
    ('Tomo', 'Tomić', 'tomo@tomic.com','lozinka'),
    ('Iva', 'Ivić', 'iva@ivic.com','lozinka')
;

INSERT INTO krizevci.sessions(user_id, session_id, date_created, date_updated)
VALUES
    (1, 1, date('2019-01-01')::timestamp, now()),
    (2, 2, date('2019-02-02')::timestamp, now()),
    (3, 3, date('2019-03-03')::timestamp, now()),
    (4, 4, date('2019-04-04')::timestamp, now()),
    (5, 5, date('2019-03-05')::timestamp, now())
;

INSERT INTO krizevci.halls(hall_name, hall_address, capacity)
VALUES
    ('Velika sportska dvorana', 'Križevci', 1000),
    ('Dvorana Hrvatskog doma', 'Križevci', 500),
    ('Dvorana Gradske knjižnice', 'Križevci', 50),
    ('Dvorana TIC (Turistički dom)', 'Križevci', 100),
    ('Tehnološki park', 'Križevci', 100)
;

INSERT INTO krizevci.reservations(reservation_status, reserved_from, reserved_untill, hall_id, user_id)
VALUES
    (1, date('2019-04-01')::timestamp, date('2019-05-01')::timestamp, 1, 1),
    (2, date('2019-04-05')::timestamp, date('2019-05-05')::timestamp, 2, 2),
    (3, date('2019-04-10')::timestamp, date('2019-05-10')::timestamp, 3, 3),
    (1, date('2019-04-15')::timestamp, date('2019-05-15')::timestamp, 4, 4),
    (2, date('2019-04-20')::timestamp, date('2019-05-20')::timestamp, 5, 5)
;
