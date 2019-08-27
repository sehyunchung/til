# postgresql로 시작한 rails 프로젝트에서 `bin/rails db:create`가 동작하지 않을때

Thoughtbot의 [Intermediate Ruby on Rails (Rails 5)](https://thoughtbot.com/upcase/intermediate-ruby-on-rails-five)를 따라가는 중이었다. 하라는 대로:

```bash
$ rails new --database=postgresql -T -B
```
로 init을 하고, 

```bash
$ bin/rails db:create
```
을 했는데,
```bash
could not connect to server: No such file or directory
        Is the server running locally and accepting
        connections on Unix domain socket "/tmp/.s.PGSQL.5432"?
Couldn't create 'shoutr_development' database. Please check your configuration.
rails aborted!
PG::ConnectionBad: could not connect to server: No such file or directory
        Is the server running locally and accepting
        connections on Unix domain socket "/tmp/.s.PGSQL.5432"?
bin/rails:4:in `<main>'
Tasks: TOP => db:create
(See full trace by running task with --trace)
```
라며 돌아가지 않았다.

이것은 postgresql을 설치만 하고 세팅을 해놓지않아서 생긴 일로,

검색 중 [https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb) 요 링크를 찾아 해결 할 수 있었다.

```bash
$ pg_ctl -D /usr/local/var/postgres start && brew services start postgresql
```
를 하니까 해결되었다.

