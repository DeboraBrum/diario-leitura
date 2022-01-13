drop table if exists reviews;

create table reviews (
	id serial primary key,
  rate smallint not null,
  name text not null,
  description text,
  user_date date not null,
  image text
);