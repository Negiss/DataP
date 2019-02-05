Set db param :
1. Copy/paste .env and name it .env.local
2. Enter your db id and choose a name for the db at line #27 :
DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name

<br>Set SMTP param :
1. Modify the line #34 :
MAILER_URL=null://localhost

<br>A few commands :

3. php bin/console doctrine:database:create (d:d:c)
4. php bin/console m:migration
5. php bin/console doctrine:migrations:migrate (d:m:m)

And you're ready to go !
<br>
(php bin/console s:r)

<br>
Last things : I can't find a way to get the Address (with CollectionType field) working..

And I need to make the display of the name file in the upload input (but that I just didn't start to look at it)

- Made in a few days while at school
