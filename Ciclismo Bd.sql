CREATE DATABASE Ciclismo;
USE Ciclismo;

CREATE TABLE Usuarios (
    Id_Usuarios INT AUTO_INCREMENT PRIMARY KEY,
    Contraseña_U VARCHAR (15)
);
----------------------------------------------------------------
CREATE TABLE Roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);


----------------------------------------------------------------------------------------
CREATE PROCEDURE AsignarTipoUsuario;
    @Id_Usuarios INT,
    @Rol VARCHAR(20)
AS
BEGIN
    DECLARE @TipoUsuario INT

    IF @Rol = 'Ciclista'
        SET @TipoUsuario = 1
    ELSE IF @Rol = 'Juez'
        SET @TipoUsuario = 2
    ELSE IF @Rol = 'Administrador'
        SET @TipoUsuario = 3
    ELSE IF @Rol = 'Organizador'
        SET @TipoUsuario = 4

    UPDATE Usuarios
    SET Id_Ciclista = CASE WHEN @TipoUsuario = 1 THEN @Id_Usuario ELSE NULL END,
        Id_Juez = CASE WHEN @TipoUsuario = 2 THEN @Id_Usuario ELSE NULL END,
        Id_Administrador = CASE WHEN @TipoUsuario = 3 THEN @Id_Usuario ELSE NULL END,
        Id_Organizador = CASE WHEN @TipoUsuario = 4 THEN @Id_Usuario ELSE NULL END
    WHERE Id_Usuarios = @Id_Usuario
END
---------------------------------------------------------------------------------------------

CREATE TABLE Carrera (
    Id_Carrera INT PRIMARY KEY,
    Pais_C VARCHAR(30),
    Tipo_Carrera VARCHAR(20),
    Lugar_Carrera VARCHAR(50),
    Fecha_Carrera DATE,
    Num_Etapas_C CHAR(20),
    Distancia CHAR(30)
);

CREATE TABLE Ciclista (
    Id_Ciclista INT PRIMARY KEY,
    
    Fecha_Nacimiento_C DATE,
    Nombre_C VARCHAR(30),
    Ap_Ciclista VARCHAR(30),
    Am_Ciclista VARCHAR(30),
    Telefono_Emergencia_C CHAR(25),
    Categorias_C CHAR(30),
    Expertos_C VARCHAR(20),
    Avanzados_ VARCHAR(20),
    Intermedios_C VARCHAR(20)
    rol_id INT,
);

CREATE TABLE Estadisticas (
    Id_Estadisticas INT PRIMARY KEY,
    Tiempo_Inicio CHAR(20),
    Tiempo_Final CHAR(20),
    Tiempo_Carrera CHAR(20),
    Fecha_Carrera DATE
);

CREATE TABLE Juez (
    Id_Juez INT PRIMARY KEY,
    Contraseña_J Varchar(10),
    Nombre_Juez VARCHAR(20),
    Ap_Juez VARCHAR(20),
    Am_Juez VARCHAR(20),
    Tipo_Juez VARCHAR(30)
    rol_id INT,
);

CREATE TABLE Administrativos (
    Id_Administrativo INT PRIMARY KEY,
    Nombre_A VARCHAR(30),
    Ap_Administrativo VARCHAR(30),
    Am_Administrativo VARCHAR(30),
    Departamento_A VARCHAR(20)
    rol_id INT,
);

CREATE TABLE Organizador (
    Id_Organizador INT PRIMARY KEY,
    
    Nombre_O VARCHAR(30),
    Ap_Organizador VARCHAR(30),
    Am_Organizador VARCHAR(30),
    Cargo_A VARCHAR(20)
    rol_id INT,
);

CREATE TABLE Inscribe (
    Id_Ciclista INT,
    Id_Carrera INT,
    Metodo_de_Pago VARCHAR(50),
    FOREIGN KEY (Id_Ciclista) REFERENCES Ciclista(Id_Ciclista),
    FOREIGN KEY (Id_Carrera) REFERENCES Carrera(Id_Carrera)
);

CREATE TABLE Ingresar (
    Id_Usuarios INT AUTO_INCREMENT PRIMARY KEY,
    Id_Ciclista INT,
    Id_Juez INT,
    Id_Administrativo INT,
    Id_Organizador INT,
    FOREIGN KEY (Id_Ciclista) REFERENCES Ciclista(Id_Ciclista),
    FOREIGN KEY (Id_Juez) REFERENCES Juez(Id_Juez),
    FOREIGN KEY (Id_Administrativo) REFERENCES Administrativos(Id_Administrativo),
    FOREIGN KEY (Id_Organizador) REFERENCES Organizador(Id_Organizador)
);

CREATE TABLE Obtiene (
    Id_Ciclista INT,
    Id_Estadisticas INT,
    FOREIGN KEY (Id_Ciclista) REFERENCES Ciclista(Id_Ciclista),
    FOREIGN KEY (Id_Estadisticas) REFERENCES Estadisticas(Id_Estadisticas)
);

CREATE TABLE Registra (
    Id_Estadisticas INT,
    Id_Juez INT,
    FOREIGN KEY (Id_Estadisticas) REFERENCES Estadisticas(Id_Estadisticas),
    FOREIGN KEY (Id_Juez) REFERENCES Juez(Id_Juez)
);

INSERT INTO Roles (nombre) VALUES
('Ciclista'),
('Organizador'),
('Administrador'),
('Juez');
