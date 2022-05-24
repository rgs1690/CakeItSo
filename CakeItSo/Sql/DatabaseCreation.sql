USE MASTER
GO

IF NOT EXISTS (
	SELECT [name]
	FROM sys.databases
	WHERE [name] = 'CakeItSo'
)
CREATE DATABASE CakeItSo
GO

USE CakeItSo
GO

DROP TABLE IF EXISTS [Event];
DROP TABLE IF EXISTS Cake;
DROP TABLE IF EXISTS Customer;
DROP TABLE IF EXISTS [User];


CREATE TABLE [Event] (
id int not null identity primary key,
[name] varchar(255),
userId varchar(255),
customerId int not null,
cakeId int,
typeOfEvent varchar(255),
venu varchar(255),
venuPhone varchar(255),
venuAddress varchar(255),
[date] varchar(255),
[time] varchar(255),
miles int,
pricePerMile decimal,
notes varchar(500),
totalPrice decimal,
);

CREATE TABLE [User] (
	id varchar(255) not null
);

CREATE TABLE Customer (
	id int not null identity primary key,
	userId varchar(255),
	[name] varchar(255),
	phone varchar(255),
	email varchar (255),
);

CREATE TABLE [Cake] (
	id int not null identity primary key,
	[name] varchar (255),
	userId varchar(255),
	customerId int not null,
	recipe varchar (255),
	foodCostPerServing decimal,
	numOfGuests int,
	decorTime int,
	bakeTime int,
	wagePerHour decimal,
	supplyCost decimal,
	refImage varchar(500), 
	totalCost decimal,
);


INSERT INTO Customer (userId, [name], phone, email)
VALUES ('1', 'Jessica Smith', '6154443322', 'jessica@gmail.com')

INSERT INTO Customer (userId, [name], phone, email)
VALUES ('2', 'Jane Doe', '6155553322', 'jane@gmail.com')

INSERT INTO Customer (userId, [name], phone, email)
VALUES ('1', 'Tom Johns', '616663322', 'tom@gmail.com')



INSERT INTO [User] (id)
VALUES ('1')

INSERT INTO [User] (id)
VALUES ('2')


INSERT INTO Cake ( [name], customerId, recipe, userId, foodCostPerServing, numOfGuests, decorTime, bakeTime, wagePerHour, supplyCost, refImage, totalCost)
VALUES ('Smith Wedding Cake', 1, 'Red Velvet w/ CC', '1', 4.95, 75, 3, 2, 20.00, 45.00, 'https://cdn0.weddingwire.com/vendor/365509/3_2/960/jpeg/img-8354-copy_51_905563-158446766575152.jpeg', 516.25)

INSERT INTO Cake ([name], customerId, recipe, userId, foodCostPerServing, numOfGuests, decorTime, bakeTime, wagePerHour, supplyCost, refImage, totalCost)
VALUES ('Jane Doe Birthday Cake', 2, 'Yellow w/ Choc', '1', 3.25, 40, 2, 1, 20.00, 25.00, 'https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg', 215)

INSERT INTO Cake ([name], customerId, recipe, userId, foodCostPerServing, numOfGuests, decorTime, bakeTime, wagePerHour, supplyCost, refImage, totalCost)
VALUES ('Johns Anniversary Cake', 3, 'Vanilla w/ Vanilla', '2', 4.00, 50, 6, 1, 20.00, 40.00, 'https://cakoholic.in/wp-content/uploads/2021/02/saphire-wedding-anniversary-cake.jpg', 380)

INSERT INTO [Event] ([name], userId, customerId, cakeId, typeOfEvent, venu, venuPhone, venuAddress, [date], [time], miles, pricePerMile, notes, totalPrice)
VALUES ('Smith Wedding', '1', 1, 1, 'wedding', 'Riverwood Mansion', '6154443333', '1833 Welcome Lane Nashville, Tennessee', '6/25/22', '5pm', 15, 5.00, 'Park Across Street', 591.25 )

INSERT INTO [Event] ([name], userId, customerId, cakeId, typeOfEvent, venu, venuPhone, venuAddress, [date], [time], miles, pricePerMile, notes, totalPrice)
VALUES ('Jane Birthday', '1', 2, 2, 'Birthday', 'Pinewood Socail', '615553333', '33 Peabody St, Nashville, TN 37210', '7/25/22', '4pm', 10, 5.00, 'Bring extra boxes for leftoevers', 265.00 )

INSERT INTO [Event] ([name], userId, customerId, cakeId, typeOfEvent, venu, venuPhone, venuAddress, [date], [time], miles, pricePerMile, notes, totalPrice)
VALUES ('Johns Anniversary Party', '2', 3, 3, 'Anniversary', 'Hermitage Country Club', '6158474001', '3939 Old Hickory Blvd, Old Hickory, TN 37138', '8/1/22', '4pm', 10, 5.00,'Dropoff behind building', 430.00 )


select * from [Event]
select * from Customer
select * from Cake
select * from [User]
