CREATE EXTENSION IF NOT EXISTS "uuid-ossp",

CREATE TABLE veiculos (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	modelo VARCHAR(150) NOT NULL,
	marca VARCHAR(50) NOT NULL,
	ano INTEGER NOT NULL,
	placa VARCHAR(10) UNIQUE NOT NULL
),

INSERT INTO veiculos (modelo, marca, ano, placa) VALUES 
	('Vectra GLS', 'Opel', '1999', '3245f4gr'),
	('Maverick', 'Ford', '1998', '5587j5fm')