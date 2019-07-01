rm  -rf db.sqlite3
find . -name "__pycache__" | xargs rm -rf
find . -name "000*"|xargs rm -rf
python manage.py makemigrations
python manage.py migrate
python manage.py create_admin
