# 3LM Info - Backend
 
 ## Principais tecnologias/ferramentas utilizadas

1. NodeJs
2. Moment
3. SQL

Para rodar o Backend na sua máquina:
 1) Faça o clone do reposítorio
 2) Rodenpm install para instalar os pacotes
 3) Adicione um arquivo .env na raiz do seu projeto com as variáveis do seu banco
 4) npm start para rodar a aplicação.
 Porém é importante que você tenha uma cópia do banco, para isso rode o código no final deste documento no seu DBMS (DataBank Management)
<br><br>


## Este repositório é o backend da aplicação 3LM Info
<img align="left" alt="GitHub" width="16px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />[Link do Repositório Front)](https://github.com/gislainecosta/lminfo-front)<br>
💻 [Deploy da aplicação (Otimizado para Desktop)](http://3lm-info.surge.sh/)

<br><br>
Código de criação do Banco de Dados: 

USE `lminfo`;

CREATE TABLE IF NOT EXISTS `admin` (
  `id` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
	('cf4aeb3d-4fbd-4b4c-af23-75fc1840ef8c', 'admin@teste.com', '$2a$10$QJNF3wftC5hEG0OLtO5Ff.juBLfGcoJMFYItksmXMay25.MyI5BnG');

CREATE TABLE IF NOT EXISTS `employee` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `photo` longtext NOT NULL DEFAULT '0',
  `office` int(10) NOT NULL,
  `birthDate` date NOT NULL,
  `salary` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_office-employee` (`office`),
  CONSTRAINT `fk_office-employee` FOREIGN KEY (`office`) REFERENCES `office` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `employee` (`id`, `name`, `surname`, `photo`, `office`, `birthDate`, `salary`) VALUES
	('8f1c8d0c-d394-4756-82c3-6625ab001892', 'Deyvid', 'Santana', 'https://picsum.photos/id/237/200/200', 6, '2020-10-05', 5000),
	('90eba8fa-4c92-4a60-89db-41758b91c32c', 'Jaqueline', 'Celia', 'https://picsum.photos/id/237/200/200', 2, '2020-10-27', 3000),
	('961d8b63-9707-4c04-8ccb-ca872ce7c9cf', 'Gislaine', 'Costa Pereira', 'https://picsum.photos/id/237/200/200', 1, '1983-11-15', 3500),
	('d74e7d9b-0532-4e5e-b3ec-d1c478f5e84b', 'Luciano', 'Coelho de Souza', 'https://picsum.photos/id/237/200/200', 3, '2020-11-15', 3500);

CREATE TABLE IF NOT EXISTS `office` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) NOT NULL,
  `description` mediumtext NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

INSERT INTO `office` (`id`, `type`, `description`) VALUES
	(1, 'Product Owner', 'Responsável pela entrega do projeto, supervisiona o time de desenvolvedores, pensando sempre na qualidade do código e nas funcionalidades do produto.'),
	(2, 'Desenvolvedor Front-end', 'Responsável pela interface das estruturas web, sempre pensando na experiência do usuário.'),
	(3, 'Desenvolvedor Back-end', 'Responsável pela implementação da regra de negócio e criação/manutenção do banco de dados.'),
	(6, 'RH', 'Responsável pela contratação, demissão, treinamento e outros assuntos relacionados aos funcionários');
