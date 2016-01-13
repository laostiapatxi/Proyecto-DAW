-- phpMyAdmin SQL Dump
-- version 4.4.13.1deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 13-01-2016 a las 23:09:31
-- Versión del servidor: 5.6.27-0ubuntu1
-- Versión de PHP: 5.6.11-1ubuntu3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alumno`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE IF NOT EXISTS `administradores` (
  `idadministradores` int(11) NOT NULL,
  `email` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `pass` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE IF NOT EXISTS `articulos` (
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `tipo` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `color` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `talla` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion_corta` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `cod` int(255) NOT NULL,
  `imagen` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `cantidad` int(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`nombre`, `descripcion`, `precio`, `tipo`, `color`, `talla`, `descripcion_corta`, `cod`, `imagen`, `cantidad`) VALUES
('Camiseta de mujer Naf Naf azul con adorno', 'Camiseta en color azul, con manga corta y escote redondo con adorno de strass.', 24.40, 'Camisetas', 'Azul', 'L', 'Naf Naf', 14, '00129677400276036_1__516x640.jpg', 6),
('Camiseta de mujer Kookai azul con strass', 'Camiseta en color azul con adorno de strass, manga larga y escote drapeado.', 24.50, 'Camisetas', 'Azul', 'L', 'Kookai', 15, '00182277200521_36_1__516x640.jpg', 4),
('Camiseta negra con cadena en escote', 'Camiseta en color negro liso, con manga larga y escote redondo. Con detalle de cadena a contraste en el escote.', 42.95, 'Camisetas', 'Negro', 'L', 'Escola', 16, '00113068102634_42_1__516x640.jpg', 3),
('Camiseta de mujer Naf Naf azul con encaje', 'Camiseta en color azul, sin mangas y cuello redondo. Tiene detalle de canesÃº de encaje a tono y abertura en la parte de atrÃ¡s.', 19.95, 'Camisetas', 'Azul', 'L', 'Naf Naf', 17, '00129677400177_36_1__516x640.jpg', 1),
('Camiseta de mujer Kookai negra con strass', 'Camiseta en color negro, de manga corta con contraste de tejido y cuello redondo. Detalle de strass en las sisas.', 23.40, 'Camisetas', 'Negro', 'L', 'Kookai', 18, '00182277200406_36_1__516x640.jpg', 10),
('Camiseta de mujer Naf Naf negra lisa', 'Camiseta en color negro, de manga corta ranglan, cuello redondo y cierre de cremallera en la espalda.', 17.40, 'Camisetas', 'Negro', 'L', 'Naf Naf', 19, '00129667105158_36_1__516x640.jpg', 3),
('Cazadora bomber estampada sin cuello lisa', 'Cazadora tipo bomber estampada, con manga larga, cierre de cremallera, detalles en distinto tejido y dos bolsillos de ojal con cremallera.', 34.99, 'Cazadoras', 'Azul', 'L', 'Vero moda', 20, '00129368615893002_1__516x640.jpg', 8),
('Camiseta de mujer Naf Naf azul con adorno', 'Camiseta en color azul, con manga corta y escote redondo con adorno de strass.', 24.40, 'Camisetas', 'Azul', 'XL', 'Naf Naf', 21, '00129677400276036_1__516x640.jpg', 1),
('Cazadora perfecto de mujer Naf Naf en beige', 'Cazadora de vison en color beige. Con cierre de tipo perfecto.', 1560.00, 'Cazadoras', 'Beige', 'L', 'Cazadora', 22, '00106412000041_40_1__516x640.jpg', 1),
('Cazadora de mujer Georges Rech ligera de seda', 'Cazadora de mujer Georges Rech ligera de seda: Cazadora con interior de pluma en tejido seda y cierre a presion.', 210.00, 'Cazadoras', 'Beige', 'XL', 'GEORGES RECH PARÃS', 23, '5378525649686_00_516x640.jpg', 3),
('Cazadora de mujer Roberto Verino en rojo', 'Cazadora acolchada, con bolsillos, cinturon y cierre con cremallera y broches.', 108.00, 'Cazadoras', 'Rojo', 'M', 'ROBERTO VERINO', 24, '00124866201080_38_1__516x640.jpg', 4),
('Cazadora de vison de mujer en color azul', 'Cazadora de vison en color azul, con manga francesa, cuello chimenea y cierre de cremallera.', 1740.00, 'Cazadoras', 'Azul', 'L', 'Vison', 25, '00106412000272_40_1__516x640.jpg', 2),
('Cazadora perfecto de mujer Amitie acolchada', 'Cazadora perfecto acolchada en color marron, con cierre de cremallera. Tiene cuello con detalle de pelo de conejo y dos bolsillos en el delantero.', 69.95, 'Cazadoras', 'Marron', 'L', 'AMITIE', 26, '00135120800335_38_1__516x640.jpg', 3),
('Bolso hobo liso en beige', 'Bolso de hombro tipo hobo en color beige con cierre de cremallera y asa media, tiene un bolsillo exterior con cremallera.', 14.95, 'Accesorios', 'Beige', 'Unica', 'CARPISA', 27, '00102865500645____1__516x640.jpg', 4),
('Colgante marron con cordon', 'Colgante en forma circular con motivo marron y cordon negro.  Cierre mosqueton ajustable.', 7.00, 'Accesorios', 'Marron', 'Unica', 'DAYADAY', 28, '00166408048594____1__516x640.jpg', 3),
('Gafas de sol Jo & Mr. Joe', 'Gafas de sol con la montura transparente en color morado.', 17.90, 'Accesorios', 'Transparente', 'Unica', 'JO & MR. JOE', 29, '00119522391382____1__516x640.jpg', 5),
('Gafas de sol con montura azul', 'Gafas de sol con montura en color azul marino y lentes de color gris con efecto degradado. Factor de proteccion nivel 3.', 17.90, 'Accesorios', 'Azul', 'Unica', 'JO & MR. JOE', 30, '84376.jpg', 5),
('Pendientes con print de serpiente', 'Pendientes de pieza ovalada con print de serpiente y cierre omega.', 2.75, 'Accesorios', 'Marron', 'Unica', 'DAYADAY', 31, '53478.jpg', 6),
('Pendientes de abalorios', 'Pendientes de abalorios multicolores con cierre omega.', 5.50, 'Accesorios', 'Multicolor', 'Unica', 'DAYADAY', 32, '00166408050996____1__516x640.jpg', 4),
('Mocasines de mujer de piel burdeos', 'Mocasines de piel con acabado acharolado en color burdeos y detalle de flecos y borlas.', 49.99, 'Calzado', 'Burdeos', 'Unica', 'ZENDRA BASIC', 33, '32423.jpg', 5),
('Zapatos de cordones de mujer de ante marrones', 'Zapatos de tacon en color marrÃ³n con combinacion de piel y ante y con cierre de cordones. Tienen detalle de picado y tacon de 4,5 cm de altura.', 49.99, 'Calzado', 'Marron', 'Unica', 'ZENDRA BASIC', 34, '45657.jpg', 4),
('Zapatos de salon de mujer Zendra Basic', 'Zapatos de salon en color azul marino confeccionados en material sintetico, con tacon bajo. Tienen suela sintetica.', 29.99, 'Calzado', 'Azul', 'Unica', 'ZENDRA BASSIC', 35, '87564.jpg', 8),
('Zapatos de salon de tacon de mujer de piel', 'Zapatos de salon casual de ante en color gris. Lleva tacon cubano de 7cm de altura.', 89.95, 'Calzado', 'Gris', 'Unica', ' ZENDRA BASIC', 36, '9843.jpg', 5),
('Zapatos de tacon de mujer de piel marrones', 'Zapatos de tacon tipo mocasin en color marron con detalle de antifaz y flecos picados en la puntera. Lleva tacon de 3cm de altura.', 49.99, 'Calzado', 'Marron', 'Unica', 'ZENDRA BASIC', 37, '9643.jpg', 5),
('Zapatos de tacon de mujer de piel negros', 'Zapatos de tacon tipo mocasin en color negro con detalle de antifaz y flecos picados en la puntera. Lleva tacon de 3cm de altura.', 49.99, 'Calzado', 'Negro', 'Unica', 'ZENDRA BASIC', 38, '12324.jpg', 6),
('Chaqueta beige con vivos a contraste', 'Chaqueta tipo blazer en color beige, con vivos a contraste. Con cierre de botones y dos bolsillos.', 84.50, 'Chaquetas', 'Beige', 'M', 'LAUREN RALPH LAUREN', 39, '43534.jpg', 5),
('Chaqueta de mujer Naf Naf gris con caida', 'Chaqueta en color gris con caÃ­da en la solapa, de manga larga y cierre de cinturon del mismo tejido.', 66.00, 'Chaquetas', 'Gris', 'M', 'NAF NAF', 40, '2423.jpg', 5),
('Chaqueta de mujer Zero de manga larga estampa', 'Chaqueta en color azul de manga larga y cuello en pico con cierre de botones delantero. Lleva estampado a contraste, vivos en color negro y crema y bajo redondeado.', 53.95, 'Chaquetas', 'Gris', 'L', 'ZERO', 41, '12456.jpg', 5),
('Chaqueta de punto de mujer', 'Chaqueta tipo blazer, de punto, en color amarillo. Con cierre delantero de botones y cuello bebe.', 120.00, 'Chaquetas', 'Amarillo', 'M', 'NAULOVER', 42, '64568.jpg', 7),
('Chaqueta en gris jaspeado', 'Chaqueta de manga larga, en color gris jaspeado y bolsillos con cremallera.', 49.95, 'Chaquetas', 'Gris', 'M', 'AMITIE', 43, '98765.jpg', 6),
('Chaqueta rosa con bolsillos', 'Chaqueta en color rosa, con manga francesa y dos bolsillos delanteros.', 59.60, 'Chaquetas', 'Rosa', 'M', 'SINTESIS', 44, '9234.jpg', 8),
('Falda blanca con flores', 'Falda larga en color blanco con estampado floral azul y cintura elastica.', 62.50, 'Faldas', 'Blanco', 'M', 'DENIM & SUPPLY RALPH LAUREN', 45, '213425647.jpg', 6),
('Falda corta con vuelo', 'Falda corta, en color topo. Realizada en punto con trabajo para darle vuelo en la parte inferior.', 54.50, 'Faldas', 'Marron', 'M', 'SCORPION', 46, '987654.jpg', 9),
('Falda de encaje de mujer', 'Falda corta, de tipo recto, en color negro con trabajo de encaje y forro interior a tono.', 19.95, 'Faldas', 'Negro', 'L', 'YERA', 47, '87r653567.jpg', 6),
('Falda de mujer Naulover', 'Falda de corte recto en color kaki con jacquard a contraste.', 70.00, 'Faldas', 'Gris', 'M', 'NAULOVER', 48, '847693958.jpg', 9),
('Falda de mujer Naulover con tabla', 'Falda de tabla en color marron.', 70.00, 'Faldas', 'Marron', 'M', 'NAULOVER', 49, '0094827.jpg', 9),
('Falda Naulover estampada', 'Falda con estampado en tonos negro y beige con cintura lisa a contraste.', 55.00, 'Faldas', 'Gris', 'M', 'NAULOVER', 50, '34531264.jpg', 7),
('Pantalon campana de pana', 'Pantalon campana de pana en beige. Tiene cierre delantero de cremallera y boton, trabillas en la cintura y cinco bolsillos.', 19.97, 'Pantalones', 'Beige', 'L', 'TINTORETTO', 51, '21321434.jpg', 5),
('Pantalon de cintura alta con pinzas', 'Pantalon de pinzas en color malva, de cintura alta, con cierre delantero y dos bolsillos laterales.', 19.97, 'Pantalones', 'Malva', 'M', 'TINTORETTO', 52, '436546.jpg', 7),
('Pantalon de traje ojo de perdiz', 'Pantalon ancho de traje con estampado de ojo de perdiz en gris. Tiene cierre delantero y trabillas en la cintura.', 24.97, 'Pantalones', 'Gris', 'M', 'TINTORETTO', 53, '568709.jpg', 8),
('Pantalon pitillo detalle de nervios', 'Pantalon largo, de tipo pitillo, en color negro liso. Con detalle de nervios a tono y cierre delantero sin cinturilla.', 51.00, 'Pantalones', 'Negro', 'M', 'BETTY BARCLAY', 54, '435678.jpg', 7),
('Pantalon tobillero en color beige', 'Pantalon tobillero, de tipo pitillo, en color beige. Con cierre delantero, bolsillo con cremallera y trabillas en la cintura.', 49.50, 'Pantalones', 'Beige', 'L', 'LAUREN RALPH LAUREN', 55, '56785432.jpg', 5),
('Pantalon pitillo de mujer', 'Pantalon largo, de tipo pitillo, en color blanco hueso con jacquard. Con cierre delantero oculto y dos bolsillos laterales con cremallera.', 19.99, 'Pantalones', 'Beige', 'L', 'ZENDRA', 56, '756789009.jpg', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE IF NOT EXISTS `categoria` (
  `idcategoria` int(11) NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`idcategoria`, `nombre`) VALUES
(3, 'Chaquetas'),
(7, 'Cazadoras'),
(8, 'Camisetas'),
(9, 'Pantalones'),
(10, 'Accesorios'),
(11, 'Calzado'),
(12, 'Faldas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE IF NOT EXISTS `pedidos` (
  `cod` int(50) NOT NULL,
  `cantidad` int(50) NOT NULL,
  `precio` decimal(50,2) NOT NULL,
  `imagen` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `id_pedido` int(50) NOT NULL,
  `usuario` text COLLATE utf8_spanish_ci NOT NULL,
  `nombre` text COLLATE utf8_spanish_ci NOT NULL,
  `total` decimal(30,0) NOT NULL,
  `talla` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `tipo` varchar(45) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`cod`, `cantidad`, `precio`, `imagen`, `id_pedido`, `usuario`, `nombre`, `total`, `talla`, `tipo`) VALUES
(20, 1, 34.99, '00129368615893002_1__516x640.jpg', 933, 'demo@gmail.com', 'Cazadora bomber estampada sin cuello lisa', 35, 'L', 'Cazadoras'),
(17, 1, 19.95, '00129677400177_36_1__516x640.jpg', 996, 'demo@gmail.com', 'Camiseta de mujer Naf Naf azul con encaje', 63, 'L', 'Camisetas'),
(16, 1, 42.95, '00113068102634_42_1__516x640.jpg', 996, 'demo@gmail.com', 'Camiseta negra con cadena en escote', 63, 'L', 'Camisetas'),
(19, 1, 17.40, '00129667105158_36_1__516x640.jpg', 357, 'demo@gmail.com', 'Camiseta de mujer Naf Naf negra lisa', 52, 'L', 'Camisetas'),
(20, 1, 34.99, '00129368615893002_1__516x640.jpg', 357, 'demo@gmail.com', 'Cazadora bomber estampada sin cuello lisa', 52, 'L', 'Cazadoras'),
(20, 1, 34.99, '00129368615893002_1__516x640.jpg', 87, 'demo@gmail.com', 'Cazadora bomber estampada sin cuello lisa', 82, 'L', 'Cazadoras'),
(18, 2, 23.40, '00182277200406_36_1__516x640.jpg', 87, 'demo@gmail.com', 'Camiseta de mujer Kookai negra con strass', 82, 'L', ''),
(18, 1, 23.40, '00182277200406_36_1__516x640.jpg', 715, 'demo@gmail.com', 'Camiseta de mujer Kookai negra con strass', 23, 'L', 'Camisetas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `talla`
--

CREATE TABLE IF NOT EXISTS `talla` (
  `idtalla` int(11) NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `talla`
--

INSERT INTO `talla` (`idtalla`, `nombre`) VALUES
(1, 'M'),
(2, 'L'),
(3, 'XL'),
(4, 'Unica'),
(5, 'S');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Trabajadores`
--

CREATE TABLE IF NOT EXISTS `Trabajadores` (
  `email` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `pass` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Trabajadores`
--

INSERT INTO `Trabajadores` (`email`, `pass`) VALUES
('b@gmail.com', '1234'),
('t@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `email` varchar(50) NOT NULL DEFAULT '',
  `pass` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`email`, `pass`) VALUES
('', '3423'),
('a@gmail.com', '1234'),
('demo@gmail.com', '1234'),
('lolo@gmail.com', '1234'),
('migato@gmail.com', '123'),
('naty_natalia94@hotmail.com', '653099482@@'),
('ssd@gmail.com', '1234');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`idadministradores`);

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`cod`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idcategoria`);

--
-- Indices de la tabla `talla`
--
ALTER TABLE `talla`
  ADD PRIMARY KEY (`idtalla`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administradores`
--
ALTER TABLE `administradores`
  MODIFY `idadministradores` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `cod` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=57;
--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idcategoria` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de la tabla `talla`
--
ALTER TABLE `talla`
  MODIFY `idtalla` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
