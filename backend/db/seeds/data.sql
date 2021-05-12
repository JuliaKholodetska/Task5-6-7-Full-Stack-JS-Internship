INSERT INTO public.brands("name")VALUES ('Inglot'),('Paese'),('Cico');
INSERT INTO public.categories("name")VALUES ('Eyes'),('Face'),('Body');
INSERT INTO public.users("name","email","password","isAdmin") VALUES ('Olya Berezna', 'o.berezna@gmail.com','123','false'),('Katya Vozna', 'k.vozna@gmail.com','123','false'),('Natalya Ugruniyk', 'n.ugruniyk@gmail.com','123','false'),('Sonia Pelenska', 's.pelenska.com','123','false'),('Violetta Bilynska', 'v.bilynska@gmail.com','123','false'),('Iryna Matseyko', 'i.Matseyko@gmail.com','123','false'),('Anita Korolova', 'a.korolova@gmail.com','123','false'),('Anastasia Tortova', 'a.tortova@gmail.com','123','false'),('Zlata Kholodetska', 'z.kholodetska@gmail.com','123','false'),('Sonia Olesckevych', 's.olesckevych@gmail.com','123','false');
INSERT INTO public."paymentStatuses"("paymentStatus") VALUES('paid'),('expected'),('processed'),('rejected');
INSERT INTO public."orderStatuses"("orderStatus") VALUES('processed'),('sent'),('waiting to be sent'),('rejected');
INSERT INTO public."products"("name","price","description","countInStock","brandId","image","categoryId") VALUES
('Inglot Highlighter Freedon System',42,'Extend your favourite palette with outstanding highlighter shades.',30,1,'/images/p-11.jpg',3),
('Inglot Sparkling Dust Feb',56,'This frosted loose powder is highly pigmented to provide the ultimate glow to any part of the body.',10,1,'/images/p-12.jpg',2),
('Inglot Body Pigment Pearl',86,'Intensely pigmented powders that provide a powerful pop of colour that is durable and wont fall off.',19,1,'/images/p-13.jpg',3),
('Inglot Body Pigment Matte',76,'Intensely pigmented powders that provide a powerful pop of colour that is durable and wont fall off.',29,1,'/images/p-14.jpg',3),
('Inglot HD Illuminizing  Powder',39,'A subtle loose powder with diamond dust. It is perfect to hide skin’s little imperfections and leave the face looking refreshed and rejuvenated.',9,1,'/images/p-15.jpg',2),
('Inglot AMC Multicolor Powder',62,'Palette of five matte shades, perfect to be used on the Face and Body (thus FB).',12,1,'/images/p-16.jpg',2),
('Inglot All covered concealer',22,'Was developed especially for the delicate under eye skin. Waterproof and silky formula perfectly covers imperfections and shades under eyes. It provides very natural and long-lasting effect',10,1,'/images/p-1.jpg',2),
('Inglot Sparkler highlighter',25,'A delicate, baked Soft Sparkler for face, eyes and body adds a sophisticated finish to your makeup. A subtle combination of colors with the diversity of shimmering particles brings out the inner glow of your skin.',20,1,'/images/p-2.jpg',2),
('Inglot Mattifying loose powder',60,'Loose powder ideal to combat shiny skin. Unique spherical polymers and hybrid silicone powder provide the soft focus effect and make this the ultimate mattifier.',30,1,'/images/p-3.jpg',3),
('Inglot Mattifying under makeup',42,'Hypoallergenic Mattifying Under Makeup Base with its smooth, gel consistency softens and thoroughly mattifies the skin preparing it for long-lasting, flawless makeup.',24,1,'/images/p-4.jpg',1),
('Inglot Cream foundation',101,'Long lasting and transfer resistant foundation that blends perfectly without clogging pores. Protects the skin and smoothes textural difference. Provides fairly strong coverage.',5,1,'/images/p-5.jpg',2),
('Inglot Starlight stick highlighter',72,'Add more glow and radiance to your skin with Starlight Stick Highlighter and enjoy it for hours!',33,1,'/images/p-6.jpg',2),
('Inglot Secret volume mascara',91,'This is the key to unleashing the secret to thicker, longer, and more defined lashes. With a densely packed silicone brush intense, yet very natural volume can be achieved.',13,1,'/images/p-7.jpg',1),
('Inglot Makeup brush 15bjf',45,'Best for: bronzing powder, blush, pressed powder, loose powder. A classic brush for blush and sculpting powder application. Synthetic version available',29,1,'/images/p-8.jpg',3),
('Inglot Body Sparkles 111',80,'Brilliant glitter flakes that reflect light and add color and another dimension. Come in variety of shapes and colors to be used on nails, lips, and all over the body.',41,1,'/images/p-9.jpg',3),
('Inglot Multi-Action Toner',95,'Add more glow and radiance to your skin with Starlight Stick Highlighter and enjoy it for hours!',26,1,'/images/p-10.jpg',1);

INSERT INTO public.ratings("userId","productId","rating")VALUES (1,1,4),(2,2,5),(3,3,3),(4,4,4),(5,5,4),(6,6,5),(7,7,4),(8,8,3),(9,9,4),(10,10,5),(11,11,3),(12,12,5),(13,13,3),(14,14,4),(15,15,3),(16,16,5);