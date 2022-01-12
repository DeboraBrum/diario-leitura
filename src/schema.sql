drop table reviews if exists;

create table reviews (
	id serial primary key,
  rate smallint not null,
  name text not null,
  description text,
  user_date date not null,
  image text,
);